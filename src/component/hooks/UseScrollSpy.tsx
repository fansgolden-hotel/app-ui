import { useEffect, useState } from 'react';

export function useScrollSpy(sectionIds: string[], offset = 0): string {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(id);
          }
        },
        {
          root: null,
          rootMargin: `-${offset}px 0px 0px 0px`,
          threshold: 0.6,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [sectionIds, offset]);

  return activeId;
}
