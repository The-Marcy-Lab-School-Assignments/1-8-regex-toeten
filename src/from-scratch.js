const helloWorldRegex = (str) => {
  return /hello world/gi.test(str)
};

const hasAVowel = (str) => {
  return /[aeiou]/gi.test(str)
};

const hasCatsOrDogs = (str) => {
  return /(cats|dogs)/gi.test(str)
};

const hasVowelStart = (str) => {
  return /^[aeiou]/i.test(str)
};

const hasPunctuationEnd = (str) => {
  return /[.!?]$/.test(str)
};

const hasNothingOrDigits = (str) => {
  return /^(\s|\d)*$/gi.test(str)
};

const hasNoFlippers = (str) => {
  return /^[^BCcDEHIKOoXxl]*$/.test(str)
};

const isValidEmail = (str) => { };

const isValidPhoneNumber = (str) => { };

const matchAllNumbers = (str) => { };

const matchAllNumbersAsNumbers = (str) => { };

const matchAllWords = (str) => { };

const replaceAllNumbers = (str) => { };

const fixFileName = (str) => { };

const nameRedacter = (str) => { };

const camelToSnakeCase = (str) => { };

module.exports = {
  helloWorldRegex,
  hasAVowel,
  hasCatsOrDogs,
  hasVowelStart,
  hasPunctuationEnd,
  hasNothingOrDigits,
  hasNoFlippers,
  isValidEmail,
  isValidPhoneNumber,

  matchAllNumbers,
  matchAllNumbersAsNumbers,
  matchAllWords,

  replaceAllNumbers,
  fixFileName,
  nameRedacter,
  camelToSnakeCase,
};
