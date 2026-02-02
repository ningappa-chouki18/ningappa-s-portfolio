import { GraduationCap, BookOpen } from "lucide-react";

const educationData = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "GH BCA College, Haveri University",
    year: "2023 – 2026 (Expected)",
    description: "Relevant Subjects: Programming, DBMS, OOP, Data Structures, Web Development",
    current: true,
  },
  {
    degree: "Pre-University Course (PUC)",
    institution: "Vidya Bharti PU College, Savanur",
    year: "2021 – 2023",
    description: "Completed higher secondary education with focus on Science stream",
    current: false,
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC)",
    institution: "Majid High School, Savanur",
    year: "2021",
    description: "Completed secondary education with distinction",
    current: false,
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="bg-muted/50 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="section-heading">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subheading mx-auto max-w-2xl">
            Academic journey and qualifications
          </p>
        </div>

        <div className="relative mx-auto mt-12 max-w-3xl">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 hidden h-full w-0.5 bg-border md:left-1/2 md:block md:-translate-x-1/2" />

          {educationData.map((edu, index) => (
            <div
              key={edu.degree}
              className={`relative mb-8 flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 top-6 z-10 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-primary bg-background md:left-1/2 md:block" />

              {/* Card */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <div className="card-hover rounded-2xl bg-card p-6 shadow-card">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      {edu.current ? (
                        <GraduationCap className="h-6 w-6 text-primary" />
                      ) : (
                        <BookOpen className="h-6 w-6 text-primary" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                          {edu.year}
                        </span>
                        {edu.current && (
                          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                            Current
                          </span>
                        )}
                      </div>
                      <h3 className="mt-3 text-lg font-semibold">{edu.degree}</h3>
                      <p className="mt-1 text-sm font-medium text-primary">{edu.institution}</p>
                      <p className="mt-2 text-sm text-muted-foreground">{edu.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
