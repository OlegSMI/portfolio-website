const smoothScroll = (targetY: number, duration: number) => {
  const startY = window.scrollY || window.pageYOffset;
  const distance = targetY - startY;
  let startTime: number | null = null;

  const animateScroll = (currentTime: number) => {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startY, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animateScroll);
  };

  const ease = (t: number, b: number, c: number, d: number) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  requestAnimationFrame(animateScroll);
};

export default smoothScroll;
