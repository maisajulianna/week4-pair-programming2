const mongoose = require('mongoose');

const servicesSchema = new mongoose.Schema({
    id: {
        type: Int,
        required: true,
        unique: true,
    },
    icon: {
        type: String,
        unique: true,
    },
    title: {
        type: String,
        required: true,
        unique: true,
    },
    text: {
        type: String,
        required: true,
        unique: true,
    },
});


const tourSchema = new mongoose.Schema({
    id: {
      type: Int,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      required: true,
      unique: true,
    },
    date: {
      type: String,
      required: true,
    },
    title: {
        type: String,
        required: true,
        unique: true,
    },
    info: {
        type: String,
        required: true,
        unique: true,
    },
    location: {
        type: String,
        required: true,
    },
    duration: {
        type: Int,
        required: true,
    },
    cost: {
        type: Int,
        required: true,
    }
  });

const Tour = mongoose.model('Tour', servicesSchema);

const userSchema = new mongoose.Schema({
    id: {
        type: Int,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    role: {
        type: String,
        required: true,
    },
});

const User = mongoose.model('User', userSchema);

module.exports = { 
    Service,
    Tour,
    User
};