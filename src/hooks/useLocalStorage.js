const useLocalStorage = () => {
  const loadFromLocalStorage = () => {
    try {
      const savedState = localStorage.getItem("savedState");
      if (savedState === null) return undefined;
      // TODO: Load missions from the file if localStorage does not contain them.
      return JSON.parse(savedState);
    } catch (e) {
      console.warn(e);
      return undefined;
    }
  };
  const saveToLocalStorage = (state) => {
    try {
      const currentState = JSON.stringify(state);
      localStorage.setItem("savedState", currentState);
    } catch (e) {
      console.warn(e);
    }
  };

  return { loadFromLocalStorage, saveToLocalStorage };
};

export default useLocalStorage;
