function Skill() {
  const skills = [
    "Java",
    "Spring Boot",
    "React",
    "Tailwind CSS",
    "Git",
    "VS Code"
  ];

  return (
    <div className="bg-white p-4 rounded shadow w-full md:w-1/2 animate-fadeIn">
      <h2 className="text-lg font-semibold mb-2">Skill（スキル）</h2>
      <ul className="list-disc list-inside space-y-1">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Skill;
