const DeleteProject = require('../models/ProjectPost');

module.exports = async (req, res) => {
    await DeleteProject.findByIdAndDelete(req.params.id)
    res.redirect('/newProject')
}