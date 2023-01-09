const SingleProject = require('../models/ProjectPost');

module.exports = async (req, res) => {
    const project = await SingleProject.findById(req.params.id);
    res.render('projectPage', {
        title: "Single Project Page",
        project
    })
}