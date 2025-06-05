function Works() {
  const works = [
    {
      title: "自己紹介サイト",
      description: "ReactとSpring Bootを使って作成したポートフォリオ"
    },

  ];

  return (
    <div className="bg-white p-4 rounded shadow w-full md:w-1/2 animate-fadeIn">
      <h2 className="text-lg font-semibold mb-2">Works（開発物）</h2>
      <ul className="space-y-2">
        {works.map((work, index) => (
          <li key={index}>
            <p className="font-bold">{work.title}</p>
            <p className="text-sm">{work.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Works;
