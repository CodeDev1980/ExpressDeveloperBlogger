const BlogPost = require('../models/BlogPost');
const ReviewsPost = require('../models/Reviews');

module.exports = async (req, res) => {
    const articles = await BlogPost.find({}).limit(4).sort({_id: -1}).populate('userid');
    const reviews = await ReviewsPost.find({}).limit(1).sort({_id: -1});
    res.render('index', {
        title: "Home Page",
        articles, reviews
    })
}