const getLocalData = (key) => {
  if (key) {
    const data = localStorage.getItem(key);
    return data;
  }
};

const setLocalData = (key, value) => {
  if (key && value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export { getLocalData, setLocalData };
