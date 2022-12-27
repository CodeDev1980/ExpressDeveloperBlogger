const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewsSchema = new Schema ({
    name: String,
    summary: String,
    rating: String,
    dateReviewed: {
        type: Date,
        default: new Date
    }
})

const Reviews = mongoose.model('Reviews', ReviewsSchema)
module.exports = Reviews