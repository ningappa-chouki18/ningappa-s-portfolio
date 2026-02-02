import { Award, CheckCircle } from "lucide-react";

const certifications = [
  {
    title: "Frontend Web Development",
    description: "HTML / CSS / JavaScript",
    skills: ["Responsive Design", "DOM Manipulation", "Modern CSS", "JavaScript ES6+"],
  },
  {
    title: "Advanced Machine Learning Certification",
    description: "Comprehensive ML techniques and applications",
    skills: ["Supervised & Unsupervised Learning", "Feature Engineering", "Model Optimization", "Data Visualization"],
  },
  {
    title: "Python & Machine Learning Certification (9 Days)",
    description: "Seminarroom & KLE BCA, Haveri",
    skills: ["NumPy", "Pandas", "Data Pre-processing", "Regression & Classification Algorithms"],
  },
];

const activities = [
  "Technical Workshops",
  "Machine Learning Training Programs",
  "Coding Practice",
  "Tech Community Participation",
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="section-heading">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="section-subheading mx-auto max-w-2xl">
            Professional certifications and continuous learning
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="card-hover rounded-2xl bg-card p-6 shadow-card"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">{cert.title}</h3>
              <p className="mt-1 text-sm text-primary">{cert.description}</p>
              <div className="mt-4 space-y-2">
                {cert.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <CheckCircle className="h-4 w-4 text-accent" />
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Extra-curricular Activities */}
        <div className="mt-16">
          <h3 className="text-center text-xl font-semibold">
            Extra-Curricular Activities
          </h3>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {activities.map((activity) => (
              <div
                key={activity}
                className="card-hover flex items-center gap-2 rounded-xl bg-secondary px-5 py-3"
              >
                <span className="text-lg">🚀</span>
                <span className="font-medium text-secondary-foreground">{activity}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
