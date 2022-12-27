const DeleteMember = require('../models/Users');

module.exports = async (req, res) => {
    await DeleteMember.findByIdAndDelete(req.params.id)
    req.session.destroy(() => {
        res.redirect('/')
    })
}