test('should be false', () => {
    expect(false).toBeFalsy();
});

describe("a group of tests", () => {
    test("first test", () => {
        expect("string value").toEqual("string value")
    })
    it("second test", () => { // it = test
        expect("abc").not.toEqual("def");
    })
});

