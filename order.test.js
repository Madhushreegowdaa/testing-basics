
const { createOrder } = require("./order");

describe("Order Tests", () => {


    test("should successfully create a valid order", () => {
        const items = [
            { name: "Laptop", price: 50000, quantity: 1 }
        ];

        const result = createOrder(items);

        expect(result.success).toBe(true);
        expect(result.message).toBe("Order created successfully");
        expect(result.order).toEqual({
            items: items,
            total: 50000,
            coupon: null
        });
    });


   
    test("should fail when cart is empty", () => {
        const result = createOrder([]);

        expect(result.success).toBe(false);
        expect(result.message).toBe("Cart is empty");
        expect(result.order).toBe(null);

        expect(result).toEqual({
            success: false,
            message: "Cart is empty",
            order: null
        });
    });


    test("should correctly handle multiple products", () => {
        const items = [
            { name: "Laptop", price: 50000, quantity: 1 },
            { name: "Mouse", price: 1000, quantity: 2 },
            { name: "Keyboard", price: 2000, quantity: 1 }
        ];

        const result = createOrder(items);

        expect(result.success).toBe(true);
        expect(result.order.items.length).toBe(3);
        expect(result.order.items).toEqual(items);
    });

    test("should apply SAVE10 coupon correctly", () => {
        const items = [
            { name: "Phone", price: 20000, quantity: 1 }
        ];

        const result = createOrder(items, "SAVE10");

        expect(result.success).toBe(true);
        expect(result.order.total).toBe(18000);
        expect(result.order.coupon).toBe("SAVE10");

        expect(result.order).toEqual({
            items: items,
            total: 18000,
            coupon: "SAVE10"
        });
    });


    test("should return null when no coupon is applied", () => {
        const items = [
            { name: "Book", price: 500, quantity: 2 }
        ];

        const result = createOrder(items);

        expect(result.success).toBe(true);
        expect(result.order.coupon).toBe(null);

        expect(result.order.coupon).toEqual(null);
    });

});



