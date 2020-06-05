import * as mnemonicId from './index';

describe('mnemonicId', () => {
  describe('random', () => {
    it('returns id of correct length', () => {
      expect(mnemonicId.getName()).toMatch(/^\w+-\w+-\w+$/);
      expect(mnemonicId.getShortName()).toMatch(/^\w+-\w+$/);
      expect(mnemonicId.getAction()).toMatch(/^\w+-\w+-\w+$/);
      expect(mnemonicId.getStory()).toMatch(/^\w+-\w+-\w+-\w+-\w+-\w+-\w+$/);
      expect(mnemonicId.getCustom({ idSuffix: 10 })).toMatch(/^\w{10}$/);
      expect(mnemonicId.getCustom({ numberSuffix: 10 })).toMatch(/^\d{10}$/);
      expect(
        mnemonicId.getCustom({
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
