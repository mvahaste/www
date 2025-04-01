import * as motion from "motion/react-client";

export default function WaveEmoji() {
  return (
    <motion.span
      animate={{
        rotate: [0, 20, -10, 20, -5, 0],
      }}
      transition={{
        delay: 0.1,
        duration: 1.75,
        ease: "easeInOut",
      }}
      className="mx-1 inline-block origin-[70%_70%]"
    >
      👋
    </motion.span>
  );
}
