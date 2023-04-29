const saveToLocalStorage = (state) => {
  try {
    const currentState = JSON.stringify(state);
    localStorage.setItem("savedState", currentState);
  } catch (e) {
    console.warn(e);
  }
};

const loadFromLocalStorage = () => {
  try {
    const savedState = localStorage.getItem("savedState");
    if (savedState === null) return undefined;
    return JSON.parse(savedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
};

const useLocalStorage = (action, state) => {
  switch (action) {
    case "save":
      saveToLocalStorage(state);
      break;

    case "load":
      return loadFromLocalStorage();
      break;

    default:
      break;
  }
};

export default useLocalStorage;
