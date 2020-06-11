# Mnemonic id

Library to generate easy to remember, and sometimes entertaining, human readable ids.

Inspired by major mnemonic system:
https://en.wikipedia.org/wiki/Mnemonic_major_system

## Usage


```
import { createNameId, createStoryId } from 'mnemonic-id';

createNameId(); // -> hot-splendid-duck
createStoryId(); // -> neat-warthog-erase-evil-rat
```

or 

```
const mnemonicId = require('mnemonic-id');

mnemonicId.createNameId(); // -> spicy-new-skunk
mnemonicId.createStoryId(); // -> fluffy-dragon-fly-nervous-pug
```

## Examples

### createNameId()

Generates ids that strike a balance between conciseness and number of permutation.

≈ 10^6 permutations

Output:
```
hot-splendid-duck
spicy-new-skunk
ancient-sour-fish
wicked-mean-rattlesnake
```

### createShortNameId()

Generates concise ids for when only a small number of instances is needed.

≈ 10^4 permutations

Output:
```
massive-bulldog
thin-mouse
happy-eagle
giant-turkey
```

### createActionId()

Generates action-oriented ids.

≈ 10^6 permutationsW

Output:
```
marry-odd-dog
fry-splendid-elephant
bury-old-walrus
love-pretty-sheep
```

### createStoryId()

Generates story-oriented ids.

≈ 10^10 permutations

Output:
```
fluffy-dragon-fly-nervous-pug
neat-warthog-erase-evil-rat
modern-fox-lull-shy-dog
cuddly-bird-defy-moody-badger
```

### createLongStoryId()

Generates vivid story-oriented ids.

≈ 10^14 permutations

Output:
```
wicked-evil-eel-help-horrible-pretty-hamster
neat-warthog-erase-evil-rat
modern-fox-lull-shy-dog
cuddly-bird-defy-moody-badger
```

### createId(length: number)

Generates id of given length

Output (length = 8):
```
jgCe7BQT
tO4xCM7i
ZDMrOk33
BsktPStU
```

### createNumberId(length: number)

Generates number of given length

Output (length = 4):
```
7175
2233
5368
6678
```

### createCustomId({...})

If neither of the predefined formats fits your use case, 
the output is fully customizable through the `options` parameter:
```
createCustomId({
      adj: 2,
      subject: true,
      verb: true,
      object: true,
      delimiter: '_',
      idSuffix: 6,
      numberSuffix: 4,
    })
);

```
Output:
```
proud_evil_dolphin_meet_tidy_fluffy_crab_yO2vLY_3331
orange_spicy_horse_bite_tiny_calm_liger_NvnhdC_1669
nasty_big_rabbit_lick_fresh_cold_ape_lPz4kC_8196
fresh_wicked_lizard_chain_horrible_sour_fox_rKTiYL_3454
```

The `options` object can also be used with any other method to override default behavior. 

## License

Licensed under MIT.
