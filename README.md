# Mnemonic id

Library to generate easy to remember, and sometimes entertaining, human readable ids.
```
createStoryId(); // -> eloquent-beaver-quote-average-fish
```

Partly inspired by Docker name generator and [major mnemonic system](https://en.wikipedia.org/wiki/Mnemonic_major_system#Example_words).

## Features
* Dictionary of approximate 150 nouns (animals), 200 verbs, 500 adjectives
* Profanity free
* Customizable id generation 
* TypeScript annotated API

## Install

```
$ npm install mnemonic-id
```


## Usage

Import in either way that suits your environment:
```
import { createNameId } from 'mnemonic-id';
createNameId();
```
```
import * as mnemonicId from 'mnemonic-id';
mnemonicId.createNameId();
```
```
const mnemonicId = require('mnemonic-id');
mnemonicId.createNameId();
```

Then select one of the existing id formats:
```
createNounId();         // -> narwhal  (≈ 10^2 permutations)
createNameId();         // -> hungry-hippo  (≈ 10^5 permutations)
createLongNameId();     // -> hot-splendid-duck  (≈ 10^7 permutations)
createUniqueNameId();   // -> gallant-jellyfish-QkCHmf  (≈ 10^14 permutations)
createQuestId();        // -> find-unknown-dinosaur  (≈ 10^7 permutations)
createStoryId();        // -> awesome-chipmunk-banish-evil-rat  (≈ 10^12 permutations)
createLongStoryId();    // -> wicked-evil-eel-help-horrible-pretty-hamster  (≈ 10^17 permutations)
createNumberId(10);     // -> 6941634647  (= 10^10 - 10^9 permutations)
createId(10);           // -> uXOGTUiOoD  (= 40^10 ≈ 10^16 permutations)
```

Or customize your own:
```
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

```
createNameId({adjectives: 3, capitalize: true}); // -> Ordinary-Cuddly-Laughing-Squid
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

Similar libraries:

* [human-id](https://www.npmjs.com/package/human-id)
* [project-name-generator](https://www.npmjs.com/package/project-name-generator)
* [unique-names-generator](https://www.npmjs.com/package/unique-names-generator)

## License

Licensed under MIT.
