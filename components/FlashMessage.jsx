import React, { useState, useEffect } from 'react';

const FlashMessage = ({ duration, children }) => {
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(false);
    }, duration);

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, [duration]);

  return isMounted ? children : null;
};

export default FlashMessage;
