import React from "react";
import "./Courses.css";

export const Courses = () => {
  return (
    <div className="container" style={{ height: "100vh" }}>
      {/* <div className='row h-100 align-items-center'>
                <div className='col-lg-4 col-12 cardLinkCourseContainer text-center '>
                    <h2>Cursos Online</h2>
                </div>
                <div className='col-lg-4 col-12 cardLinkCourseContainer text-center'>
                    <h2>Cursos Online</h2>
                </div>

                <div className='col-lg-4 col-12 cardLinkCourseContainer text-center'>
                    <h2>Cursos Online</h2>
                </div>


            </div> */}
      <div className="row h-100 align-items-center">
        <div className="ag-courses_item col-lg-4 col-12 text-center">
          <a href="#" className="ag-courses-item_link">
            <div className="ag-courses-item_bg"></div>

            <div className="ag-courses-item_title">Cursos online</div>
          </a>
        </div>
        <div className="ag-courses_item col-lg-4 col-12 text-center">
          <a href="#" className="ag-courses-item_link">
            <div className="ag-courses-item_bg"></div>

            <div className="ag-courses-item_title">Cursos online</div>
          </a>
        </div>
        <div className="ag-courses_item col-lg-4 col-12 text-center">
          <a href="#" className="ag-courses-item_link">
            <div className="ag-courses-item_bg"></div>

            <div className="ag-courses-item_title">Cursos online</div>
          </a>
        </div>
      </div>
    </div>
  );
};
