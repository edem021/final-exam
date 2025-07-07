import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const CoursePage = () => {
  const [course, setCourse] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/course/${id}`);
        if (!res.ok) throw new Error("Failed to fetch course");
        const data = await res.json();
        setCourse(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCourse();
  }, [id]);

  return (
    <div className="w-[1200px] justify-center flex min-h-screen border-l border-r border-slate-600">
      <div className="mt-10 border rounded-lg p-4 flex flex-col justify-center items-center gap-2 h-70 w-100">
        <h2 className="text-3xl font-semibold">{course.title}</h2>
        <p>Instructor: {course.instructor}</p>
        <p>Price: {course.price}€</p>
        <p>Duration: {course.duration} hour</p>
      </div>
    </div>
  );
};

export default CoursePage;
