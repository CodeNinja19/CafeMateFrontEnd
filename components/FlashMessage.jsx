import React, { useState, useEffect } from 'react';

const FlashMessage = ({ message,duration, children,reset }) => {
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(false);
      if (reset!=null) reset("");
    }, duration);

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);

  return isMounted ? children : null;
};

export default FlashMessage;
