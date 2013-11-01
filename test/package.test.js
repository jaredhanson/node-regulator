var regulator = require('..');

describe('regulator', function() {
  
  it('should export IntervalRegulator constructor', function() {
    expect(regulator.IntervalRegulator).to.be.a('function');
  });
  
});
