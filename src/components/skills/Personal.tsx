import React from "react";

const BackEnd: React.FC = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Personal Skills</h3>
      <div className="skills__box">
        <div className="skills__group">
          {/*  */}
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Continuous Learner</h3>
            </div>
          </div>
          {/*  */}
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Reliable</h3>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Solution-Oriented</h3>
            </div>
          </div>
        </div>
        {/* ====== */}
        <div className="skills__group">
          {/*  */}
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Team Player</h3>
            </div>
          </div>
          {/*  */}
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Adaptability</h3>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Time-Management</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackEnd;
