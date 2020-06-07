# Mnemonic id

Library to generate easy to remember and sometimes entertaining human readable ids.

Inspired by major mnemonic system:
https://en.wikipedia.org/wiki/Mnemonic_major_system


## Examples

### getId()

≈ 10^6 permutations

This default setting aims to strike a good balance between  conciseness and number of permutation.

Output:
```
hot-splendid-duck
spicy-new-skunk
ancient-sour-fish
wicked-mean-rattlesnake
```

### getId4(

≈ 10^4 permutations

Concise ids for when only a small number of instances is needed.

Output:
```
massive-bulldog
thin-mouse
happy-eagle
giant-turkey
```

### getId6()

≈ 10^6 permutations

Alternative to default `getId()`.

Output:
```
marry-odd-dog
fry-splendid-elephant
bury-old-walrus
love-pretty-sheep
```

### getId10()

≈ 10^10 permutations

Alternative to default `getId()`.

Output:
```
fluffy-dragon-fly-nervous-pug
neat-warthog-erase-evil-rat
modern-fox-lull-shy-dog
cuddly-bird-defy-moody-badger
```

### getId({...})

If neither of the predefined formats fits your use case, 
the output is fully customizable through the `options` parameter:
```
getId({
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

## License

Licensed under MIT.
