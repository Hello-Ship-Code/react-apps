
export const AboutPage = () => {
  return (
    <>

      <div className="flex flex-col text-secondary-100 items-center justify-center app-bar-fix bg-primary-500 p-8">

        <h1 className="text-4xl font-bold mb-6">🚀 Vite + React + TS + Tailwindcss Apps 🎨</h1>
        <p className="text-lg text-center max-w-2xl mb-4">
          Welcome to <strong>React Apps</strong>! 🎉 This repository is home to my first-time React projects
          and practice apps as I dive into the world of React. ⚛️
        </p>

        <div className="text-left max-w-lg">
          <h2 className="text-2xl font-semibold mb-3">📌 What’s Inside?</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>🏗️ <strong>Basic React components</strong></li>
            <li>🎨 <strong>Styled components with Tailwindcss</strong></li>
            <li>🛠️ <strong>Props & State handling</strong></li>
            <li>🔥 <strong>React + TypeScript practice</strong></li>
          </ul>
        </div>

        <div className="mt-6 text-center">
          <p className="text-lg">💡 This is my <strong>practice playground</strong> for improving my React skills. Feel free to explore! 🚀</p>
        </div>

        <div className="mt-10">
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