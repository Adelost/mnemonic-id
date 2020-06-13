import * as mnemonicId from './index';

describe('mnemonicId', () => {
  describe('createId methods', () => {
    it('returns id in correct format', () => {
      expect(mnemonicId.createNameId()).toMatch(/^\w+-\w+$/);
      expect(mnemonicId.createLongNameId()).toMatch(/^\w+-\w+-\w+$/);
      expect(mnemonicId.createUniqueNameId()).toMatch(/^\w+-\w+-\w+$/);
      expect(mnemonicId.createQuestId()).toMatch(/^\w+-\w+-\w+$/);
      expect(mnemonicId.createStoryId()).toMatch(/^\w+-\w+-\w+-\w+-\w+$/);
      expect(mnemonicId.createLongStoryId()).toMatch(/^\w+-\w+-\w+-\w+-\w+-\w+-\w+$/);
      expect(mnemonicId.createNumberId(10)).toMatch(/^\d{10}$/);
      expect(mnemonicId.createId(10)).toMatch(/^\w{10}$/);
      expect(
        mnemonicId.createCustomId({
          adjectives: 2,
          subject: true,
          verb: true,
          object: true,
          delimiter: '_',
          numberSuffix: 4,
          idSuffix: 6,
          capitalize: true,
        }),
      ).toMatch(/^\w+_\w+_\w+_\w+_\w+_\w+_\w+_\d{4}_\w{6}/);
    });
  });
});
