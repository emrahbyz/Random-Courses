import Course from "./Course";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Courses({ courses, removeCourse }) {
  const [index, setİndex] = useState(0);
  const { content, title, price } = courses[index];

  const checkIndex = (index) => {
    if (index < 0) {
      return courses.length - 1;
    }
    if (index > courses.length - 1) {
      return 0;
    }
    return index;
  };

  const getRandomCourse = () => {
    let randomNumber = Math.floor(Math.random() * courses.length);

    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setİndex(checkIndex(randomNumber));
  };
  const prevCourse = () => {
    setİndex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };
  const nextCourse = () => {
    setİndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };
  return (
    <div className="courseMainDiv">
      <div className="courseTitle">
        <h2>Kurslarım</h2>
        <button className="cardDeleteBtn" onClick={getRandomCourse}>
          Rastgele Kurs Ata!
        </button>
      </div>
      <div className="cardDiv">
        <button className="prevNextBtn" onClick={prevCourse}>
          <FaChevronLeft />
        </button>
        <div className="card">
          <div className="cardTitlePrice">
            <h2 className="cardTitle"> {title} </h2>
            <h4 className="cardPrice"> {price}TL </h4>
          </div>
          <p> {content} </p>
          {/* <button className="cardDeleteBtn" onClick={() => removeOneCourse(id)}>
            Sil
          </button> */}
        </div>
        <button className="prevNextBtn" onClick={nextCourse}>
          <FaChevronRight />
        </button>
        {/* {courses.map((course) => {
          return (
            <Course
              key={course.id}
              {...course}
              removeOneCourse={removeCourse}
            />
          );
          //course={course}
        })} */}
      </div>
    </div>
  );
}

export default Courses;
