import React from 'react';
import Lottie from 'react-lottie-player';
import lottieJson from '/public/hero-animation.json';

function HeroAnimation() {
  return <Lottie loop animationData={lottieJson} play />;
}

export default HeroAnimation;
