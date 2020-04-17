const verbs = require('./dictionary/verbs');
const animals = require('./dictionary/animals');
const adjectives = require('./dictionary/adjectives');

exports.random = function () {
  return exports.randomWithAdjectives(2);
};

exports.randomWithAdjectives = function (count = 2) {
  return describeAnimal(count);
};

exports.randomWithNumbers = function (count = 2) {
  const start = 10 ** (count - 1);
  const end = 10 ** count;
  return `${describeAnimal()}-${randomInt(start, end)}`;
};

exports.randomWithShortId = function (count = 4) {
  return `${describeAnimal()}-${exports.randomShortId(count)}`;
};

exports.random4 = function () {
  return `${describeAnimal()}`;
};

exports.random6 = function () {
  return `${randomFromList(verbs)}-${describeAnimal()}`;
};

exports.random10 = function () {
  const verb = randomFromList(verbs);
  return `${describeAnimal()}-${verb}-${describeAnimal()}`;
};

exports.randomShortId = function (length) {
  const choices = 'ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789';
  let out = '';
  for (let i = 0; i < length; i += 1) {
    const choice = choices[randomInt(0, choices.length)];
    out += choice;
  }
  return out;
};

function describeAnimal(count = 1) {
  let animal = randomFromList(animals);
  for (let i = 0; i < count; i += 1) {
    const adjective = randomFromList(adjectives);
    animal = `${adjective}-${animal}`
  }
  return animal;
}

function randomFromList(list) {
  return list[randomInt(0, list.length)];
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
















