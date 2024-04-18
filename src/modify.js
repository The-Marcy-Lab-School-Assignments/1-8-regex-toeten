const swapAllCases = (str) => {
  const swappedCallback = (letter) => (/[A-Z]/.test(letter) ? letter.toLowerCase() : letter.toUpperCase())
  return str.replace(/[a-zA-Z]/g, swappedCallback)
};

module.exports = {
  swapAllCases,
};
