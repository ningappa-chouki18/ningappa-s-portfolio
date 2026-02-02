import { Brain, Code, BarChart3, Palette, Lightbulb, Users, Zap, Target } from "lucide-react";

const interests = [
  { icon: Brain, label: "Artificial Intelligence" },
  { icon: BarChart3, label: "Machine Learning" },
  { icon: Code, label: "Web Development" },
  { icon: BarChart3, label: "Data Analysis" },
  { icon: Palette, label: "UI/UX Design" },
];

const strengths = [
  { icon: Lightbulb, label: "Problem Solving" },
  { icon: Target, label: "Analytical Thinking" },
  { icon: Zap, label: "Quick Learner" },
  { icon: Users, label: "Team Collaboration" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="section-heading">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subheading mx-auto max-w-2xl">
            A passionate developer eager to make an impact in the tech industry
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Education & Objective */}
          <div className="card-hover rounded-2xl bg-card p-8 shadow-card">
            <h3 className="text-xl font-semibold">Education Summary</h3>
            <p className="mt-4 text-muted-foreground">
              Bachelor of Computer Applications (BCA), GH BCA College, Haveri — Expected 2026
            </p>

            <h3 className="mt-8 text-xl font-semibold">Career Objective</h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              To work in a dynamic IT environment where I can apply programming, AI, and analytical skills 
              to develop efficient software solutions while continuously learning new technologies.
            </p>
          </div>

          {/* Languages */}
          <div className="card-hover rounded-2xl bg-card p-8 shadow-card">
            <h3 className="text-xl font-semibold">Languages</h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {["English – Fluent", "Hindi – Fluent", "Kannada – Fluent"].map((lang) => (
                <span
                  key={lang}
                  className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
                >
                  {lang}
                </span>
              ))}
            </div>

            <h3 className="mt-8 text-xl font-semibold">Current Status</h3>
            <p className="mt-4 text-muted-foreground">
              Actively seeking internship opportunities in AI, Machine Learning, Data Analysis, and Web Development.
            </p>
          </div>
        </div>

        {/* Interests */}
        <div className="mt-12">
          <h3 className="text-center text-xl font-semibold">My Interests</h3>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {interests.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="card-hover flex items-center gap-3 rounded-xl bg-card px-5 py-3 shadow-soft"
              >
                <Icon className="h-5 w-5 text-primary" />
                <span className="font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Strengths */}
        <div className="mt-12">
          <h3 className="text-center text-xl font-semibold">My Strengths</h3>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {strengths.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="card-hover flex items-center gap-3 rounded-xl bg-secondary px-5 py-3"
              >
                <Icon className="h-5 w-5 text-accent" />
                <span className="font-medium text-secondary-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
