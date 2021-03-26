import React, { useEffect, useState } from 'react';

const Expire = (props) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        setTimer(props.delay);
    }, []);

    const setTimer = (delay) => {
        setTimeout(() => setIsVisible(false), delay);
    };

    return (
        isVisible
            ? <div>{props.children}</div>
            : <span />
    );
}

export default Expire;