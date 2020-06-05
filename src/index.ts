import verbs from './words/verbs';
import animals from './words/animals';
import adjectives from './words/adjectives';

interface IdOpts {
  /** Number of adjectives given to object/subject */
  adj?: number;
  /** Creates subject in id sentence */
  subject?: boolean;
  /** Creates verb in id sentence */
  verb?: boolean;
  /** Creates object in id sentence */
  object?: boolean;
  /** Delimiter to be used in id sentence */
  delimiter?: string;
  /** Creates id of given length at end of id sentence */
  idSuffix?: number;
  /** Creates combination of numbers of given length at end of id sentence */
  numberSuffix?: number;
}

/** Returns id with ≈ 10^6 permutations */
export function getName(opts?: IdOpts): string {
  opts = {
    adj: 2,
    subject: true,
    ...opts,
  };
  return getCustom(opts);
}

/** Returns id with ≈ 10^4 permutations */
export function getShortName(opts = {}): string {
  opts = {
    adj: 1,
    subject: true,
    ...opts,
  };
  return getCustom(opts);
}

/** Returns id with ≈ 10^6 permutations */
export function getAction(opts = {}): string {
  opts = {
    adj: 1,
    verb: true,
    object: true,
    ...opts,
  };
  return getCustom(opts);
}

/** Returns id with ≈ 10^10 permutations */
export function getStory(opts = {}): string {
  opts = {
    adj: 2,
    subject: true,
    verb: true,
    object: true,
    ...opts,
  };
  return getCustom(opts);
}

/** Returns customized id based on options */
export function getCustom(opts: IdOpts = {}): string {
  const _opts = {
    adj: 0,
    subject: false,
    verb: false,
    object: false,
    delimiter: '-',
    numberSuffix: 0,
    idSuffix: 0,
    ...opts,
  };
  const parts = [];
  if (_opts.subject) {
    for (let i = 0; i < _opts.adj; i += 1) {
      parts.push(randomFromList(adjectives));
    }
    parts.push(randomFromList(animals));
  }
  if (_opts.verb) {
    parts.push(randomFromList(verbs));
  }
  if (_opts.object) {
    parts.push(
      getCustom({
        adj: _opts.adj,
        subject: true,
        delimiter: _opts.delimiter,
      }),
    );
  }
  if (_opts.idSuffix) {
    const id = getHashId(_opts.idSuffix);
    parts.push(id);
  }
  if (_opts.numberSuffix) {
    const id = getNumberId(_opts.numberSuffix);
    parts.push(id);
  }
  return parts.join(_opts.delimiter);
}

/** Returns a customized id based on options */
export function getHashId(length: number): string {
  const choices = 'ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789';
  let out = '';
  for (let i = 0; i < length; i += 1) {
    out += choices[randomInt(0, choices.length)];
  }
  return out;
}

/** Returns a customized id based on options */
export function getNumberId(length: number): string {
  const choices = '0123456789';
  let out = '';
  if (length > 0) {
    out += choices[randomInt(1, choices.length)];
  }
  for (let i = 1; i < length; i += 1) {
    out += choices[randomInt(0, choices.length)];
  }
  return out;
}

function randomFromList<T>(list: T[]): T {
  return list[randomInt(0, list.length)];
}

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}
