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
const saveToLocalStorage = (state) => {
  try {
    const currentState = JSON.stringify({
      missions: state.missions,
      history: state.history,
    });
    localStorage.setItem("savedState", currentState);
  } catch (e) {
    console.warn(e);
  }
};

export { loadFromLocalStorage, saveToLocalStorage };
