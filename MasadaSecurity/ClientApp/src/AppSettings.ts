export const server =
  process.env.REACT_APP_ENV === 'production' ? '' : 'https://localhost:44382';

export const webAPIUrl = `${server}/api`;
