import { FaUserFriends, FaQuestionCircle, FaTrophy, FaChalkboardTeacher, FaRegHandshake } from 'react-icons/fa';

const featureData = [{
  title: "Competitive Programming Challenges",
  content: (
    <div>
      <div className="flex items-center gap-4 mb-4">
        <FaUserFriends className="text-xl text-blue-500" />
        <span>1v1 Competition</span>
      </div>
      <div className="flex items-center gap-4 mb-4">
        <FaQuestionCircle className="text-xl text-green-500" />
        <span>5 Questions</span>
      </div>
      <div className="flex items-center gap-4 mb-4">
        <FaTrophy className="text-xl text-yellow-500" />
        <span>Tournament</span>
      </div>
      <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-8">
        Progressively move from <span className="font-semibold text-blue-500">basic challenges</span> like sorting algorithms and simple logic problems to <span className="font-semibold text-blue-500">advanced topics</span> such as graph theory, dynamic programming, and system design. Each task is carefully designed to help you <span className="font-semibold text-green-500">level up your rating</span> by testing your understanding and pushing your limits. Track your <span className="font-semibold text-yellow-500">improvement</span> over time with detailed analytics, including win-loss ratios, problem-solving speed, and skill gaps, to identify areas where you can grow further.
      </p>
    </div>
  ),
},
{
  title: "Development Projects with Guided Learning",
  content: (
    <div>
      <div className="flex items-center gap-4 mb-4">
        <FaChalkboardTeacher className="text-xl text-purple-500" />
        <span>Guided Learning</span>
      </div>
      <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-8">
        Avoid the dreaded <span className="font-semibold text-red-500">tutorial hell</span> by diving into real-world projects. Whether it&apos;s a <span className="font-semibold text-blue-500">portfolio website</span> or an <span className="font-semibold text-blue-500">advanced SaaS product</span>, XnCode provides <span className="font-semibold text-green-500">step-by-step guidance</span> to help you build with confidence. Get <span className="font-semibold text-purple-500">personalized feedback</span> on your progress and use AI-driven code validation to ensure you&apos;re learning the best practices. Every project you complete brings you closer to mastering <span className="font-semibold text-yellow-500">industry-level development skills</span>.
      </p>
    </div>
  ),
},
{
  title: "Challenge Mode: Build and Improve",
  content: (
    <div>
      <div className="flex items-center gap-4 mb-4">
        <FaRegHandshake className="text-xl text-blue-500" />
        <span>Collaborative Mode</span>
      </div>
      <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-8">
        In <span className="font-semibold text-blue-500">Challenge Mode</span>, you start small with easier problems and gradually take on <span className="font-semibold text-blue-500">more complex tasks</span> like implementing real-world features. Along the way, get <span className="font-semibold text-green-500">step-by-step feedback</span> tailored to your progress, so you&apos;re always improving. The <span className="font-semibold text-yellow-500">difficulty scales dynamically</span>, ensuring that you&apos;re always pushed just enough to keep learning while staying motivated.
      </p>
    </div>
  ),
},
{
  title: "Play with Friends: Collaborative Learning",
  content: (
    <div>
      <div className="flex items-center gap-4 mb-4">
        <FaRegHandshake className="text-xl text-blue-500" />
        <span>Collaborative Challenges</span>
      </div>
      <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-8">
        Learning becomes more fun and effective with <span className="font-semibold text-blue-500">collaboration</span>. Invite friends to solve coding challenges or build projects together. Share <span className="font-semibold text-purple-500">knowledge</span>, get <span className="font-semibold text-yellow-500">peer feedback</span>, and improve as a team. While the collaboration helps boost creativity, individual ratings are tracked to ensure <span className="font-semibold text-green-500">fair competition</span> and personal growth.
      </p>
    </div>
  ),
}
];

export default featureData;
