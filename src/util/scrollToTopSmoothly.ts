const scrollToTopSmoothly: () => void = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

export default scrollToTopSmoothly;
