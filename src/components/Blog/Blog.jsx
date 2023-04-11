import React from "react";

const Blog = () => {
  return (
    <div className="px-20 py-10">
      <h1>1.When should you use context API?</h1>
      <br />
      <p>
      The Context API is the React feature used for solving props drilling problems.
        When you want to avoid prop drilling. Prop drilling is the process of
        passing props down the component tree through multiple levels, which can
        make your code more complex and harder to maintain. Context API provides
        a cleaner and more concise way to manage state and data between
        components.You can use Context API to create a global state that can
        be accessed and modified by any component in your application.
      </p><br />
      <h1>2.What is custom hook?</h1><br />
      <p>Custom Hook is a JavaScript function which we create by ourselves, when we want to share logic between other JavaScript functions.It is a way to extract common logic from components and create a reusable hook that can be used in any component.</p><br />

      <h1>3.what is useRet?</h1><br />
      <p>useRef is a hook provided by React that allows you to create a mutable reference that persists between renders of a functional component. It returns an object with a current property that can be used to store and access a value. Unlike state, updating the current property of a useRef object does not trigger a re-render.</p><br />

      <h1>4.what is useMemo?</h1><br />
      <p>useMemo is a React Hook that lets you cache the result of a calculation between re-renders.The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running.</p>
    </div>
  );
};

export default Blog;
