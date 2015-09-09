
// It is required by normal call on onReady callbacks

describe("Launching tests", function() {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 400;

    it("and setting launch timeout", function(done) {
        setTimeout(function() {
            done();
        }, 300);
    });
});