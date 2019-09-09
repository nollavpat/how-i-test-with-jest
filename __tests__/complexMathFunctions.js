const complexMathFunctions = require('../modules/complexMathFunctions');

xdescribe('complexMathFunctions', () => {
  describe('#derive()', () => {
    complexMathFunctions.derive = jest.fn();

    xtest('mock clear', () => {
      console.log('************start clear*************');
      complexMathFunctions.derive.mockReturnValue('mocked');
      complexMathFunctions.derive('e dx');
      console.log('pre mock.calls:', complexMathFunctions.derive.mock.calls);

      complexMathFunctions.derive.mockClear();
      console.log('post mock.calls:', complexMathFunctions.derive.mock.calls);
      console.log('************end clear*************');
    });

    xtest('mock reset', () => {
      console.log('************start reset*************');
      complexMathFunctions.derive.mockReturnValue('mocked');

      console.log('pre mockReturnValue:', complexMathFunctions.derive('e dx'));
      console.log('pre mock.calls:', complexMathFunctions.derive.mock.calls);

      complexMathFunctions.derive.mockReset();
      console.log('post mock.calls:', complexMathFunctions.derive.mock.calls);
      console.log('post mockReturnValue:', complexMathFunctions.derive('e dx'));
      console.log('************end reset*************');
    });
  });

  describe('#integrate()', () => {
    jest.spyOn(complexMathFunctions, 'integrate');

    test('mock restore', () => {
      console.log('************start restore*************');
      complexMathFunctions.integrate.mockReturnValue('mocked');

      console.log(
          'pre mockReturnValue:',
          complexMathFunctions.integrate('e dx')
      );
      console.log('pre mock.calls:', complexMathFunctions.integrate.mock.calls);

      complexMathFunctions.integrate.mockRestore();
      console.log('post integrate:', complexMathFunctions.integrate);
      console.log('post mockReturnValue:', complexMathFunctions.integrate(1));
      console.log('************end restore*************');
    });
  });
});
