import User from "../models/user.js";

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
      throw new Error("Invalid Email or Password")
    }
  } catch (error) {
    next(error);
  }
};

export const userProfile =async (res,req,next)=>{
  try {
    let user = await User.findById(req.user._id)

    if(user){
      return res.status(201).json({
        _id: user._id,
        avatar: user.avatar,
        name: user.name,
        email: user.email,
        verified: user.verified,
        admin: user.admin,
      });
    }else {
      let error = new Error ("User not Found");
      error.statusCode =401;
      next(error)
    }
  } catch (error) {
    next(error)
  }
}

export default { registerUser, loginUser };
