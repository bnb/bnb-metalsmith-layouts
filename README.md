# bnb-metalsmith-layouts
Reduced test case for metalsmith-layouts with Handlebars on Windows, throwing an error about strftime.

# RESOLVED
There was a call to strftime in the `layouts/blog.hbs` index layout that was an artifact of using the Node.js Metalsmith blog index as a base.
