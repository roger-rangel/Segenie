import React from "react";
// import MainContainer from "./MainContainer";

const Container = ({children}) => {
  return (
    <div className="md:w-[calc(100%_-_80px)]">
      {children}
    </div>
  );
}

export default Container;
