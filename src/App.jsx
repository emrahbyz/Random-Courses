import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Courses from "./Courses";
import Loading from "./Loading";

function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const deleteCourse = (deleteId) => {
    // parametre olarak istediğimiz değeri verebiliriz.
    const afterDeletedCourses = courses.filter(
      (course) => course.id !== deleteId
    );
    setCourses(afterDeletedCourses);
  };
  const fetchCourses = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3000/courses");
      setCourses(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, []);
  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <>
          {courses.length === 0 ? (
            <div className="refreshDiv">
              <h2>Kursların hepsini sildin!</h2>
              <button
                className="cardRefreshBtn"
                onClick={() => {
                  fetchCourses();
                }}
              >
                Kursları Yenile
              </button>
            </div>
          ) : (
            <Courses courses={courses} removeCourse={deleteCourse} />
          )}
        </>
      )}
    </div>
  );
}

export default App;
