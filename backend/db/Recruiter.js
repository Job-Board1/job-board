const mongoose = require("mongoose");

let schema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    contactNumber: {
      type: String,
    },
    bio: {
      type: String,
    },
  },
  { collation: { locale: "Tn" } }
);

module.exports = mongoose.model("RecruiterInfo", schema);
