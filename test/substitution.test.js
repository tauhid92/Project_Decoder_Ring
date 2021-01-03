const substitution = require('../src/substitution');
const { expect } = require('chai');

describe('#substitution', () => {
    it('should return false if alphabets parameter is not equal to 26.', () => {
        expect(substitution("thinkful", "short")).to.be.false;
    })
    it('should return false if alphabets parameter has repeating characters.', () => {
        expect(substitution("thinkful", "abcabcabcabcabcabcabcabcyz")).to.be.false;
    })
    it('should return output even if there is a space in the input.', () => {
        expect(substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")).to.equal('elp xhm xf mbymwwmfj dne'); 
    })
    it('should return encoded message without error.', () => {
        expect(substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")).to.equal('jrufscpw');
    })
    it('should return decoded message without error.', () => {
        expect(substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false)).to.equal('thinkful');
    })
 });

