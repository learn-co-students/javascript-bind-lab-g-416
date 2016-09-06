const sinon = require('sinon');

describe('Tick, tock...', function () {
  it('should have an object called `digitalClock`', function () {
    expect(digitalClock).toBeAn('object');
  });

  it('should have a `time` property that matches the current time in seconds', function () {
    expect(digitalClock.time).toEqual(Math.round(Date.now() / 1000));
  });

  it('should have a `startTicking` method', function () {
    expect(digitalClock.startTicking).toBeA('function');
  });

  it('should update the `time` property every second when `startTicking` is called', function () {
    const spy = sinon.spy();
    setInterval = spy;
    const startingTime = digitalClock.time;

    digitalClock.startTicking();

    sinon.assert.calledOnce(spy);
    expect(spy.firstCall.args[1]).toEqual(1000);

    spy.firstCall.args[0]();
    expect(digitalClock.time).toEqual((startingTime + 1), 'The time is not being updated');
  });
});

describe('So much for free speech', function () {
  describe('censor()', function () {
    it('should exist', function () {
      expect(censor).toBeA('function');
    });

    it('should replace all occurrences of the censored word with BLEEP', function () {
      const result = censor('orange', 'This is my orange suitcase and it is very orange indeed.');
      const expectedResult = 'This is my BLEEP suitcase and it is very BLEEP indeed.';
      expect(result).toEqual(expectedResult);
    });
  });

  describe('bound censor functions', function () {
    it('should have used .bind() or arrow functions', function () {
      const hasUsedBind = global.srcCode.includes('.bind');
      const hasUsedArrowFunction = global.srcCode.includes('=>');
      expect(hasUsedBind || hasUsedArrowFunction).toBeTruthy('Neither `.bind()` nor ES2015 arrow functions have been used in the solution.')
    });

    describe('violenceCensor()', function () {
      it('should exist', function () {
        expect(violenceCensor).toBeA('function');
      });

      it('should replace all occurrences of the censored word with BLEEP', function () {
        const result = violenceCensor('This show contains mature language, violence and some more violence.');
        const expectedResult = 'This show contains mature language, BLEEP and some more BLEEP.';
        expect(result).toEqual(expectedResult);
      });
    });

    describe('drugsCensor()', function () {
      it('should exist', function () {
        expect(drugsCensor).toBeA('function');
      });

      it('should replace all occurrences of the censored word with BLEEP', function () {
        const result = drugsCensor('This show contains mature language, drugs and some more drugs.');
        const expectedResult = 'This show contains mature language, BLEEP and some more BLEEP.';
        expect(result).toEqual(expectedResult);
      });
    });
  });
});
