import React from "react";

const TopContainer = () => {

  return (
    <div className="flex justify-center items-center border-b-[1px] border-[#475569] pb-4">
        <form className="w-[50%]">   
            <label htmlFor="default-search" className="mb-2 text-sm font-medium sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 right-0 m-auto w-[100px] flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-4 h-4 stroke-[#475569]" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="search" id="default-search" className="flex font-sans ml-2 justify-center align-middle text-center w-full bg-[#19162c] p-1 pl-10 text-md text-[#475569] placeholder-[#475569] border border-[#475569] rounded-lg outline-0" placeholder="Explore" />
            </div>
        </form>
    </div>
  );
}

export default TopContainer;