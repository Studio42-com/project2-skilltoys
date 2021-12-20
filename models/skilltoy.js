const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: {type: String, required: true},

    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    userAvatar: String
  }, {
    timestamps: true
  });
  
  
  const skilltoySchema = new Schema({ 
    brand: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    image: {
      type: String,
      //required: true,
  },


    reviews: [reviewSchema],
 
});

module.exports = mongoose.model("Skilltoy", skilltoySchema);
