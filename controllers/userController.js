const userModel = require("../model/userModel");
const encryptAndDecrypt = require("../utils/bcrypt");

const loginController = async (request, response) => {
  try {
    const { email, password } = request.body;
    const user = await userModel.findOne({ email: email });
    if (user && user.__id) {
      if (encryptAndDecrypt.matchPwd(password, user.password)) {
        response.status(200).json({ message: "Login Successful" });
      } else {
        response.status(403).json({ message: "Invalid Credentials" });
      }
    } else {
      response.status(404).json({ message: "User not found!" });
    }
  } catch (error) {
    response.status(500).json({ message: "Internal Server Error" });
    console.log(error)
  }
};

const registerController = async (request, response) => {
  try {
    const { username, email, password } = request.body;

    const hashPwd = await encryptAndDecrypt.hashPwd(password);
    console.log(hashPwd)
    const user = await userModel.create({
        email: email,
        username: username,
        password: hashPwd,
    });

    if (user && user._id) {
      response.status(201).json({ message: "User Registered Successfully" });
    } else {
      response.status(404).json({ message: "User not Registered" });
      console.log(error)
    }
  } catch (error) {
    response.status(500).json({ message: "Internal Server Error" });
    console.log(error)
  }
};

module.exports = { loginController, registerController };
