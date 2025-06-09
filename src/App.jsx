import { useState, useEffect } from "react";
import viteLogo from '/vite.svg'; // ✅ ロゴをimport！

function App() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch("https://profile-api250606.onrender.com/api/profile")
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, []);

  if (!profile) return <p>読み込み中...</p>;

  return (
    <div className="min-h-screen bg-white p-8">
      <img src={viteLogo} alt="Vite logo" className="w-20 mb-4" />
      <h1 className="text-2xl font-bold mb-2">自己紹介</h1>
      <p><strong>名前：</strong>{profile.name}</p>
      <p><strong>大学：</strong>{profile.university}</p>
      <p className="mt-2">{profile.description}</p>
    </div>
  );
}

export default App;
