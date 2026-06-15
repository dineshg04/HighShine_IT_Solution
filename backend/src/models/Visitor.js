const mongoose = require("mongoose");

const visitorSchema = new mongoose.Schema(
  {
    
    page: {
      type: String,
      required: [true, "Page is required"],
      trim: true,
    },


    referrer: {
      type: String,
      default: "direct",
      trim: true,
    },

    
    country: {
      type: String,
      required: [true, "Country is required"],
      trim: true,
    },

    
    timestamp: {
      type: Date,
      default: Date.now,
      index: true,  
    },
  },
  {
    
    timestamps: true,
    
  }
);


visitorSchema.index({ page: 1, country: 1 });

const Visitor = mongoose.model("Visitor", visitorSchema);

module.exports = Visitor;
