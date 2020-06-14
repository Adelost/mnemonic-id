# Mnemonic id

![Coverage Status](https://coveralls.io/repos/github/Adelost/mnemonic-id/badge.svg?branch=master)
![TypeScript-ready](https://img.shields.io/npm/types/mnemonic-id.svg)

Library to generate easy to remember, and sometimes entertaining, human readable ids.
```js
createStoryId(); // -> awesome-chipmunk-banish-evil-rat
```

Partly inspired by Docker name generator and [major mnemonic system](https://en.wikipedia.org/wiki/Mnemonic_major_system#Example_words).

## Highlights
* Dictionary of approximate 150 nouns (animals), 200 verbs, 500 adjectives.
* Deterministic size, with max length of 10 for nouns, 8 for verbs and adjectives. 
* Customizable id generation.
* TypeScript annotated API.
* Slim package size with no dependencies.

## Install

```console
$ npm install mnemonic-id
```


## Usage

Import in either way that suits your environment:
```js
import { createNameId } from 'mnemonic-id';
createNameId();
```
```js
import * as mnemonicId from 'mnemonic-id';
mnemonicId.createNameId();
```
```js
const mnemonicId = require('mnemonic-id');
mnemonicId.createNameId();
```

Then select one of the existing id formats:

```js
/** Format "noun", ≈ 10^2 permutations, 10 max length */
createNounId(); // -> narwhal

/** Format "adj+noun", ≈ 10^5 permutations, 19 max length */
createNameId(); // -> hungry-hippo

/** Format "adj+adj+noun", ≈ 10^6 permutations, 28 max length */
createLongNameId(); // -> hot-splendid-duck

/** Format "adj+noun+id", ≈ 10^14 permutations, 26 max length */
createUniqueNameId(); // -> dull-dugong-QkCHmf

/** Format "verb+adj+noun", ≈ 10^6 permutations, 28 max length */
createQuestId(); // -> find-pretty-sheep

/** Format "adj+noun+verb+adj+noun", ≈ 10^12 permutations, 48 max length */
createStoryId(); // -> eloquent-beaver-quote-unknown-dinosaur

/** Format "adj+adj+noun+verb+adj+adj+noun", ≈ 10^17 permutations, 64 max length */
createLongStoryId(); // -> wicked-evil-eel-help-horrible-pretty-hamster

/** Format "number" of given length, length^10 - length^9 permutations */
createNumberId(10); // -> 6941634647  (= 10^10-10^9 permutations)

/** Format "id" of given length, = 40^length permutations */
createId(10); // -> uXOGTUiOoD  (= 40^10 ≈ 10^16 permutations)
```

Or customize your own:
```js
createCustomId({
  adjectives: 2,
  subject: true,
  verb: true,
  object: true,
  numberSuffix: 4,
  idSuffix: 6,
  delimiter: '_',
  capitalize: true
}); // -> Talented_Bold_Pig_Hunt_Brawny_Supreme_Bumblebee_6343_VQ5EAZ
```

Most existing formats can also be customized:

```js
createNameId({
  adjectives: 3, 
  capitalize: true
  delimiter: '',
}); // -> OrdinaryCuddlyLaughingSquid
```

## Options

Description of options:

```
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
```

# Alternatives

Similar libraries that also exist:

* [human-id](https://www.npmjs.com/package/human-id)
* [project-name-generator](https://www.npmjs.com/package/project-name-generator)
* [unique-names-generator](https://www.npmjs.com/package/unique-names-generator)

## License

Licensed under MIT.
