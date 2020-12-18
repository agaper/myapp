
let routes = require.context('@/routes/wrap/', true, /\.js$/);

const routelist = [];

routes.keys().forEach(item => {
  console.log(item, routes(item).default);
  routelist.push( routes(item).default );
});


export default routelist
