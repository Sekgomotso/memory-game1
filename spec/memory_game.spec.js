const script = require('../src/script');

describe("memory game respond", () => {
    it("should show a victory message when all cards match", () => {
        expect(script.flipCard(count == 6)).toBe("Victory!");
    });

});