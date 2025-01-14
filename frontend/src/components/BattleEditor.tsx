import React from 'react'
import { CodeBlock } from './ui/code-block'
import Image from 'next/image';
const BattleEditor = () => {
    const code = `const BattleShowcase = () => {
  return (
    <div className="p-4 border border-gray-700 rounded-md bg-gray-900 text-white">
      <h2 className="text-2xl font-bold text-center mb-3 text-purple-400">
        ⚔️ Coding Duel ⚔️
      </h2>
      
      <div className="py-3 mb-4 rounded-md bg-gradient-to-r from-purple-600 via-blue-500 to-green-500 text-center">
        <p className="font-bold text-white text-lg">
          Best of Luck! May the best coder win! 🚀
        </p>
      </div>

      <button
        className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition cursor-not-allowed"
      >
        Score a Point (Showcase)
      </button>
    </div>
  );
};`;
  return (
    <div className="w-full  flex flex-col items-center justify-center p-6 relative">
  {/* Duel Banner */}
  <div className="absolute top-2 bg-purple-700 text-white px-4 py-1 rounded-full text-xs font-bold shadow-md">
    Duel in Progress
  </div>

  {/* Opponent Info */}
  <div className="mb-4 flex justify-between items-center w-full max-w-3xl px-4">
    <div className="flex items-center gap-3">
      <Image
      height={50}
      width={50}
        src="https://i.pinimg.com/236x/7b/4f/0e/7b4f0ea6cf06592f85ccc9c4c8cc7a59.jpg"
        alt="Your Avatar"
        className="w-10 h-10 rounded-full border border-gray-700"
      />
      <div className="text-white">
        <span className="block font-semibold">You</span>
        <span className="text-sm text-gray-400">Rating: 120</span>
      </div>
    </div>
    <span className="text-purple-500 font-bold text-lg">VS</span>
    <div className="flex items-center gap-3">
      <Image
      height={50}
      width={50}
        src="https://t3.ftcdn.net/jpg/07/53/63/30/360_F_753633004_rDDoG5mPjrmz0TIQ2s5FZqAOkyVa23Wd.jpg"
        alt="Opponent Avatar"
        className="w-10 h-10 rounded-full object- border border-gray-700"
      />
      <div className="text-white text-right">
        <span className="block font-semibold">Opponent</span>
        <span className="text-sm text-gray-400">Rating: 110</span>
      </div>
    </div>
  </div>

  {/* Editor Container */}
  <div className="max-w-3xl mx-auto w-full border border-gray-700 rounded-lg bg-gray-900 shadow-lg">
    {/* Header Bar */}
    <div className="bg-gray-800 px-4 py-2 flex items-center justify-between text-sm text-gray-400 border-b border-gray-700">
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
      </div>
      <span className="text-gray-300 font-semibold">XnCode.jsx</span>
    </div>

    {/* Code Editor */}
    <div className="p-4 overflow-hidden">
    <CodeBlock
        language="jsx"
        filename="XnCode.jsx"
        highlightLines={[9, 13, 14, 18]}
        code={code}
      />
    </div>
  </div>

  {/* Timer/Score Overlay */}
  <div className="absolute top-[3.8rem]  bg-gray-800 text-white px-4 py-1 rounded-full shadow-lg text-xs font-bold">
    Timer: <span className="text-green-400">1:45</span>
  </div>
</div>

  )
}

export default BattleEditor
