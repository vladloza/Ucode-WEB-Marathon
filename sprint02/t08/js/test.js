describe("checkBrackets", function() {
    it("Undefined is invalid input", function() {
        assert.equal(checkBrackets(undefined), -1);
    })
    it("String without brackets is invalid", function() {
        assert.equal(checkBrackets('sadsada'), -1);
    })
    it("Null is invalid", function() {
        assert.equal(checkBrackets(null), -1);
    })
    it("NaN is invalid", function() {
        assert.equal(checkBrackets(NaN), -1);
    })
    it("Number is invalid", function() {
        assert.equal(checkBrackets(5), -1);
    })


    it("1)()(())2(( should return 2", function() {
        assert.equal(checkBrackets('1)()(())2(()'), 2);
    })
    it("()() should return 2", function() {
        assert.equal(checkBrackets('(())'), 0);
    })
    it("()()) should return 1", function() {
        assert.equal(checkBrackets('(()))'), 1);
    })
    it("((a)(a)b) should return 0", function() {
        assert.equal(checkBrackets('(())'), 0);
    })
    it("((( should return 3", function() {
        assert.equal(checkBrackets("((("), 3);
    })
    it("(tr)))tr) should return 3", function() {
        assert.equal(checkBrackets("()tr))tr)"), 3);
    })
    it("(()(__)(((__ should return 4", function() {
        assert.equal(checkBrackets("(()()((("), 4);
    })
    it("((((()))( should return 3", function() {
        assert.equal(checkBrackets("((((()))("), 3);
    })
    it(")))))( should return 6", function() {
        assert.equal(checkBrackets(")))))("), 6);
    })
    it("lorem((( should return 3", function() {
        assert.equal(checkBrackets("lorem((("), 3);
    })
})