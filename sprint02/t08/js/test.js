describe("checkBrackets", function() {
    it("Undefined is valid input", function() {
        assert.equal(checkBrackets(undefined), 0);
    })
    it("String without brackets is valid", function() {
        assert.equal(checkBrackets('sadsada'), 0);
    })
    it("Null is valid", function() {
        assert.equal(checkBrackets(null), 0);
    })
    it("NaN is valid", function() {
        assert.equal(checkBrackets(NaN), 0);
    })
    it("Number is valid", function() {
        assert.equal(checkBrackets(5), 0);
    })
    // it("1)()(())2(( should return 2", function() {
    //     assert.equal(checkBrackets('1)()(())2(()'), 2);
    // })
    // it("()() should return 2", function() {
    //     assert.equal(checkBrackets('(())'), 0);
    // })
    // it("()()) should return 1", function() {
    //     assert.equal(checkBrackets('(()))'), 1);
    // })
    it("(()()) should return 0", function() {
        assert.equal(checkBrackets('(()))'), 0);
    })
})