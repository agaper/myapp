
let routes = require.context('@/routes/wrap/', true, /\.js$/);

const routelist = [];

routes.keys().forEach(item => {
  routelist.push( routes(item).default );
});


export default routelist
