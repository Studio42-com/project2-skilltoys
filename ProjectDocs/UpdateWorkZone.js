//Working example code for UPDATES

//Routes:(this one happens to be in index.js)

router.post('/update', function(req, res, next) {
    var item = {
        title: req.body.title,
        content:req.body.content,
        author: req.body.author
    }
});

