const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
        default: "https://unsplash.com/photos/gazebo-lighted-houses-SjG7MA4n8S0",
        set: (v) => v === "" ? "https://unsplash.com/photos/gazebo-lighted-houses-SjG7MA4n8S0" : v,
    },
    price: {
        type: Number,
    },
    location:{
        type: String,
    },
    country: {
        type: String,
    },
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;