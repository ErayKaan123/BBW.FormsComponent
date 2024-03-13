import { useState } from "react";
import "./MessageBox.css";
import "../App.css";

function MessageBox() {
  return (
    <div>
      <div className="overlay"></div>
      <div className="dialog">
        <div className="dialog-content">
          <div className="dialog-title">
            <svg
              style={{ height: "40px", width: "40px" }}
              fill="#dc2626"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
              />
            </svg>

            <h1
              style={{ fontSize: "20px", fontWeight: "bold", color: "black" }}
            >
              Email or Password is invalid
            </h1>
          </div>

          <div style={{ width: 400, color: "grey" }}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur amet labore.
            </p>
          </div>

          <div className="dialog-actions">
            <button className="button">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessageBox;
