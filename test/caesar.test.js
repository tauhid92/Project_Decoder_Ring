// Write your tests here!
const { expect } = require('chai');
const  caesar  = require('../src/caesar');

describe('#caeser', () => {
    it('should return false if shift is empty and out of range.', () => {
        expect(caesar("thinkful")).to.be.false;
        expect(caesar("thinkful", 99)).to.be.false;
        expect(caesar("thinkful", -26)).to.be.false;
    })
    it('should ignore spaces and special characters and return them as they are', () => {
        expect(caesar("This is a secret message!", 8)).to.equal('bpqa qa i amkzmb umaaiom!');    
    })
    it('should do a basic encoding correctly by shifting index according to shift value.', () => {
        expect(caesar("thinkful", 3)).to.eql('wklqnixo');
        expect(caesar("thinkful", -3)).to.eql('qefkhcri');
    })
    it('should do a basic decoding correctly by shifting index according to the changed shift value.', () => {
        expect(caesar("wklqnixo", 3, false)).to.eql('thinkful');
    })
    it('should do a basic encoding/decoding correctly when shifting index surpasses range of the alphabets array.', () => {
        expect(caesar("BPQA qa I amkzmb umaaiom!", 8, false)).to.equal('this is a secret message!');
    })
});
 



 