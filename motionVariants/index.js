export const HeaderVariants = {
  header: {
    initial: {
      y: -25,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        ease: [0.76, 0, 0.24, 1],
        duration: 0.5,
        delay: 1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        ease: [0.76, 0, 0.24, 1],
        duration: 0.3,
      },
    },
  },

  navItem: {
    initial: {
      y: -60,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 1,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  },

  stagger: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const HeroVariants = {
  content: {
    initial: {
      x: -200,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        ease: [0.76, 0, 0.24, 1],
        duration: 0.5,
        delay: 0.4,
      },
    },
    exit: {
      opacity: 0,
    },
  },
  image: {
    initial: {
      x: 200,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        ease: [0.76, 0, 0.24, 1],
        duration: 0.5,
        delay: 0.6,
      },
    },
    exit: {
      opacity: 0,
    },
  },
};

export const ProjectVariants = {
  fadeInUp: {
    initial: {
      y: 60,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  },

  stagger: {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
};

export const ProjectDetailVariants = {
  fadeInUp: {
    initial: {
      y: 60,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 1,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  },

  title: {
    initial: {
      x: -60,
      opacity: 0,
    },
    animate: {
      x: -0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.25,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  },

  stagger: {
    animate: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  },
};
