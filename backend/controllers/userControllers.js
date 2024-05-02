import { uploadPicture } from "../middleware/uploadPictureMiddleware.js";
import User from "../models/user.js";
import { fileRemover } from "../utils/fileRemover.js";

export const registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    //check whether user exits or not
    let user = await User.findOne({ email });

    if (user) {
      throw new Error("User already exits");
    }

    //creating a new user
    user = await User.create({
      name,
      email,
      password,
    });

    return res.status(201).json({
      _id: user._id,
      avatar: user.avatar,
      name: user.name,
      email: user.email,
      verified: user.verified,
      admin: user.admin,
      token: await user.generateJWT(),
    });
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      throw new Error("Email Not Found!!! ");
    }

    if (await user.comparePassword(password)) {
      return res.status(201).json({
        _id: user._id,
        avatar: user.avatar,
        name: user.name,
        email: user.email,
        verified: user.verified,
        admin: user.admin,
        token: await user.generateJWT(),
      });
    } else {
      throw new Error("Invalid Email or Password");
    }
  } catch (error) {
    next(error);
  }
};

export const userProfile = async (res, req, next) => {
  try {
    let user = await User.findById(req.user._id);

    if (user) {
      return res.status(201).json({
        _id: user._id,
        avatar: user.avatar,
        name: user.name,
        email: user.email,
        verified: user.verified,
        admin: user.admin,
      });
    } else {
      let error = new Error("User not Found");
      error.statusCode = 401;
      next(error);
    }
  } catch (error) {
    next(error);
  }
};

export const updateProfile = async (req, res, next) => {
  try {
    let user = await User.findById(req.user._id);
    if (!user) {
      throw new Error("User not found !!");
    }
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    if (req.body.password && req.body.password.length < 8) {
      throw new Error("Password length must be at least 8 characters");
    } else if (req.body.password) {
      user.password = req.body.password;
    }
    const updatedUserProfile = await user.save();
    res.json({
      _id: upadteProfile._id,
      avatar: upadteProfile.avatar,
      name: upadteProfile.name,
      email: upadteProfile.email,
      verified: upadteProfile.verified,
      admin: upadteProfile.admin,
      token: await upadteProfile.generateJWT(),
    });
  } catch (error) {
    next(error);
  }
};

export const updateProfilePicture = async (req, res, next) => {
  try {
    const upload = uploadPicture.single("profilePicture");

    upload(req, res, async function (err) {
      if (err) {
        const error = new Error("An unknown error has occured" + err.message);
        next(error);
      } else {
        // No error
        if (req.file) {
          let filename;
          let updatedUser = await User.findById(req.user._id);
          filename = updatedUser.avatar;
          if (filename) {
            fileRemover(filename);
          }
          updatedUser.avatar=req.file.filename
          await updatedUser.save()
          res.json({
            id: updatedUser._id,
            avatar: updatedUser.avatar,
            name: updatedUser.name,
            email: updatedUser.email,
            verified: updatedUser.verified,
            admin: updatedUser.admin,
            token: await updatedUser.generateJWT(),
          });
        } else {
          let filename;
          let updatedUser = await User.findById(req.user._id);
          filename = updatedUser.avatar;
          updatedUser.avatar = "";
          await updatedUser.save();
          fileRemover(filename);
          res.json({
            id: updatedUser._id,
            avatar: updatedUser.avatar,
            name: updatedUser.name,
            email: updatedUser.email,
            verified: updatedUser.verified,
            admin: updatedUser.admin,
            token: await updatedUser.generateJWT(),
          });
        }
      }
    });
  } catch (error) {}
};

export default { registerUser, loginUser, updateProfile, updateProfilePicture };
