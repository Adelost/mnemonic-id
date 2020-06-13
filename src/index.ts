import verbs from './words/verbs';
import animals from './words/noun';
import adjectives from './words/adjectives';

interface IdOpts {
  /** Number of adjectives given to object/subject */
  adjectives?: number;
  /** Creates subject in id sentence */
  subject?: boolean;
  /** Creates verb in id sentence */
  verb?: boolean;
  /** Creates object in id sentence */
  object?: boolean;
  /** Creates number of given length at end of id sentence */
  numberSuffix?: number;
  /** Creates id of given length at end of id sentence */
  idSuffix?: number;
  /** Delimiter to be used in id sentence */
  delimiter?: string;
  /** Capitalize each word in sentence */
  capitalize?: boolean;
}

/** Returns id with ≈ 10^4 permutations (e.g. "cool-dragonfly") */
export function createNameId(opts: IdOpts = {}): string {
  return createCustomId({
    adjectives: 1,
    subject: true,
    ...opts,
  });
}

/** Returns id with ≈ 10^6 permutations (e.g. "hot-splendid-duck") */
export function createLongNameId(opts?: IdOpts): string {
  return createCustomId({
    adjectives: 2,
    subject: true,
    ...opts,
  });
}

/** Returns id with ≈ 10^14 permutations (e.g. "dull-dugong-8x4s0K") */
export function createUniqueNameId(opts: IdOpts = {}): string {
  return createNameId({
    idSuffix: 6,
    ...opts,
  });
}

/** Returns id with ≈ 10^6 permutations */
export function createQuestId(opts: IdOpts = {}): string {
  return createCustomId({
    adjectives: 1,
    verb: true,
    object: true,
    ...opts,
  });
}

/** Returns id with ≈ 10^10 permutations */
export function createStoryId(opts: IdOpts = {}): string {
  return createCustomId({
    adjectives: 1,
    subject: true,
    verb: true,
    object: true,
    ...opts,
  });
}

/** Returns id with ≈ 10^14 permutations */
export function createLongStoryId(opts: IdOpts = {}): string {
  return createStoryId({
    adjectives: 2,
    ...opts,
  });
}

/** Returns customized id based on options */
export function createCustomId(opts: IdOpts = {}): string {
  opts = {
    adjectives: 0,
    subject: false,
    verb: false,
    object: false,
    delimiter: '-',
    numberSuffix: 0,
    idSuffix: 0,
    ...opts,
  };
  let parts = [];
  if (opts.subject) {
    if (opts.adjectives) {
      for (let i = 0; i < opts.adjectives; i += 1) {
        parts.push(randomFromList(adjectives));
      }
    }
    parts.push(randomFromList(animals));
  }
  if (opts.verb) {
    parts.push(randomFromList(verbs));
  }
  if (opts.object) {
    parts.push(
      createCustomId({
        adjectives: opts.adjectives,
        subject: true,
        delimiter: opts.delimiter,
        capitalize: opts.capitalize,
      }),
    );
  }
  if (opts.numberSuffix) {
    const id = createNumberId(opts.numberSuffix);
    parts.push(id);
  }
  if (opts.idSuffix) {
    const id = createId(opts.idSuffix);
    parts.push(id);
  }
  if (opts.capitalize) {
    parts = parts.map(capitalize);
  }
  return parts.join(opts.delimiter);
}

/** Returns id with ≈ 10^2 permutations (e.g. "narwhal") */
export function createNounId(opts: IdOpts = {}): string {
  return createCustomId({
    subject: true,
    ...opts,
  });
}

/** Returns id of given length */
export function createId(length: number): string {
  const choices = 'ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789';
  let out = '';
  for (let i = 0; i < length; i += 1) {
    out += choices[randomInt(0, choices.length)];
  }
  return out;
}

/** Returns number of given length */
export function createNumberId(length: number): string {
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

function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
