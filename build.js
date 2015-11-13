var metalsmith  = require('metalsmith');
var layouts     = require('metalsmith-layouts');

metalsmith(__dirname)
  .use(layouts({
    engine: "handlebars",
    partials: "partials"
  }))
  .build(function(err) {
    if(err) throw err;
  })
