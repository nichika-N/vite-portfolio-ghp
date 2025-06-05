import { useEffect, useState } from "react";

function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/profile")
      .then((res) => res.json())
      .then((data) => setProfile(data))
      .catch((err) => console.error("APIエラー:", err));
  }, []);

  if (!profile) return <p>読み込み中...</p>;

  return (
    <div className="bg-white p-4 rounded shadow w-full md:w-1/2 animate-fadeIn">
      <h2 className="text-xl font-bold mb-1">{profile.name}</h2>
      <p className="text-sm text-gray-600"><strong>会社：</strong>{profile.university}</p>
      <p className="mt-2">{profile.description}</p>
    </div>
  );
}

export default Profile;
