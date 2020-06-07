import verbs from './dictionary/verbs';
import animals from './dictionary/animals';
import adjectives from './dictionary/adjectives';

interface IdOpts {
  // Number of adjectives given to object/subject
  adj?: number;
  // Creates subject in id sentence
  subject?: boolean;
  // Creates verb in id sentence
  verb?: boolean;
  // Creates object in id sentence
  object?: boolean;
  // Delimiter to be used in id sentence
  delimiter?: string;
  // Creates id of given length at end of id sentence
  idSuffix?: number;
  // Creates combination of numbers of given length at end of id sentence
  numberSuffix?: number;
}

export function getId(opts?: IdOpts): string {
  opts = opts || {};
  return randomBase(opts);
}

export function getId4(opts = {}): string {
  opts = {
    adj: 1,
    subject: true,
    ...opts,
  };
  return randomBase(opts);
}

export function getId6(opts = {}): string {
  opts = {
    adj: 1,
    verb: true,
    object: true,
    ...opts,
  };
  return randomBase(opts);
}

export function getId10(opts = {}): string {
  opts = {
    adj: 2,
    subject: true,
    verb: true,
    object: true,
    ...opts,
  };
  return randomBase(opts);
}

function randomBase(rawOpts: IdOpts = {}): string {
  const opts = {
    adj: 0,
    subject: false,
    verb: false,
    object: false,
    delimiter: '-',
    numberSuffix: 0,
    idSuffix: 0,
    ...rawOpts,
  };
  const parts = [];
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
    parts.push(randomBase({
      adj: opts.adj,
      subject: true,
      delimiter: opts.delimiter,
    }));
  }
  if (opts.idSuffix) {
    const id = randomHashId(opts.idSuffix);
    parts.push(id);
  }
  if (opts.numberSuffix) {
    const start = 10 ** (opts.numberSuffix - 1);
    const end = 10 ** opts.numberSuffix;
    const numbers = randomInt(start, end);
    parts.push(numbers);
  }
  return parts.join(opts.delimiter);
}

export function randomHashId(length: number): string {
  const choices = 'ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789';
  let out = '';
  for (let i = 0; i < length; i += 1) {
    const choice = choices[randomInt(0, choices.length)];
    out += choice;
  }
  return out;
}

function randomFromList<T>(list: T[]): T {
  return list[randomInt(0, list.length)];
}

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}
