const User = require('../../Models/Users');
const encrypt = require('../../Lib/encrypt');

const createUser = async (userInformation) => {
    userInformation.password = await encrypt.hashPassword(userInformation.password);
    const user = new User(userInformation);
    const saveUser = await user.save();
    return { id: saveUser.id, name: saveUser.name };
};

const getAllUsers = async () => await User.find({}).exec();

const getUserById = async (id) => await User.findById(id).exec();

const getUserByQuery = async (queryParams) => await User.find(queryParams).exec();

const updateUser = async (id, update) => await User.findByIdAndUpdate(id, update, { new: true }).exec();

const deleteUser = async (id) => {
  const deleteUserById = await User.findByIdAndDelete(id).exec()
  return deleteUserById.id
}

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    getUserByQuery,
    updateUser,
    deleteUser
};
