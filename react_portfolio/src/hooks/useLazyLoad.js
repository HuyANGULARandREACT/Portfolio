import React, { useState, useEffect } from 'react';

const useLazyLoad = (sectionId, threshold = 0.1) => {
    const [shouldLoad, setShouldLoad] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
                        setShouldLoad(true);
                        observer.disconnect(); // Stop observing once loaded
                    }
                });
            },
            { threshold }
        );

        const element = document.getElementById(sectionId);
        if (element) {
            observer.observe(element);
        }

        return () => observer.disconnect();
    }, [sectionId, threshold]);

    return shouldLoad;
};

export default useLazyLoad;
