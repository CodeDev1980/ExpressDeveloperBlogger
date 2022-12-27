const SingleProfile = require('../models/Users');

module.exports = async (req, res) => {
    const member = await SingleProfile.findById(req.params.id);
    res.render('profile', {
        title: "Single Profile Page",
        member
    })
}