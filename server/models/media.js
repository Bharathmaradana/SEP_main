const mongoose = require("mongoose");

const mediaschema = new mongoose.Schema(
  {
    taco_key: {
      type: String,
      required: true,
    },
    date: {
      type: String,
    },
    end_timestamp: String,
    img_10_url: String,
    img_1_url: String,
    img_2_url: String,
    img_3_url: String,
    img_4_url: String,
    img_5_url: String,
    img_6_url: String,
    img_7_url: String,
    img_8_url: String,
    img_9_url: String,
    process_id: Number,
    start_timestamp: String,
    status: String,
    steps_done: Number,
    step_10_start_time: String,
    step_1_start_time: String,
    step_2_start_time: String,
    step_3_start_time: String,
    step_4_start_time: String,
    step_5_start_time: String,
    step_6_start_time: String,
    step_7_start_time: String,
    step_8_start_time: String,
    step_9_start_time: String,


  }
);

module.exports = Media =  mongoose.model("MediaSchema", mediaschema);



