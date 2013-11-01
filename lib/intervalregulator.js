function IntervalRegulator(max, period) {
  this._count = 0;
  this._max = max;
  this._period = period;
  
  this.start();
}

IntervalRegulator.prototype.attempt = function(fn, nfn) {
  if (this._count++ < this._max) {
    fn();
  } else {
    nfn && nfn();
  }
}

IntervalRegulator.prototype.dispose = function() {
  this.stop();
}

IntervalRegulator.prototype.start = function() {
  var self = this;
  
  // Set a repeating interval that resets the count back to 0 at the beginning
  // of each period.
  this._handle = setInterval(function() {
    self._count = 0;
  }, this._period);
}

IntervalRegulator.prototype.stop = function() {
  clearInterval(this._handle);
}


module.exports = IntervalRegulator;
