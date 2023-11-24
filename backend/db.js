const mongoose = require("mongoose");

const connectToDB = (URI) => {
  mongoose.connect(URI).then(console.log(`Database listening on ${URI}`));
};

module.exports = connectToDB;
