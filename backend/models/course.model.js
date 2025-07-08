import { model, Schema } from "mongoose";
// extra validáció és visszajelzés hiba esetén
const courseSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      // required: [true, "Title is required"], // Ha nincs title mi legyen a válasz
    },
    category: {
      type: String,
      required: true,
    },
    instructor: {
      type: String,
      required: true,
      // Ha van felesleges space a string előtt vagy mögött akkor azt kitörli.
      // trim: true,
    },
    price: {
      type: Number,
      required: true,
      //Extra validáció : nem lehet kisebb mint 0
      // min: [0, "price cannot be negative"]
    },
    duration: {
      type: Number,
      required: true,
    },
    level: {
      type: String,
      required: true,
      //Extra validáció: csak ezek közül lehet valamelyik opció
      // enum : ["Beginner", "Intermediate", "Advanced"]
    },
    isOnline: {
      type: Boolean,
      required: true,
    },
    available: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default model("Course", courseSchema);
