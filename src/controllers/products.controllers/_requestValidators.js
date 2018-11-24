export function validateGetALlProducts(req) {
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
