export function validateGetAllSellers(req) {
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

export function validateCreateSellers(req) {
  req
    .checkBody('name', 'name is required and minimum 2 characters')
    .isLength({ min: 2 })
    .exists();
  req
    .checkBody('email', 'email should be integer')
    .isLength({ min: 5 })
    .exists();
  req
    .checkBody('imageUrl', 'imageUrl should be integer')
    .isLength({ min: 5 })
    .optional();
  req
    .checkBody('city', 'city is required')
    .isLength({ min: 3 })
    .optional();
  return req.validationErrors();
}

export function validateUpdateSellers(req) {
  req
    .checkBody('name', 'name is required and minimum 2 characters')
    .isLength({ min: 2 })
    .exists();
  req
    .checkBody('email', 'email should be integer')
    .isLength({ min: 5 })
    .exists();
  req
    .checkBody('imageUrl', 'imageUrl should be integer')
    .isURL({ min: 5 })
    .optional();
  req
    .checkBody('city', 'city is required')
    .isLength({ min: 3 })
    .optional();
  return req.validationErrors();
}

export function validateDeleteSellers(req) {
  req
    .checkBody('sellerIdCollection', 'sellerIdCollection is required')
    .custom(arr => Array.isArray(arr))
    .exists();
  return req.validationErrors();
}
