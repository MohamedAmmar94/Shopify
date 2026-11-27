import { mongoose } from "mongoose";
import validator from "validator";
//على مستوى الداتا بيز
const ClientSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    validate: [validator.isEmail, "field must be a valid email"],
  },
  password: {
    type: String,
    required: true,
  },
  //   role: {
  //     type: String,
  //     enum: Object.values(userRoles),
  //     default: userRoles.USER,
  //   },
  avatar: {
    type: String,
    default: "storage/avatar.png",
  },
});
const Client = mongoose.model("Client", ClientSchema);
export default Client;
// export const Course = mongoose.model("Course", CourseSchema);
// export Course;
