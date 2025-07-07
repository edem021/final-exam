import Course from "../models/course.model.js";

export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find({});

    // Kezelhetjük külön ha üres az adatbázis
    /* if (courses.length === 0) {
    return res.status(200).json({ message: "No courses found", courses: [] });
    } */

    res.status(200).json(courses);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching courses", error: error.message });
  }
};

export const createCourse = async (req, res) => {
  try {
    const {
      title,
      category,
      instructor,
      price,
      duration,
      level,
      isOnline,
      available,
    } = req.body;
    if (
      !title ||
      !category ||
      !instructor ||
      !price ||
      !duration ||
      !level ||
      isOnline === undefined ||
      available === undefined
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const course = await Course.create(req.body);
    res.status(201).json(course);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating course", error: error.message });
  }
};

export const getCourse = async (req, res) => {
  // Lehetne validálni az id-t még azelőtt hogy elkérjük a course-t
  // const { id } = req.params;

  /* if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid destination ID format" });
  } */
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.status(200).json(course);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching course", error: error.message });
  }
};

export const updateCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.status(200).json(course);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating course", error: error.message });
  }
};

export const deleteCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.status(200).json({ message: "Course deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting course", error: error.message });
  }
};
