
export const AboutPage = () => {
  return (
    <>
      <div className="app-bar-fix hero-bg hero-center">

        <h1 className="text-4xl font-bold mb-6">🚀 Vite + React + TS + Tailwindcss Apps 🎨</h1>
        <p className="text-lg text-center max-w-2xl mb-4">
          Welcome to <strong>React Apps</strong>! 🎉 This repository is home to my first-time React projects,
          practice apps, and useful utilities as I dive into the world of React. ⚛️
        </p>

        <div className="text-left max-w-lg">
          <h2 className="text-2xl font-semibold mb-3">📌 What’s Inside?</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>🎯 <strong>/watch</strong> — Displays the <strong>current time</strong>, <strong>date</strong>, <strong>day</strong>, and <strong>month</strong> in real-time ⏰</li>
            <li>🌤️ <strong>/weather</strong> — Weather API integration to check current weather conditions for any city 🌍</li>
            <li>✅ <strong>/todo</strong> — A simple and intuitive <strong>To-Do App</strong> with <strong>localStorage</strong> support for persistent task management 📋</li>
            <li>🏗️ <strong>Basic React components</strong></li>
            <li>🎨 <strong>Styled components with Tailwindcss</strong></li>
            <li>🛠️ <strong>Props & State handling</strong></li>
            <li>🔥 <strong>React + TypeScript practice</strong></li>
          </ul>
        </div>

        <div className="mt-6 text-center">
          <p className="text-lg">💡 This is my <strong>practice playground</strong> for improving my React skills. Feel free to explore! 🚀</p>
        </div>
        <div className="mt-5">
          <p>🐙 Connect with Me:
            <a
              href="https://github.com/Hello-ship-code"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-300 hover:text-yellow-400 ml-1"
            >
              Hello-ship-code
            </a>
          </p>
        </div>
      </div>
    </>
  );

};