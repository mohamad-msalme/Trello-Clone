export const errorToObject = (error: Error) => {
  return JSON.parse(JSON.stringify(error, Object.getOwnPropertyNames(error)));
};
