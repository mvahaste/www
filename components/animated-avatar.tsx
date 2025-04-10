"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

export default function AnimatedAvatar() {
  const { scrollYProgress } = useScroll();

  const rotate = useSpring(useTransform(scrollYProgress, [0, 1], [0, 360]), {
    damping: 10,
    stiffness: 75,
  });

  return (
    <motion.div
      style={{
        rotate,
      }}
      className="origin-center"
    >
      <Image
        src="/public/images/avatar.png"
        alt="Avatar"
        width={32}
        height={32}
        className="rounded-full"
      />
    </motion.div>
  );
}
