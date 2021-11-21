// Routes holds route specific meta data
const Routes = [
  // page routes
  {
    match: '/',
    exact: true,
    path: '/assets/js/views/index.mjs',
  },
  {
    match: '/posts/.*',
    exact: true,
    path: '/assets/js/views/posts/show.mjs',
  },

  // other routes
  // not-found
  {
    match: '',
    path: '/assets/js/views/not-found.mjs',
  },
];

export const getRoute = (path) => {
  return Routes.find((route) => {
    if (route.match === '') {
      return true;
    }

    let regExpStr = route.match;
    if (route.exact) {
      regExpStr = `^${regExpStr}$`;
    }

    return new RegExp(regExpStr).test(path);
  });
};

export default Routes;
