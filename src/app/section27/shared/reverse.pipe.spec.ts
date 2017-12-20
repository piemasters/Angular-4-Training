import { UnitTestReversePipe } from './reverse.pipe';

describe('UnitTestReversePipe', () => {

  it('should reverse a string', () => {
    const reversePipe = new UnitTestReversePipe();
    expect(reversePipe.transform('hello')).toEqual('olleh');
  });

});
