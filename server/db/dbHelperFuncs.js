const db = require('mongoose');
const { Deck, User, Chat } = require('./index.js');

const obtainAllUsers = () => {
  User.find({});
};

const createUser = (data) => {
  User.create(data);
};

const findUser = (user, cb) => {
  User.find({username: { $regex: `${user}`}})
    .then(foundUsers=> cb(foundUsers))
    .catch(err => console.log(err));
};

const findUserById = id => {
  User.findById(id)
    .then(data => data)
    .catch(err => console.log(err, 'find by id err'));
};

const changeUsername = (loggedInId) => { //DOES NOT WORK
  User.findOneAndUpdate(
    { _id: loggedInId },
    { username: 'NOT SHLOME' }
  );
};

module.exports = {
  obtainAllUsers,
  createUser,
  findUser,
  findUserById,
  changeUsername
};
