const verbs = require('./dictionary/verbs');
const animals = require('./dictionary/animals');
const adjectives = require('./dictionary/adjectives');

exports.random = function (opts = {}) {
  opts = {
    adj: 2,
    subject: true,
    ...opts
  };
  return random(opts);
};

exports.random4 = function (opts = {}) {
  opts = {
    adj: 1,
    subject: true,
    ...opts
  };
  return random(opts);
};

exports.random6 = function (opts = {}) {
  opts = {
    adj: 1,
    verb: true,
    object: true,
    ...opts
  };
  return random(opts);
};

exports.random10 = function (opts = {}) {
  opts = {
    adj: 2,
    subject: true,
    verb: true,
    object: true,
    ...opts
  };
  return random(opts);
};

function random(opts = {}) {
  opts = {
    adj: 0,
    subject: false,
    verb: false,
    object: false,
    delimiter: '-',
    numbers: 0,
    ids: 0,
    ...opts
  };
  let parts = [];
  if (opts.subject) {
    for (let i = 0; i < opts.adj; i += 1) {
      parts.push(randomFromList(adjectives));
    }
    parts.push(randomFromList(animals));
  }
  if (opts.verb) {
    parts.push(randomFromList(verbs));
  }
  if (opts.object) {
    parts.push(random({ adj: opts.adj, subject: true, }));
  }
  if (opts.numbers) {
    const start = 10 ** (opts.numbers - 1);
    const end = 10 ** opts.numbers;
    const numbers = randomInt(start, end);
    parts.push(numbers);
  }
  if (opts.ids) {
    const id = exports.randomId(opts.ids);
    parts.push(id);
  }
  return parts.join(opts.delimiter);
}

exports.randomId = function (length) {
  const choices = 'ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789';
  let out = '';
  for (let i = 0; i < length; i += 1) {
    const choice = choices[randomInt(0, choices.length)];
    out += choice;
  }
  return out;
};

function randomFromList(list) {
  return list[randomInt(0, list.length)];
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}














