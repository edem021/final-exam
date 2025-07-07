import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePage = () => {
  //Lehetne csak egy form state és loading state

  /*  
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
  title: "",
  category: "",
  instructor: "",
  price: 0,
  duration: 0,
  level: "",
  isOnline: false,
  isAvailable: false,
}); */

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [instructor, setInstructor] = useState("");
  const [price, setPrice] = useState(0);
  const [duration, setDuration] = useState(0);
  const [level, setLevel] = useState("");
  const [isOnline, setIsOnline] = useState(false);
  const [available, setAvailable] = useState(false);
  const navigate = useNavigate();

  const handleCreateCourse = async (e) => {
    e.preventDefault();

    const data = {
      title,
      category,
      instructor,
      price,
      duration,
      level,
      isOnline,
      available,
    };

    try {
      //setLoading(true)
      const res = await fetch("http://localhost:5000/api/course", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to create course");
      }

      navigate("/");
    } catch (error) {
      console.error(error);
    }
    /* finally{
      setLoading(false)
    } */
  };

  return (
    <div className="flex flex-col items-center justify-center p-10 gap-4">
      <h1 className="text-2xl font-semibold">Create Course</h1>
      <form
        onSubmit={handleCreateCourse}
        className="flex flex-col bg-blue-950 border rounded-lg gap-2 p-5 w-90"
      >
        <label htmlFor="title">Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          //onChange={(e) => setForm({...form, title: e.target.value})}
          type="text"
          id="title"
          className="ring rounded"
        />

        <label htmlFor="category">Category</label>
        <input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          //onChange={(e) => setForm({...form, category: e.target.value})}
          type="text"
          id="category"
          className="ring rounded"
        />

        <label htmlFor="instructor">Instructor</label>
        <input
          value={instructor}
          onChange={(e) => setInstructor(e.target.value)}
          //onChange={(e) => setForm({...form, instructor: e.target.value})}
          type="text"
          id="instructor"
          className="ring rounded"
        />

        <label htmlFor="price">Price</label>
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          //onChange={(e) => setForm({...form, price: e.target.value})}
          type="number"
          id="price"
          className="ring rounded"
        />

        <label htmlFor="duration">Duration</label>
        <input
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          //onChange={(e) => setForm({...form, duration: e.target.value})}
          type="number"
          id="duration"
          className="ring rounded"
        />

        <label htmlFor="level">Level</label>
        <input
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          //onChange={(e) => setForm({...form, level: e.target.value})}
          type="text"
          id="level"
          className="ring rounded"
        />

        <div>
          <label htmlFor="isOnline" className="pr-2">
            Online
          </label>
          <input
            value={isOnline}
            onChange={(e) => setIsOnline(e.target.value)}
            // checkboxnál nem value-t hanem checked-t hasznalunk
            // checked={isOnline}
            // onChange={(e) => setIsOnline(e.target.checked)}
            type="checkbox"
            id="isOnline"
          />
        </div>

        <div>
          <label htmlFor="available" className="pr-2">
            Available
          </label>
          <input
            value={available}
            onChange={(e) => setAvailable(e.target.value)}
            // checkboxnál nem value-t hanem checked-t hasznalunk
            // checked={isOnline}
            // onChange={(e) => setIsOnline(e.target.checked)}
            type="checkbox"
            id="available"
          />
        </div>

        <button
          /* disabled={loading} */
          type="submit"
          className="border rounded px-4 py-1 cursor-pointer"
        >
          Create
          {/* {loading ? "Loading..." : "Create"} */}
        </button>
      </form>
    </div>
  );
};

export default CreatePage;
