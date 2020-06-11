import * as mnemonicId from './index';

describe('mnemonicId', () => {
  describe('createId methods', () => {
    it('returns id in correct format', () => {
      expect(mnemonicId.createNameId()).toMatch(/^\w+-\w+-\w+$/);
      expect(mnemonicId.createShortNameId()).toMatch(/^\w+-\w+$/);
      expect(mnemonicId.createActionId()).toMatch(/^\w+-\w+-\w+$/);
      expect(mnemonicId.createStoryId()).toMatch(/^\w+-\w+-\w+-\w+-\w+$/);
      expect(mnemonicId.createLongStoryId()).toMatch(/^\w+-\w+-\w+-\w+-\w+-\w+-\w+$/);
      expect(mnemonicId.createCustomId({ idSuffix: 10 })).toMatch(/^\w{10}$/);
      expect(mnemonicId.createCustomId({ numberSuffix: 10 })).toMatch(/^\d{10}$/);
      expect(mnemonicId.createId(10)).toMatch(/^\w{10}$/);
      expect(mnemonicId.createNumberId(10)).toMatch(/^\d{10}$/);
      expect(
        mnemonicId.createCustomId({
          adj: 2,
          subject: true,
          verb: true,
          object: true,
          delimiter: '_',
          idSuffix: 6,
          numberSuffix: 4,
        }),
      ).toMatch(/^\w+_\w+_\w+_\w+_\w+_\w+_\w+_\w{6}_\d{4}/);
    });
  });
});
