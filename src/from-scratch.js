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

const isValidEmail = (str) => {
  return /^[a-zA-z0-9_.]+@[a-z]+\.[a-z]{2,3}$/.test(str)
};

const isValidPhoneNumber = (str) => {
  return /^(\(\d{3}\)|\d{3})[-.\s]\d{3}[-.\s]?\d{4}$/.test(str);
};
//console.log(isValidPhoneNumber('(860)-410-7890'))

const matchAllNumbers = (str) => {
  return str.match(/\d+/g) || [];
};

const matchAllNumbersAsNumbers = (str) => {
  const matches = str.match(/\d+/g) || [];
  return matches.map(Number);
};

const matchAllWords = (str) => {
  return str.match(/[a-zA-Z']+/g) || [];
};

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
