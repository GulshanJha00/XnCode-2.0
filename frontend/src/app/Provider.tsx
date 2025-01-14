"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "./pages/Navbar";
import Footer from "@/components/Footer";

interface ProviderProps {
  children: React.ReactNode;
}

const Provider: React.FC<ProviderProps> = ({ children }) => {
  const pathname = usePathname();

  return (
    <div>
      {/* Conditionally render Navbar */}
      {pathname !== "/battle/1v1" && <Navbar />}
      {children}
      <Footer/>
    </div>
  );
};

export default Provider;
