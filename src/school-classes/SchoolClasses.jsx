import React from "react";
import SchoolClassesData from "./SchoolClassesData";

const SchoolClasses = () => {
  return (
    <div>
      {SchoolClassesData.map((items) => {
        const {
          id,
          image,
          titel,
          teacherImage,
          teacherName,
          category,
          teacherFee,
          age,
          time,
          capacity,
        } = items;
        return (
          <div key={id}>
            <div>
              <figure>
                <img src={image} alt="images" />
              </figure>
            </div>
            <div className="boxsiz">
              <h3>{titel}</h3>
              <div className="grid2">
                <div className="grid2">
                  <figure>
                    <img src={teacherImage} alt="teacherImages" />
                  </figure>
                  <div>
                    <h3>{teacherName}</h3>
                    <p>{category}</p>
                  </div>
                </div>
                <p>{teacherFee}</p>
              </div>
              <div>
                <div className="underLine">
                  <div className="underLin1"></div>
                  <div className="underLin2"></div>
                  <div className="underLin3"></div>
                </div>
                <div>
                  <p>Age:</p>
                  <p>Time</p>
                  <p>Chapacity</p>
                </div>
                <div>
                  <p>{age}</p>
                  <p>{time}</p>
                  <p>{capacity}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SchoolClasses;
