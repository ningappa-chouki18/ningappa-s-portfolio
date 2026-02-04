import { Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-16 md:pt-20"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-[600px] w-[600px] translate-x-1/2 translate-y-[-20%] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] translate-x-[-30%] translate-y-[20%] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="animate-fade-up opacity-0">
              <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                Open to Opportunities
              </span>
            </div>

            <h1 className="animate-fade-up opacity-0 delay-100 mt-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Hi, I'm{" "}
              <span className="gradient-text">Ningappa Chouki</span>
            </h1>

            <p className="animate-fade-up opacity-0 delay-200 mt-4 text-lg font-medium text-muted-foreground md:text-xl">
              Final-Year BCA Student | Web Developer Fresher | AI & Data Analyst Aspirant
            </p>

            <p className="animate-fade-up opacity-0 delay-300 mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Passionate about building intelligent web and AI solutions to solve real-world problems.
              Eager to contribute technical skills to innovative IT projects and grow as a professional developer.
            </p>

            <div className="animate-fade-up opacity-0 delay-400 mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button
                variant="gradient"
                size="lg"
                asChild
              >
                <a
                  href="https://drive.google.com/file/d/1q5tWgAk8768jCSpHCq7FBdWNjZOdC3_w/view?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
              <Button
                variant="heroOutline"
                size="lg"
                onClick={handleContactClick}
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="animate-scale-in opacity-0 delay-200 flex-shrink-0">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-xl" />
              
              {/* Photo container */}
              <div className="gradient-border relative h-64 w-64 overflow-hidden rounded-full md:h-80 md:w-80 lg:h-96 lg:w-96">
                <div className="gradient-border-inner h-full w-full overflow-hidden rounded-full p-1">
                  <img
                    src={profilePhoto}
                    alt="Ningappa Chouki"
                    className="h-full w-full rounded-full object-cover object-top"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
