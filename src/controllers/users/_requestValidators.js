import { isValidIndianMobile, isValidFullName } from '../../utils/index';

export function validateGetAllUsers(req) {
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

export function validateCreateUsers(req) {
  req
    .checkBody('name', 'name is required and minimum 2 characters')
    .custom((v) => isValidFullName(v))
    .exists();
  req
    .checkBody('email', 'Invalid Email')
    .isEmail()
    .exists();
  req
    .checkBody('password', 'Invalid Password/Minimum 5 chars are required')
    .isLength({ min: 5 })
    .exists();
  req
    .checkBody('imageUrl', 'Invalid Image URL')
    .isLength({ min: 5 })
    .optional();
  req
    .checkBody('mobile', 'Mobile number is required/invalid')
    .custom((v) => isValidIndianMobile(v))
    .exists();
  return req.validationErrors();
}

export function validateUpdateUsers(req) {
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

export function validateDeleteUsers(req) {
  req
    .checkBody('userIdCollection', 'userIdCollection is required')
    .custom((arr) => Array.isArray(arr))
    .exists();
  return req.validationErrors();
}
