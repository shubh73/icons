'use client';

import { motion, useAnimation, Variants } from 'framer-motion';

const pathVariants: Variants = {
  initial: { opacity: 1, pathLength: 1 },
  animate: (custom: number) => ({
    opacity: [0, 1],
    pathLength: [0, 1],
    transition: {
      opacity: { duration: 0.01, delay: custom * 0.1 },
      pathLength: {
        type: 'spring',
        duration: 0.5,
        bounce: 0,
        delay: custom * 0.1,
      },
    },
  }),
};

const svgVariants: Variants = {
  initial: { opacity: 1 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const LanguagesIcon = () => {
  const svgControls = useAnimation();
  const pathControls = useAnimation();

  const onAnimationStart = () => {
    svgControls.start('animate');
    pathControls.start('animate');
  };

  const onAnimationEnd = () => {
    svgControls.start('initial');
    pathControls.start('initial');
  };

  return (
    <div
      className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
      onMouseEnter={onAnimationStart}
      onMouseLeave={onAnimationEnd}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={svgVariants}
        animate={svgControls}
      >
        <motion.path
          d="m5 8 6 6"
          variants={pathVariants}
          custom={0}
          animate={pathControls}
        />
        <motion.path
          d="m4 14 6-6 2-3"
          variants={pathVariants}
          custom={1}
          animate={pathControls}
        />
        <motion.path
          d="M2 5h12"
          variants={pathVariants}
          custom={2}
          animate={pathControls}
        />
        <motion.path
          d="M7 2h1"
          variants={pathVariants}
          custom={3}
          animate={pathControls}
        />
        <motion.path
          d="m22 22-5-10-5 10"
          variants={pathVariants}
          custom={4}
          animate={pathControls}
        />
        <motion.path
          d="M14 18h6"
          variants={pathVariants}
          custom={5}
          animate={pathControls}
        />
      </motion.svg>
    </div>
  );
};

export { LanguagesIcon };
