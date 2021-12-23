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

    model: {
      type: String,
      required: true,
    },
    image: {
      type: String,

    },
    colorway: {
    type: String,
    },
   shape: {
      type: String,
      required: true,
    },
    style: [{
      type: String,

    }],
    diameter: {
      type: Number,

    },
    width: {
      type: Number,

    },
    gap: {
      type: Number,

    },
    weight: {
      type: Number,

    },

    axle: {
      type: String,

    },
    axleTech: {
      type: String,

    },
    axleSpecs: {
      type: String,

    },
    bearingSize: {
      type: String,
  
    },
    bearing: {
      type: String,
      required: true,
    },
    response: {
      type: String,

    },
    flowable: { 
      type: String,
    },
    surfaceTreatment: {
      type: String,

    },
  
    company: [{type: Schema.Types.ObjectId, ref: 'Company', required: true}],

    bearing: [{type: Schema.Types.ObjectId, ref: 'Bearing'}],

    reviews: [reviewSchema],
 
});

module.exports = mongoose.model("Skilltoy", skilltoySchema);
