const loadFromLocalStorage = () => {
  try {
    // TODO: Rebuild to avoid loading terminal state from localStorage
    // Make better control on what to save and load from localStorage

    const savedState = localStorage.getItem("savedState");
    if (savedState === null) return undefined;
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

export { loadFromLocalStorage, saveToLocalStorage };
