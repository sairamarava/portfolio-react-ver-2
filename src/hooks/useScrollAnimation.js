import { useEffect } from 'react';

const useScrollAnimation = (ref) => {
  useEffect(() => {
    const handleScroll = () => {
      const element = ref.current;
      if (element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight && rect.bottom > 0) {
          element.classList.add('animate');
        } else {
          element.classList.remove('animate');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ref]);
};

export default useScrollAnimation;