import {
  createCustomId,
  createId,
  createLongNameId,
  createLongStoryId,
  createQuestId,
  createNameId,
  createNounId,
  createNumberId,
  createStoryId,
  createUniqueNameId,
} from './index';

console.log(createNameId());
console.log(createLongNameId());
console.log(createUniqueNameId());
console.log(createQuestId());
console.log(createStoryId());
console.log(createLongStoryId());
console.log(createNounId());
console.log(createId(10));
console.log(createNumberId(10));
console.log(
  createCustomId({
    adjectives: 2,
    subject: true,
    verb: true,
    object: true,
    idSuffix: 6,
    numberSuffix: 4,
    delimiter: '',
    capitalize: true,
  }),
);
