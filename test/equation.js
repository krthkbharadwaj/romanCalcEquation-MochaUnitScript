var expect = require("chai").expect;
var c = require('../app/calculate');

/**
 * Test scenarios
 * Positive & Negative are two main division
 * Positive test scenarios are addition, subtraction, multiplication, division
 * Digits with no operations possible, empty values provided, non roman numerals
 */
describe("Equation creator is ", function () {
    describe("Takes three positive inputs and provides the equation", function () {
        it("Create the equation for addition", function () {
            var a1 = c.equation('X', 'X', 'XX');
            var a2 = c.equation('XX', 'XXX', 'L');
            expect(a1).to.equal('X+X=XX');
            expect(a2).to.equal('XX+XXX=L');
        });
        it("Create the equation for subtraction", function () {
            var s1 = c.equation('L', 'XX', 'XXX');
            var s2 = c.equation('CC', 'D', 'CCC');
            expect(s1).to.equal('L-XX=XXX');
            expect(s2).to.equal('-CC+D=CCC');
        });
        it("Create the equation for multiplication", function () {
            var m1 = c.equation('X', 'X', 'C');
            var m2 = c.equation('L', 'X', 'D');
            expect(m1).to.equal('X*X=C');
            expect(m2).to.equal('L*X=D');
        });
        it("Create the equation for division", function () {
            var m1 = c.equation('C', 'X', 'X');
            var m2 = c.equation('D', 'C', 'V');
            var m3 = c.equation('L', 'D', 'X');
            expect(m1).to.equal('C/X=X');
            expect(m2).to.equal('D/C=V');
            expect(m3).to.equal('D/L=X');
        });
        it("Create the equation for digits without any operations", function () {
            var o1 = c.equation('CC', 'L', 'X');
            var o2 = c.equation('M', 'C', 'D');
            expect(o1).to.equal('Can not make mathematical operations with numbers provided');
            expect(o2).to.equal('Can not make mathematical operations with numbers provided');
        });
        it("Create the equation for empty values provided", function () {
            var n1 = c.equation('-C', 'L', '');
            var n2 = c.equation('V', '', 'M');
            expect(n1).to.equal('Please enter proper number');
            expect(n2).to.equal('Please enter proper number');
        });
        it("Create the equation for non numerics, non roman numerics & special characters", function () {
            var nr1 = c.equation('ret', 'poy', 'abv');
            var nr2 = c.equation('rr', '##', '&&');
            expect(nr1).to.equal('Can not make mathematical operations with numbers provided');
            expect(nr2).to.equal('Can not make mathematical operations with numbers provided');
        });
    })
    describe("Takes three neagtive inputs and provides the equation", function () {
        it("Negative inputs as roman numericals", function () {
            var nn1 = c.equation('-CX', 'M', '-V');
            var nn2 = c.equation('-XX', '-D', '-L');
            expect(nn1).to.equal('Please enter proper number');
            expect(nn2).to.equal('Please enter proper number');
        });
    });
});
