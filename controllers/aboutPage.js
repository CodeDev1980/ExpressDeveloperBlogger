const UserProfiles = require("../models/Users");


module.exports = async (req, res) => {
    const members = await UserProfiles.find({}).limit(1).sort({_id: -1});
    res.render('about', {
        title: "About Stephen Brooks",
        members
    })
}