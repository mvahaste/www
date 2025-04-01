import * as motion from "motion/react-client";

export default function WaveEmoji() {
  return (
    <motion.span
      animate={{
        rotate: [0, 20, -10, 20, -5, 0],
      }}
      transition={{
        duration: 1.5,
        ease: "easeInOut",
      }}
      className="inline-block origin-[70%_70%]"
    >
      👋
    </motion.span>
  );
}
