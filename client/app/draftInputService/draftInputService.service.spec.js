'use strict';

describe('Service: draftInputs', function () {

  // load the service's module
  beforeEach(module('draftDayApp'));

  // instantiate service
  var draftInputs;
  beforeEach(inject(function (_draftInputs_) {
    draftInputs = _draftInputs_;
  }));

  it('should do something', function () {
    expect(!!draftInputs).toBe(true);
  });

});
