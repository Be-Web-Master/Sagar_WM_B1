import React from "react";

const HoverDrop = () => {
  const data = {
    A: {
      name: "Menu",
      output: [],
    },
    B: {
      name: "Home",
      output: [],
    },
    C: {
      name: "About",
      output: [
        {
          name: "About0",
          output: [],
        },
        {
          name: "About1",
          output: [],
        },
        {
          name: "About3",
          output: [[
            {
              name: "About30",
              output: [],
            },
            {
              name: "About31",
              output: [],
            },
            {
              name: "About33",
              output: [],
            },
            {
              name: "About34",
              output: [],
            },
            {
              name: "About35",
              output: [],
            },
          ]],
        },
        {
          name: "About4",
          output: [],
        },
        {
          name: "About5",
          output: [],
        },
      ]
    },
    D: {
      name: "Contact",
      output: [],
    },
  };

  return <div>
    <select name="" id=""></select>
  </div>;
};

export default HoverDrop;
