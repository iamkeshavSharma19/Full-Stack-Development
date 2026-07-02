import React from "react";
//& module.css is local to an individual component.for each component we will make a separate module.css file.

//~Make sure to import the global.css file in the main.jsx file.

//~importing module css === we will basically store the reference of styles used in module.css file in style variable, whatever component use that variable/reference that module css will be applied to that component.we use style variable only when we use class or id, if we use element selector in module css, then also without using style variable, that module css will be applied to that element also because module.css's reference is too present in this current CSSExample.jsx file, for avoiding it use style variable.If we donot use style variable and we use element selector then our module css can be leaked.

//?But there is a problem that our CSS could be leaked.
import style from "./CSSExample.module.css";

const CSSExample = () => {
  return (
    <div>
      {/* inline css === style Attribute */}
      <h1 style={{ color: "red", backgroundColor: "black" }}>CSS Example</h1>

      <div className="container">Example of Global CSS</div>

      <section className={style.container}>Example of Module CSS</section>

      <h2 id={style.heading}>Example of module css heading</h2>

      <p className={style.para}>I am paragraph Tag 1</p>

      <p>I am paragraph Tag 2</p>

      {/* TAILWIND EXAMPLE === All default CSS will be removed.In tailwindcss already classes are present, we just have to name them. with tailwind we make mobile first css,*/}
      <button>Click</button>
      <input placeholder="username" />
      {/* here whatever css I am writing, I am writing this css for the smallest mobile size width */}
      {/* md: for tablet's screen size background color will change */}
      {/* md, lg, sm, xl === these sizes are present */}
      <h1 className="bg-red-600 text-white md:bg-amber-500 sm:bg-orange-500 lg:bg-pink-600 xl:bg-purple-950">
        Style using Tailwind
      </h1>
    </div>
  );
};

export default CSSExample;
