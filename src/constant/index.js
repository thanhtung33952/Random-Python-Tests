// export const folderRoot = "/";
export const folderRoot = process.env.NODE_ENV === 'production' ? '/' : '/';
// api root
export const apiRoot =
  process.env.NODE_ENV === 'production'
    ? 'http://124.158.10.143:8082/api/v1'
    : 'http://124.158.10.143:8082/api/v1';
