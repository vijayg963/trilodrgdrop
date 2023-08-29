import React from "react";

function todoHeader() {
  return (
    <div>
      <div className="head_flex" style={{ borderBottom: e.border }}>
        <div className="heading_box">
          <div className="circle" style={{ background: e.background }}></div>
          <span className="heading">{e.todo} </span>
          <span className="num_Pd">{e.number}</span>
        </div>

        <div>
          <div>...</div>
          <img src={addSquare} alt="add" />
        </div>
      </div>
    </div>
  );
}

export default todoHeader;
