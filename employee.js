const mongoose = require('mongoose');
const employeeSchema = new mongoose.Schema({
  id: Number,
  name: String,
  department: String,
  email: String,
  gender: String,
  location: String
});

module.exports = mongoose.model('Employee', employeeSchema);