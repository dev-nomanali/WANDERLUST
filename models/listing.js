const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    filename: {
      type: String,
      default: "listingimage",
    },
    url: {
      type: String,
      default:
        "https://unsplash.com/photos/balcony-with-umbrella-and-plants-against-blue-sky-0s1x4DoRReo",
      set: (v) =>
        v === ""
          ? "https://unsplash.com/photos/balcony-with-umbrella-and-plants-against-blue-sky-0s1x4DoRReo"
          : v,
    },
  },
  price: Number,
  location: String,
  country: String,
});


const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;