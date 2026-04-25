import { useEffect, useRef } from 'react';

const useFadeIn = (duration = 0.6, delay = 0) => {
  const element = useRef();

  useEffect(() => {
    const el = element.current;
    if (el) {
      el.style.transition = `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`;
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }
  }, [duration, delay]);

  return element;
};

export default useFadeIn;