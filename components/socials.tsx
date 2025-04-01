import { Social, socials } from "@/data/data";
import * as motion from "motion/react-client";
import EmailButton from "./email-button";
import { Button } from "./ui/button";

export default function Socials() {
  return (
    <div className="mt-2 flex flex-wrap gap-2">
      {socials.map((social: Social) => {
        if (social.name === "Email") {
          return (
            <motion.div
              key={social.id}
              variants={{
                hidden: { opacity: 0, x: -10 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeInOut", type: "spring" }}
            >
              <EmailButton key={social.id} email={social.url} />
            </motion.div>
          );
        }

        const Icon = social.icon;

        return (
          <motion.div
            key={social.id}
            variants={{
              hidden: { opacity: 0, x: -10 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeInOut", type: "spring" }}
          >
            <Button asChild variant="secondary">
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
          </motion.div>
        );
      })}
    </div>
  );
}
