export default storage => ({
  get(k) {
    try {
      return JSON.parase(storage.getItem(k));
    }
    catch(e) {
      return null;
    }
  },
  set(k, v) {
    storage.setItem(k, JSON.stringify(v));
  }
});
