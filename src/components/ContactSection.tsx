import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "ningappachouki21@gmail.com",
    href: "mailto:ningappachouki21@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8296381998",
    href: "tel:+918296381998",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Karnataka, India",
    href: null,
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ningappa-chouki-269020342",
    color: "hover:text-[#0077B5]",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/ningappa-chouki18/python",
    color: "hover:text-foreground",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="bg-muted/50 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="section-heading">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subheading mx-auto max-w-2xl">
            I'm currently looking for new opportunities. Feel free to reach out!
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Contact Info */}
            <div className="rounded-2xl bg-card p-8 shadow-card">
              <h3 className="text-xl font-semibold">Contact Information</h3>
              <div className="mt-6 space-y-6">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          className="font-medium transition-colors hover:text-primary"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="font-medium">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h4 className="text-sm font-semibold text-muted-foreground">
                  Connect with me
                </h4>
                <div className="mt-4 flex gap-4">
                  {socialLinks.map(({ icon: Icon, label, href, color }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-muted-foreground transition-all hover:-translate-y-1 hover:shadow-card ${color}`}
                      aria-label={label}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Message */}
            <div className="flex flex-col justify-center rounded-2xl bg-card p-8 shadow-card">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Send className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Let's Connect!</h3>
                <p className="mt-3 text-muted-foreground">
                  I'm actively seeking internship and placement opportunities. 
                  Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                <Button
                  variant="gradient"
                  size="lg"
                  className="mt-6"
                  asChild
                >
                  <a href="mailto:ningappachouki21@gmail.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Send Email
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
