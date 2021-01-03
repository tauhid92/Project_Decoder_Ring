const { expect } = require('chai');
const polybius = require('../src/polybius');
describe('#polybius', () => {
    it('should be able to encode a word or sentence without errors.', () => {
        expect(polybius("thankful")).to.equal("4432113352125413");
     })
    it('should make sure that i and j share the same value.', () => {
        expect(polybius("thinkful")).to.equal("4432423352125413");
     })
    it('should return empty spaces in the exact order when encoding.', () => {
        expect(polybius("Hello world")).to.equal("3251131343 2543241341");
     })
    it('should be able to decode a sentence or word without errors.', () => {
        expect(polybius("3251131343", false)).to.equal("hello");
     })
    it('should return empty spaces in the exact order when decoding.', () => {
        expect(polybius("3251131343 2543241341", false)).to.equal("hello world");
     })
    it('should return (i/j) if there value exists.', () => {
        expect(polybius("4432423352125413", false)).to.equal("th(i/j)nkful");
     })
    it('should return false if the length of the input excluding empty spaces is odd.', () => {
        expect(polybius("44324233521254134", false)).to.be.false;
     })
    it('should always return a string when encoding or decoding', () => {
        expect(polybius("thinkful")).to.be.a('string');
     })
});
