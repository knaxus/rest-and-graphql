import sendResponse from './sendResponse';
import jwt from './jwt';
import handleCustomThrow from './handleCustomThrow';

const isValidIndianMobile = (v) => /^[6789]\d{9}$/.test(v);
const isValidFullName = (v) => String(v).split(' ').length >= 2;

export {
  sendResponse, handleCustomThrow, isValidIndianMobile, isValidFullName, jwt,
};
