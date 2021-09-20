var ghpages = require('gh-pages');

ghpages.publish('./built/',{
    branch: 'pages',
}, function(err) {
    console.log(err)
});