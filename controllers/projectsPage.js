const BlogPost = require('../models/ProjectPost');

module.exports = async (req, res) => {
    const pageProjects = await BlogPost.find({}).sort({_id: -1}).populate('userid');
    res.render('projects', {
        title: "Projects Page",
        pageProjects
    })
}