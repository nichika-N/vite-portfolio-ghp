import { Link } from 'react-router-dom';

function Welcome() {
  const nameText = "Nichika Nakamura";

  return (
    <div className="min-h-screen bg-cover bg-center bg-[url('/vite-portfolio-ghp/images/flower-bg.png')] flex flex-col items-center justify-start pt-32">
      {/* タイトル */}
      <h1 className="text-white/70 text-9xl px-6 py-4 tracking-wide font-flowers animate-fadeIn animate-sway">
        Portfolio
      </h1>

      {/* 名前：1文字ずつアニメーション */}
      <div className="flex mb-6">
        {nameText.split("").map((char, index) => (
          <span
            key={index}
            className="text-white/70 text-4xl px-1 tracking-wide font-noto"
            style={{
              animation: `fadeIn 0.4s ease-out ${index * 0.1 + 1}s both, float 3.5s ease-in-out infinite`
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>

      {/* ボタン：React RouterのLinkで遷移 */}
      <Link to="/portfolio">
        <button
          className="mt-4 bg-white/30 border border-white text-white px-6 py-2 rounded-none backdrop-blur-md shadow-md hover:bg-white/50 hover:text-white transition duration-300 animate-glow"
        >
          Welcome
        </button>
      </Link>
    </div>
  );
}

export default Welcome;
