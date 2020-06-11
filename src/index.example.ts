import { createNameId, createStoryId } from './index';

console.log(createNameId()); // -> hot-splendid-duck
console.log(createStoryId()); // -> fluffy-dragon-fly-nervous-pug

import * as mnemonicId from './index';

console.log(mnemonicId.createNameId()); // -> ancient-sour-fish
console.log(mnemonicId.createStoryId()); // -> neat-warthog-erase-evil-rat
