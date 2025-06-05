const input = document.querySelector('.inputString');
const lowercaseOutput = document.querySelector('#lowercase span');
const uppercaseOutput = document.querySelector('#uppercase span');
const camelcaseOutput = document.querySelector('#camelcase span');
const pascalcaseOutput = document.querySelector('#pascalcase span');
const snakecaseOutput = document.querySelector('#snakecase span');
const kebabcaseOutput = document.querySelector('#kebabcase span');
const trimcaseOutput = document.querySelector('#trim span');

function capitalizeString(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function camelcase(str) {
  const lowercaseStr = str.toLowerCase();
  const wordsArray = lowercaseStr.split(' ');
  const finalArray = wordsArray.map((word, index) => {
    if (index === 0) return word;
    return capitalizeString(word);
  });
  return finalArray.join('');
}

function pascalcase(str) {
  const lowercaseStr = str.toLowerCase();
  const wordsArray = lowercaseStr.split(' ');
  const pascalCase = wordsArray.map(word => capitalizeString(word));
  return pascalCase.join('');
}

function snakecase(str) {
  const wordsArray = str.split(' ');
  return wordsArray.join('_');
}

function kebabcase(str) {
  const wordsArray = str.split(' ');
  return wordsArray.join('-');
}

function trim(str) {
  const wordsArray = str.split(' ');
  return wordsArray.join('');

}


input.addEventListener('input', () => {
  lowercaseOutput.innerText = input.value.toLowerCase();
  uppercaseOutput.innerText = input.value.toUpperCase();
  camelcaseOutput.innerText = camelcase(input.value);
  pascalcaseOutput .innerText = pascalcase(input.value);
  snakecaseOutput.innerText = snakecase(input.value);
  kebabcaseOutput.innerText = kebabcase(input.value);
  trimcaseOutput.innerText = trim(input.value);
});