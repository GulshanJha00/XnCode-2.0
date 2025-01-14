"use client";
import React from "react";
import Link from "next/link";
import { FaCode, FaQuestionCircle } from "react-icons/fa";
import BattleEditor from "@/components/BattleEditor";
import ProtectedRoute from "@/components/ProtectedRoute";

const BattleMode = () => {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-900 text-white flex flex-col md:flex-row items-center justify-center p-4 md:p-6">
        {/* Left Side: Editor Image */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-6">
          <div className="max-w-3xl mx-auto w-full bg-gray-900 border border-gray-700 rounded-lg shadow-lg overflow-hidden">
            {/* Header bar for the editor */}

            <BattleEditor />
          </div>
        </div>

        {/* Right Side: Battle Options */}
        <div className="w-full md:w-1/2 space-y-8 p-6">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              Choose Your Battle Mode
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Ready to prove your skills? Select a mode and challenge your peers
              to a 1v1 coding showdown.
            </p>
          </div>

          <div className="grid gap-8">
            {/* 1v1 Coding Battle */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg blur-lg opacity-50 group-hover:opacity-100 transition duration-300"></div>
              <Link href="/battle/1v1">
                <div className="relative p-8 bg-gray-800 rounded-lg border border-gray-700 hover:border-green-500 transition-all duration-300 space-y-4">
                  <h2 className="text-2xl font-semibold text-green-400">
                    1v1 Coding Battle
                  </h2>
                  <p className="text-gray-400">
                    Engage in a head-to-head coding duel. Solve a single problem
                    faster than your opponent.
                  </p>
                  <div className="flex items-center">
                    <FaCode className="text-green-400 mr-3 text-xl" />
                    <span>Real-time coding challenges</span>
                  </div>
                </div>
              </Link>
            </div>

            {/* 1v1 Five Questions Battle */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg blur-lg opacity-50 group-hover:opacity-100 transition duration-300"></div>
              <Link href="/battle/1v1-questions">
                <div className="relative p-8 bg-gray-800 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 space-y-4">
                  <h2 className="text-2xl font-semibold text-blue-400">
                    1v1 Five Questions Battle
                  </h2>
                  <p className="text-gray-400">
                    Compete on a series of five carefully curated questions to
                    see who scores higher.
                  </p>
                  <div className="flex items-center">
                    <FaQuestionCircle className="text-blue-400 mr-3 text-xl" />
                    <span>Challenge across multiple problems</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Back Button */}
          <div className="text-center">
            <Link href="/home">
              <button className="px-6 py-3 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition">
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default BattleMode;
