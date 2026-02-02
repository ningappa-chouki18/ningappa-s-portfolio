import { ExternalLink, Github, Car, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Car Price Prediction using AI & Machine Learning",
    description:
      "Developed a machine learning model to predict used car prices using features such as year, fuel type, transmission, and kilometers driven.",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Jupyter Notebook"],
    features: [
      "Data Cleaning & Pre-processing",
      "Feature Encoding",
      "Linear Regression & Random Forest Models",
      "Accuracy Comparison",
      "User Input Based Price Prediction",
    ],
    icon: Car,
    demoLink: null,
    githubLink: "https://github.com/ningappa-chouki18/python",
  },
  {
    title: "Plant Disease Detection & Startup Funding Analysis",
    description:
      "Built an AI-based system to detect plant diseases using image datasets and also analyzed startup funding data to identify investment trends and insights.",
    technologies: ["Python", "Machine Learning", "Pandas", "NumPy", "Matplotlib", "TensorFlow / Scikit-learn"],
    features: [
      "Image Classification Model",
      "Dataset Training & Testing",
      "Data Visualization Graphs",
      "Funding Trend Analysis",
      "Prediction & Insight Generation",
    ],
    icon: Leaf,
    demoLink: null,
    githubLink: "https://github.com/ningappa-chouki18/python",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-muted/50 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="section-heading">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subheading mx-auto max-w-2xl">
            Hands-on projects showcasing my technical abilities
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="card-hover group overflow-hidden rounded-2xl bg-card shadow-card"
            >
              {/* Project Header */}
              <div className="relative overflow-hidden p-6 pb-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <project.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold leading-tight">{project.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className="px-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="p-6 pt-4">
                <h4 className="mb-3 text-sm font-semibold text-muted-foreground">
                  Key Features:
                </h4>
                <ul className="space-y-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="flex gap-3 border-t border-border p-6">
                {project.githubLink && (
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                )}
                {project.demoLink ? (
                  <Button variant="default" size="sm" asChild>
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                ) : (
                  <span className="flex items-center text-sm text-muted-foreground">
                    Demo not available
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
