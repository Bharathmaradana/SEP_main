const mediaschema = require("../models/media");
const mongoose = require("mongoose");

// exports.getAll = async (req, res) => {
//   try {
//     let collectionName = "2023-05-30";
//     const db = mongoose.connection.getClient(); // Get the MongoDB client object
//     const collection = db.db().collection(collectionName);
//     console.log(collection);
//     const data = await collection.find({}).toArray();

//     const convertedData = data.map((item) => {
//       const startTimestamp = convertUnixTimestamp(item.start_timestamp);
//       const endTimestamp = convertUnixTimestamp(item.end_timestamp);

//       return {
//         ...item,
//         start_timestamp: startTimestamp,
//         end_timestamp: endTimestamp,
//       };
//     });

//     res.json(convertedData);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     res.status(500).json({ error: "Error fetching data" });
//   }
// };

exports.getAllDate = async (req, res) => {
  try {
    let collectionName = req.body.date;
    const db = mongoose.connection.getClient(); // Get the MongoDB client object
    const collection = db.db().collection(collectionName);
    if(collection){}
    else{
      res.json([]);
    }
    const data = await collection.find({}).toArray();

    const convertedData = data.map((item) => {
      const startTimestamp = convertUnixTimestamp(item.start_timestamp);
      const endTimestamp = convertUnixTimestamp(item.end_timestamp);

      return {
        ...item,
        start_timestamp: startTimestamp,
        end_timestamp: endTimestamp,
      };
    });
    // console.log("something");
    console.log(convertedData);
    // console.log("nothing");
    res.json(convertedData);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data" });
  }
};

function convertUnixTimestamp(encodedTimestamp) {
  const unixTimestamp = encodedTimestamp;
  const dateObj = new Date(unixTimestamp * 1000);
  const formattedTime = dateObj.toTimeString().slice(0, 8);

  return formattedTime;
}

exports.createAll = async (req, res) => {
  try {
    const userdata = new mediaschema({
      taco_key: req.body.taco_key,
      date: "2023-05-23",
      end_timestamp: "1684851001.971998",
      img_10_url: "",
      img_1_url: "",
      img_2_url: "",
      img_3_url: "",
      img_4_url: "",
      img_5_url: "",
      img_6_url: "",
      img_7_url: "",
      img_8_url: "",
      img_9_url: "",
      process_id: 631,
      start_timestamp: "1684850985.780269",
      status: "completed",
      steps_done: 10,
      step_10_start_time: "1684851000.3583002",
      step_1_start_time: "1684850985.780269",
      step_2_start_time: "1684850986.9834242",
      step_3_start_time: "1684850988.5912576",
      step_4_start_time: "1684850990.4238508",
      step_5_start_time: "1684850992.256703",
      step_6_start_time: "1684850993.850202",
      step_7_start_time: "1684850995.5208342",
      step_8_start_time: "1684850997.1328108",
      step_9_start_time: "1684850998.738152",
    });
    await userdata.save();
    res.status(200).json(userdata);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
