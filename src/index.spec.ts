import * as mnemonicId from './index';

for (let i = 0; i < 3; i++) {
  getId({ adj: 2, subject: true, verb: true, object: true, delimiter: '_', idSuffix: 6, numberSuffix: 4 });

    console.log(
    mnemonicId.getId({
      adj: 2,
      subject: true,
      verb: true,
      object: true,
      delimiter: '_',
      idSuffix: 6,
      numberSuffix: 4,
    })
  );
}

describe('mnemonicId', () => {
  describe('random', () => {
    it('returns id of correct length', () => {
      expect(mnemonicId.getId().split('-').length).toEqual(1);
      expect(mnemonicId.getId4().split('-').length).toEqual(2);
      expect(mnemonicId.getId6().split('-').length).toEqual(3);
      expect(mnemonicId.getId10().split('-').length).toEqual(7);
      expect(mnemonicId.getId({ idSuffix: 10 }).length).toEqual(10);
      expect(mnemonicId.getId({ numberSuffix: 10 }).length).toEqual(10);
      expect(mnemonicId.getId({
        adj: 2,
        subject: true,
        verb: true,
        object: true,
        delimiter: '_',
        idSuffix: 6,
        numberSuffix: 4,
      }).split('_').length).toEqual(9);
    });
  });
});
