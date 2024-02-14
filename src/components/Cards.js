import { useEffect, useState } from "react";
import Card from "./Card"

const Cards = ({ courses, filter }) => {
  const getCourses = () => {
    let allCourses = [];
    if (filter == 1) {
      Object.values(courses).forEach(courseCat => {
        courseCat.forEach((course) => {
          allCourses.push(course);
        });
      });
    }
    else {
      Object.values(courses)[filter - 2].forEach((course) => {
        allCourses.push(course);
      });
    }
    return allCourses;
  }

  if(!courses){
    return (
      <div className="text-[#f0f0f0] text-4xl font-semibold leading-6">
        Courses not found.
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        {
          getCourses().map((course) => {
            return (<Card course={course} key={course.id}/>);
          })
        }
      </div>
    </div>
  )
}

export default Cards
