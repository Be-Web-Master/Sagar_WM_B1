import React from "react";
import "./Task4.css";
const Task4 = () => {
  const data = {
    A: [
      {
        name: "A1",
        option: [
          { name: 1, option: [] },
          {
            name: 2,
            option: [
              { name: "A2", Option: [] },
              { name: "B2", Option: [] },
              { name: "C2", Option: [] },
            ],
          },
          {},
        ],
      },
      {
        name: "A2",
        option: []
      },
    ],
    B: [{ name: "B", Option: [] }],
    C: [{ name: "C", Option: [] }],
  };
  return <div className="container"></div>;
};

export default Task4;

{
  /* <div className="container">
      <nav>
        {" "}
        <ul className="main-nav">
          <li>
            <a href="/task4/home">Home</a>
          </li>
          <li>
            <a href="/task4/menu" id="menu-ul">
              {" "}
              Menu{" "}
            </a>
            <ul id="menu-ul-drop">
              <li>
                <a id="menu-ul-a" href="/task4/menu/a">A ➡️</a>
                <ul id="menu-ul-a-drop">
                  <li>
                    <a href="/task4/menu/a/x">X</a>
                  </li>
                  <li>
                    <a href="/task4/menu/a/y" className="menu-ul-a-y">
                      Y ➡️
                    </a>
                    <ul className="menu-ul-a-y-drop">
                      <li>
                        <a href="/task4/menu/a/y/1">1</a>
                      </li>
                      <li>
                        <a href="/task4/menu/a/y/2">2</a>
                      </li>
                      <li>
                        <a href="/task4/menu/a/y/3">3</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/task4/menu/a/z">Z</a>
                  </li>
                  <li>
                    <a href="/task4/menu/a/v">V</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/task4/menu/b">B</a>
              </li>
              <li>
                <a href="/task4/menu/c">C</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/task4/about">About</a>
          </li>
        </ul>
        <hr />
      </nav>
    </div> */
}
