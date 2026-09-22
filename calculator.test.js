//describe() -test plan
//it()/test()-test case
//expect() -assertion
const {add}=require("./calculator");
describe("Add feature of the calculator",()=>{
    test("Add 2 positive numbers ",()=>{
        expect(add(5,10)).toBe(15);
        //expect().toEqual()
        //expect().toBeTruthy()
        //expect().toBeFalsy()
        //expect().toBeDefined()
        //expect().toBeUndefined()
    });
    it("Add 2 negative numbers ",()=>{
        expect(add(-5,-10)).toBe(-15);
    });
});

const {sub}=require("./calculator");
describe("subtract feature of the calculator",()=>{
    test("sub 2 positive numbers ",()=>{
        expect(sub(5,10)).toBe(-5);
    });
    it("sub 2 negative numbers ",()=>{
        expect(sub(15,-10)).toBe(25);
    });
});

const {mul}=require("./calculator");
describe("multiplication feature of the calculator",()=>{
    test("mul 2 positive numbers ",()=>{
        expect(mul(5,10)).toBe(50);
    });
    it("mul 2 negative numbers ",()=>{
        expect(mul(15,-10)).toBe(25);
    });
});

const {div}=require("./calculator");
describe("division feature of the calculator",()=>{
    test("div 2 positive numbers ",()=>{
        expect(div(50,10)).toBe(50);
    });
    it("div 2 negative numbers ",()=>{
        expect(div(0,-10)).toBe(0);
    });
});