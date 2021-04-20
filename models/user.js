const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    avatar_url: String,
    username: String,
    name: String,
    bio: String,
    github_url: String,
    portfolio_url: String,
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
