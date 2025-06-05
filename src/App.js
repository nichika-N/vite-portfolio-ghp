import Profile from './components/Profile';
import Skill from './components/Skill';
import Works from './components/Works';

function App() {
  return (
    <div className="bg-blue-50 min-h-screen p-6 space-y-6">
      <h1 className="text-2xl font-bold">NAKAMURA's Portfolio</h1>

      <Profile />

      {/* 横並びにする（スマホだと縦並び） */}
      <div className="flex flex-col md:flex-row gap-4">
        <Skill />
        <Works />
      </div>
    </div>
  );
}

export default App;

