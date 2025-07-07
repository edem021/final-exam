import { Link } from "react-router-dom";

const CourseCard = ({ course, onDelete }) => {
  const handleDeleteCourse = async () => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/course/${course._id}`,
        {
          method: "DELETE",
        }
      );
      if (!res.ok) throw new Error("Failed to delete course");
      onDelete(course._id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="border-gray-300 border rounded-lg flex flex-col gap-1 items-center justify-center p-2 w-full">
      <h3 className="text-2xl font-semibold">{course.title}</h3>
      <div className="w-full px-5 py-1">
        <p>Category: {course.category}</p>
        <p>Price: {course.price}€</p>
        <p>Level: {course.level}</p>
        {course.isOnline ? (
          <p className="pb-5">Online course</p>
        ) : (
          <p className="pb-5">In-person course</p>
        )}
        <div className="flex justify-between">
          <Link
            to={`/course/${course._id}`}
            className="border px-4 py-1 rounded cursor-pointer"
          >
            View Details
          </Link>
          <button
            className="border px-4 py-1 rounded cursor-pointer"
            onClick={handleDeleteCourse}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
