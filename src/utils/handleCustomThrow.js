import sendResponse from './sendResponse';

export default function handleCustomThrow(res, error) {
  if (error.code === 400) {
    return sendResponse(res, error.code, {}, error.msg);
  }
  if (error.code === 401) {
    return sendResponse(res, error.code, {}, error.msg);
  }
  if (error.code === 403) {
    return sendResponse(res, error.code, {}, error.msg);
  }
  if (error.code === 404) {
    return sendResponse(res, error.code, {}, error.msg);
  }
  return sendResponse(res, 500, {}, 'Something went wrong');
}
