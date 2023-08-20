export const loadFromStorage = (key: string) => {
  const val = localStorage.getItem(key);
  return val ? JSON.parse(val) : null;
};

export const saveToStorage = (key: string, val: any) => {
  localStorage[key] = JSON.stringify(val);
};
