import { useRef } from 'react';

export const useScrollRef = () => {
    const aboutusscroll = useRef();
    const contactusscroll = useRef();
    const servicesscroll = useRef();
    const valuescroll = useRef();

    const scrollHandler = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: "smooth"
        });
    };

    return {
        aboutusscroll,
        contactusscroll,
        servicesscroll,
        valuescroll,
        scrollHandler
    };
};