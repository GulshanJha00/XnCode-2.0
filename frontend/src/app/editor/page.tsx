'use client'
import React, { useEffect, useRef, useState } from "react";
import Editor from "@monaco-editor/react";
import { FaExpandAlt } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
import ProtectedRoute from "@/components/ProtectedRoute";

const MyEditor = () => {
  const [tab, setTab] = useState("html");
  const [isLightMode, setIsLightMode] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const iframeRef = useRef<HTMLIFrameElement>(null); // Using a ref to access the iframe element

  const changeTheme = () => {
    if (isLightMode) {
      document.body.classList.remove("lightMode");
      setIsLightMode(false);
    } else {
      document.body.classList.add("lightMode");
      setIsLightMode(true);
    }
  };

  const [htmlCode, setHtmlCode] = useState("<h1>Welcome to XnCode!😘😘</h1>");
  const [cssCode, setCssCode] = useState("body { background-color: #fff; }");
  const [jsCode, setJsCode] = useState("console.log('Welcome to XnCode!😘😘')");

  
  const run = () => {
    const iframe = iframeRef.current;
    if (iframe) {
      const html = htmlCode;
      const css = `<style>${cssCode}</style>`;
      const js = `<script>${jsCode}</script>`;
      iframe.srcdoc = html + css + js;
    }
  };

  useEffect(() => {
    run(); // Run the code on initial render
  }, [htmlCode, cssCode, jsCode]); // Dependencies ensure this runs when code changes

  return (
    <ProtectedRoute>
    <div className="flex">
      {/* Editor Section */}
      <div
        className={`transition-all duration-500 ${
          isExpanded ? "w-full" : "w-1/2"
        }`}
      >
        <div className="flex items-center justify-between gap-2 bg-[#1A1919] h-[50px] px-[40px]">
          <div className="flex items-center gap-2">
            <div
              onClick={() => setTab("html")}
              className={`tab cursor-pointer px-[10px] text-[15px] ${
                tab === "html" ? "bg-[#444]" : "bg-[#1E1e1e]"
              }`}
            >
              HTML
            </div>
            <div
              onClick={() => setTab("css")}
              className={`tab cursor-pointer px-[10px] text-[15px] ${
                tab === "css" ? "bg-[#444]" : "bg-[#1E1e1e]"
              }`}
            >
              CSS
            </div>
            <div
              onClick={() => setTab("js")}
              className={`tab cursor-pointer px-[10px] text-[15px] ${
                tab === "js" ? "bg-[#444]" : "bg-[#1E1e1e]"
              }`}
            >
              JavaScript
            </div>
          </div>

          <div className="flex items-center gap-2">
            <i
              className="text-[20px] cursor-pointer"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <FaExpandAlt />
            </i>
            <i className="text-[20px] cursor-pointer" onClick={changeTheme}>
              <MdLightMode />
            </i>
          </div>
        </div>

        {tab === "html" && (
          <Editor
            onChange={(e) => {
              setHtmlCode(e|| '');
            }}
            height="82vh"
            theme={isLightMode ? "vs" : "vs-dark"}
            language="html"
            value={htmlCode}
          />
        )}
        {tab === "css" && (
          <Editor
            onChange={(e) => {
              setCssCode(e|| '');
            }}
            height="82vh"
            theme={isLightMode ? "vs" : "vs-dark"}
            language="css"
            value={cssCode}
          />
        )}
        {tab === "js" && (
          <Editor
            onChange={(e) => {
              setJsCode(e||'');
            }}
            height="82vh"
            theme={isLightMode ? "vs" : "vs-dark"}
            language="javascript"
            value={jsCode}
          />
        )}
      </div>

      {/* Output Section */}
      {!isExpanded && (
        <iframe
          className="w-1/2 min-h-[82vh] bg-[#fff] text-black"
          ref={iframeRef} // Attach the iframe element to the ref
          title="Output"
        ></iframe>
      )}
    </div>
    </ProtectedRoute>
  );
};

export default MyEditor;
