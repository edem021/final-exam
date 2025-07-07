import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="h-16 bg-slate-800 shadow-sm shadow-slate-700 flex justify-between items-center px-5">
      <Link to="/">
        <h1 className="text-3xl uppercase font-semibold tracking-wide">
          Courses app
        </h1>
      </Link>
      <div className="flex gap-4">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/create" className="link">
          Create
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
