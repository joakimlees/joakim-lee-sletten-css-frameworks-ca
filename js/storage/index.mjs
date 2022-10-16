//save item to local storage
export function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// getting the item from local storage
export function load(key) {
  try {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
  } catch {
    return null;
  }
}

//removing item from local storage
export function remove(key) {
  localStorage.removeItem(key);
}
