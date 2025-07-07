# 💻 Programming Course Manager — Create & Manage Coding Courses

**Description:**
An application to manage programming courses, where new courses can be added to the database, displayed on the frontend, and managed by users.

---

## 1⃣️ Backend Setup

- Create a new project and a cluster on [MongoDB Atlas](https://cloud.mongodb.com/).
- Set up an **MVC** folder structure for your backend.
- Store sensitive data like MongoDB URI and port number in a `.env` file.
- Create a `Course` model with the following fields:
  `title`, `category`, `instructor`, `price` (EUR), `duration` (h), `level` , `isOnline`, `available`, `createdAt`(Date), `updatedAt`(Date).
- Connect your backend to MongoDB using Mongoose.

---

## 2⃣️ CRUD & Postman

- Following the **MVC pattern**, create:

  - Routes for Create, Read, Update, Delete operations.
  - Controllers containing the logic for each route.

- Test your routes with **Postman**:

  - Test creating, fetching, updating, and deleting courses.
  - After successful tests, delete all documents and insert the following 8 course documents:

```json
[
  {
    "title": "Complete JavaScript Bootcamp",
    "category": "Frontend",
    "instructor": "John Doe",
    "price": 99.99,
    "duration": 40,
    "level": "Beginner",
    "isOnline": true,
    "available": true
  },
  {
    "title": "React & Redux Masterclass",
    "category": "Frontend",
    "instructor": "Jane Smith",
    "price": 129.99,
    "duration": 50,
    "level": "Intermediate",
    "isOnline": true,
    "available": true
  },
  {
    "title": "Backend Development with Node.js",
    "category": "Backend",
    "instructor": "Mike Brown",
    "price": 149.99,
    "duration": 60,
    "level": "Intermediate",
    "isOnline": true,
    "available": true
  },
  {
    "title": "Fullstack Web Development",
    "category": "Fullstack",
    "instructor": "Sarah Johnson",
    "price": 199.99,
    "duration": 80,
    "level": "Advanced",
    "isOnline": true,
    "available": false
  },
  {
    "title": "Python for Data Science",
    "category": "Data Science",
    "instructor": "David Wilson",
    "price": 179.99,
    "duration": 70,
    "level": "Intermediate",
    "isOnline": false,
    "available": true
  },
  {
    "title": "Intro to Cybersecurity",
    "category": "Security",
    "instructor": "Emily Davis",
    "price": 89.99,
    "duration": 35,
    "level": "Beginner",
    "isOnline": true,
    "available": true
  },
  {
    "title": "Machine Learning A-Z",
    "category": "Data Science",
    "instructor": "Carlos Martinez",
    "price": 219.99,
    "duration": 90,
    "level": "Advanced",
    "isOnline": true,
    "available": false
  },
  {
    "title": "DevOps Fundamentals",
    "category": "DevOps",
    "instructor": "Laura Chen",
    "price": 159.99,
    "duration": 55,
    "level": "Intermediate",
    "isOnline": false,
    "available": true
  }
]
```

---

## 3⃣️ Frontend Setup

- Initialize your React project with **Vite**, clean up starter files.
- Install **TailwindCSS**, or basic CSS for layout.
- Create **3 routes**:

  - `HomePage` — list of available courses.
  - `CreatePage` — form to add new courses.
  - `CoursePage` — detailed view for a single course.

- Create reusable component `CourseCard` to display individual course information.
- Add a **Navbar** with links to `HomePage` and `CreatePage`.

---

## 4⃣️ HomePage

- Display a centered **Programming Courses** title.
- Display courses sorted by **price**, from cheapest to most expensive.
- In a separated section show only courses where `available` is `true`.
- in new section display the most expensive `Intermediate` course .

---

## 5⃣️ CreatePage

- Add a form to submit new courses to the database.
- After a successful creation the app navigates the user to the `HomePage`

---

## 6⃣️ CoursePage & Card Updates

- Each `CourseCard` should have:

  - A **View Details** button navigating to `CoursePage`.
  - A **Delete** button removing the course from the database and updating `HomePage`.

---

## 7⃣️ Testing the Application

✔️ Pages available:

- `HomePage` — Shows all available courses sorted by price.
- `CreatePage` — Form to add new courses.
- `CoursePage` — Detailed course view, accessible via button.

✔️ Features:

- courses are sorted by `price` and displayed.
- Only `available: true` courses are displayed.
- The most expensive `Intermediate` course is displayed.
- Users can create, view, and delete courses.
- Navbar present on all pages.

---

## 8⃣️ Optional Features

- **Edit Course:**
  Add an **Edit** button to `CourseCard` opening a modal to update course details.

- **Search Function:**
  Add a search input to filter courses by `category` or `instructor` in real-time.

- Enhance your project with CSS to improve its design and make it more visually appealing.

---

## 9⃣️ GitHub Guidelines

- Do **not** upload `node_modules` or `.env` files.
- Make the repository public, or add me as contributor and share the link on Discord.

---

**Thank you & Happy Coding! 🚀**
