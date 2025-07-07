import { useEffect } from "react";
import { useState } from "react";
import CourseCard from "../components/CourseCard.jsx";

const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [mostExpensiveCourse, setMostExpensiveCourse] = useState({});

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/course");

        if (!res.ok) throw new Error("Failed to fetch courses");

        const data = await res.json()
        setCourses(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCourses();
  }, []);

  useEffect(() => {
    if (courses.length > 0) {
      const intermediateCourses = courses.filter(
        (course) => course.level.toLowerCase() === "intermediate"
      );

      const mostExpensive = intermediateCourses.reduce(
        (prevCourse, currentCourse) =>
          currentCourse.price > prevCourse.price ? currentCourse : prevCourse,
        intermediateCourses[0]
      );

      setMostExpensiveCourse(mostExpensive);
    }
  }, [courses]);

  const handleCourseDeleted = (id) => {
    setCourses((prev) => prev.filter((course) => course._id !== id));
  };

  return (
    <div className="flex flex-col items-center px-20 py-10 gap-4 w-[1200px] border-l border-r border-slate-600 min-h-screen">
      <h2 className="text-3xl font-semibold">Courses</h2>
      <section className="flex flex-wrap gap-5 px-20 pb-20 justify-center items-center border-b w-full">
        {[...courses]
          .sort((a, b) => a.price - b.price)
          .map((course) => (
            <CourseCard
              key={course._id}
              course={course}
              onDelete={handleCourseDeleted}
            />
          ))}
      </section>

      <h2 className="text-3xl font-semibold">Available Courses</h2>
      <section className="flex flex-wrap gap-5 px-20 pb-20 justify-center items-center border-b w-full">
        {courses.map((course) => {
          {
            return (
              course.available && (
                <CourseCard
                  key={course._id}
                  course={course}
                  onDelete={handleCourseDeleted}
                />
              )
            );
          }
        })}
      </section>

      <h2 className="text-3xl font-semibold">
        Most expensive intermediate course
      </h2>
      <section className="flex flex-wrap gap-5 px-20 pb-20 justify-center items-center border-b w-full">
        <CourseCard
          course={mostExpensiveCourse}
          onDelete={handleCourseDeleted}
        />
      </section>
    </div>
  );
};

export default HomePage;
