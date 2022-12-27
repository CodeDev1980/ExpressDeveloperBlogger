const UserProfiles = require('../models/Users');

module.exports = async (req, res) => {
    const members = await UserProfiles.find({}).sort({_id: -1});
    res.render('profiles', {
        title: "Members Page",
        members
    })
}