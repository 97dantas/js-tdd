const expect = require('chai').expect
const calc = require('./../src/main')

describe('Calc', () => {
	describe('Smoke tests', () => {
		it('Should exist the calc lib', () => {
			expect(calc).to.exist
		})
		const f = ['sum', 'sub', 'div', 'mult']
		f.forEach(fun => {
			it(`Should exist the method ${fun}`, () => {
				expect(calc[fun]).to.exist
				expect(calc[fun]).to.be.a('function')
			})
		})
	})
	describe('Sum', () => {
		it('should return 4 when `sum(2,2)`', () => {
			expect(calc.sum(2, 2)).to.be.equal(4)
		})
	})
	describe('Sub', () => {
		it('should return 0 when `sub(2,2)`', () => {
			expect(calc.sub(2, 2)).to.be.equal(0)
		})
	})
	describe('Mult', () => {
		it('should return 10 when `mult(2,5)`', () => {
			expect(calc.mult(2, 5)).to.be.equal(10)
		})
	})
	describe('Div', () => {
		it('should return 10 when `div(20,2)`', () => {
			expect(calc.div(20, 2)).to.be.equal(10)
		})
	})
})
