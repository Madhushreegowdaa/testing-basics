
const { createOrder, getOrderStatus } = require("./order");

describe("Order Tests", () => {


    test("Valid order should be created successfully", () => {
        const items = [
            { name: "Laptop", price: 50000, quantity: 1 }
        ];

        const result = createOrder(items);

        expect(result.success).toBe(true);
        expect(result.message).toBe("Order created successfully");
    });


    test("Empty cart should fail", () => {
        const result = createOrder([]);

        expect(result.success).toBe(false);
        expect(result.order).toBe(null);

        expect(result).toEqual({
            success: false,
            message: "Cart is empty",
            order: null
        });
    });



    test("Order total should be calculated correctly", () => {
        const items = [
            { name: "Book", price: 500, quantity: 2 },
            { name: "Pen", price: 100, quantity: 3 }
        ];

        const result = createOrder(items);

        expect(result.order.total).toBe(1300);
    });


    test("SAVE10 coupon should apply 10% discount", () => {
        const items = [
            { name: "Phone", price: 2000, quantity: 1 }
        ];

        const result = createOrder(items, "SAVE10");

        expect(result.order.total).toBe(1800);
        expect(result.order.coupon).toBe("SAVE10");
    });



    test("No coupon should return null", () => {
        const items = [
            { name: "Book", price: 500, quantity: 1 }
        ];

        const result = createOrder(items);

        expect(result.order.coupon).toBe(null);
        expect(result.order.coupon).toEqual(null);
    });



    test("Order above 1000 should have PREMIUM status", () => {
        const items = [
            { name: "Laptop", price: 2000, quantity: 1 }
        ];

        const result = createOrder(items);
        const status = getOrderStatus(result.order);

        expect(status).toBe("PREMIUM");
        expect(status).toEqual("PREMIUM");
    });

});
