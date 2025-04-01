import { Social, socials } from "@/data/data";
import * as motion from "motion/react-client";
import EmailButton from "./email-button";
import { Button } from "./ui/button";

export default function Socials() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="mt-2 flex flex-wrap gap-2"
    >
      {socials.map((social: Social) => {
        if (social.name === "Email") {
          return <EmailButton key={social.id} email={social.url} />;
        }

        const Icon = social.icon;

        return (
          <Button key={social.id} asChild variant="secondary">
            <a
              className="flex items-center gap-2"
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon />
              {social.name}
            </a>
          </Button>
        );
      })}
    </motion.div>
  );
}
