"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AnimatedBrand() {
  return (
    <div className="relative w-full flex items-center justify-center gap-6">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex items-center gap-3"
      >
        <Image src="/logo.png" alt="Senandung Alam" width={110} height={110} priority />
        <div>
          <div className="text-2xl md:text-3xl font-semibold tracking-wide text-darkBrown">
            Senandung Alam
          </div>
          <div className="text-sm md:text-base text-outline">
            Festival Music 2026 • Ticket Form
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 18 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="hidden md:block"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image src="/char.png" alt="Mascot" width={120} height={120} />
        </motion.div>
      </motion.div>
    </div>
  );
}
