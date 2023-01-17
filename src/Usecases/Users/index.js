const User = require("../../Models/Users")
const encrypt = require("../../Lib/encrypt")

const createUser = async (userInformation) => {
  userInformation.password = await encrypt.hashPassword(
    userInformation.password
  )
  const user = new User(userInformation)
  const saveUser = await user.save()
  return { id: saveUser.id, name: saveUser.name }
}

module.exports = {
  createUser
}
