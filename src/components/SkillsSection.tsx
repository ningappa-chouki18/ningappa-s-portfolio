import { useEffect, useState, useRef } from "react";

interface Skill {
  name: string;
  level: number;
  category: "technical" | "tools" | "soft";
}

const skills: Skill[] = [
  // Technical Skills
  { name: "Python", level: 85, category: "technical" },
  { name: "Java", level: 70, category: "technical" },
  { name: "JavaScript", level: 75, category: "technical" },
  { name: "HTML & CSS", level: 90, category: "technical" },
  { name: "React.js", level: 70, category: "technical" },
  { name: "SQL/DBMS", level: 80, category: "technical" },
  { name: "Machine Learning", level: 65, category: "technical" },
  // Tools & Platforms
  { name: "Git", level: 75, category: "tools" },
  { name: "VS Code", level: 90, category: "tools" },
  { name: "PyCharm", level: 80, category: "tools" },
  { name: "Jupyter Notebook", level: 85, category: "tools" },
  { name: "MS Excel", level: 80, category: "tools" },
  // Soft Skills
  { name: "Communication", level: 85, category: "soft" },
  { name: "Time Management", level: 80, category: "soft" },
  { name: "Teamwork", level: 90, category: "soft" },
  { name: "Adaptability", level: 85, category: "soft" },
];

const SkillBar = ({ skill, isVisible }: { skill: Skill; isVisible: boolean }) => {
  return (
    <div className="group">
      <div className="mb-2 flex items-center justify-between">
        <span className="font-medium">{skill.name}</span>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <div
          className="skill-bar-fill"
          style={{ width: isVisible ? `${skill.level}%` : "0%" }}
        />
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const technicalSkills = skills.filter((s) => s.category === "technical");
  const toolSkills = skills.filter((s) => s.category === "tools");
  const softSkills = skills.filter((s) => s.category === "soft");

  return (
    <section id="skills" className="py-20 md:py-28" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="section-heading">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subheading mx-auto max-w-2xl">
            Technical expertise and professional competencies
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Technical Skills */}
          <div className="card-hover rounded-2xl bg-card p-6 shadow-card">
            <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                💻
              </span>
              Technical Skills
            </h3>
            <div className="space-y-5">
              {technicalSkills.map((skill) => (
                <SkillBar key={skill.name} skill={skill} isVisible={isVisible} />
              ))}
            </div>
          </div>

          {/* Tools & Platforms */}
          <div className="card-hover rounded-2xl bg-card p-6 shadow-card">
            <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent">
                🛠️
              </span>
              Tools & Platforms
            </h3>
            <div className="space-y-5">
              {toolSkills.map((skill) => (
                <SkillBar key={skill.name} skill={skill} isVisible={isVisible} />
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="card-hover rounded-2xl bg-card p-6 shadow-card md:col-span-2 lg:col-span-1">
            <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                🤝
              </span>
              Soft Skills
            </h3>
            <div className="space-y-5">
              {softSkills.map((skill) => (
                <SkillBar key={skill.name} skill={skill} isVisible={isVisible} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
