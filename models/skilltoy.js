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
    colorway: {
    type: String,
    },
   shape: {
      type: String,
      required: true,
    },
    style: {
      type: String,
      //required: true,
    },
    diameter: {
      type: Number,
      //required: true,
    },
    width: {
      type: Number,
      //required: true,
    },
    gap: {
      type: Number,
      //required: true,
    },
    weight: {
      type: Number,
    //required: true,
    },

    axle: {
      type: String,
      //required: true,
    },
    axleTech: {
      type: String,
      //required: true,
    },
    axleSpecs: {
      type: String,
    //required: true,
    },
    bearingSize: {
      type: String,
      //required: true,
    },
    bearingType: {
      type: String,
      //required: true,
    },
    response: {
      type: String,
      //required: true,
    },
    flowable: { 
      type: Boolean,
      default: false
    },
    surfaceTreatment: {
      type: String,
      //required: true,
    },
  
    company: [{type: Schema.Types.ObjectId, ref: 'Company'}],

    bearing: [{type: Schema.Types.ObjectId, ref: 'Bearing'}],

    reviews: [reviewSchema],
 
});

module.exports = mongoose.model("Skilltoy", skilltoySchema);
