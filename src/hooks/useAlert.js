import { useState } from 'react';

const useAlert = (options) => {
  const defaultOptions = {
    active: false,
    message: '',
    autoClose: true,
    type: '',
  };
  const [alert, setAlert] = useState({
    ...defaultOptions,
    ...options,
  });

  const toggleAlert = () => {
    setAlert(!alert.active);
  };

  return {
    alert,
    toggleAlert,
    setAlert,
  };
};

export default useAlert;
