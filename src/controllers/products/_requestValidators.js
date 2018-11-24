export function validateGetAllProducts(req) {
  req
    .checkQuery('limit', 'limit should be integer')
    .isInt()
    .optional();
  req
    .checkQuery('offset', 'offset should be integer')
    .isInt()
    .optional();
  req
    .checkQuery('search', 'search should be minimun 1 characters')
    .isLength({ min: 1 })
    .optional();
  return req.validationErrors();
}

export function validateCreateProduct(req) {
  req
    .checkBody('name', 'name is required and minimum 2 characters')
    .isLength({ min: 2 })
    .exists();
  req
    .checkBody('description', 'description should be integer')
    .isLength({ min: 5 })
    .optional();
  req
    .checkBody('price', 'price is required')
    .isNumeric()
    .optional();
  return req.validationErrors();
}

export function validateUpdateProduct(req) {
  req
    .checkBody('name', 'name is required and minimum 2 characters')
    .isLength({ min: 2 })
    .exists();
  req
    .checkBody('description', 'description should be integer')
    .isLength({ min: 5 })
    .optional();
  req
    .checkBody('price', 'price is required')
    .isNumeric()
    .optional();
  return req.validationErrors();
}

export function validateDeleteProduct(req) {
  req
    .checkBody('productIdCollection', 'productIdCollection is required')
    .custom(arr => Array.isArray(arr))
    .exists();
  return req.validationErrors();
}
