"use client";
import React, { useState } from "react";
import UserDetails from "@/components/UserDetails";
import ListCard from "@/components/ListCard";
import Link from "next/link";

import ProtectedRoute from "@/components/ProtectedRoute";



const Projects = () => {
  const [isCreateModelShow, setIsCreateModelShow] = useState(false);
 

  return (
    <ProtectedRoute>
    <>
      <div className="flex items-center justify-between px-[100px] my-[40px]">
        <UserDetails />
        <div className="flex items-center gap-1">
          <button
            onClick={() => setIsCreateModelShow(true)}
            className="bg-gradient-to-b from-indigo-900 to-purple-900 w-14 h-10 text-white py-2 px-4 rounded-sm mb-3 text-xl"
          >
            +
          </button>
        </div>
      </div>

      <div className="cards">
        <div className="list px-[100px]">
          <Link href="/editor">
            <ListCard />
          </Link>
          <Link href="/editor">
            <ListCard />
          </Link>
        </div>
      </div>

      

      {isCreateModelShow && (
        <div className="createModelCon fixed top-0 left-0 bottom-0 w-screen h-screen bg-[rgba(0,0,0,0.1)] flex items-center justify-center">
          <div className="createModel w-[25vw] h-[30vh] shadow-lg shadow-black/50 bg-[#141414] rounded-[10px] p-[20px]">
            <h3 className="text-2xl">Create New Project</h3>
            <input
              className="w-full mt-2 px-4 py-3 bg-white/10 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-white"
              type="text"
              placeholder="Project title"
            />
            <div className="flex items-center gap-[10px] w-full mt-2">
              <button className="bg-blue-600 rounded-[5px] w-[49%] py-[10px]">
                Create
              </button>
              <button
                onClick={() => setIsCreateModelShow(false)}
                className="bg-[#1A1919] rounded-[5px] w-[49%] py-[10px]"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
    </ProtectedRoute>
  );
};

export default Projects;
