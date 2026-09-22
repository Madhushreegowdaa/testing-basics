const { signup, login } = require("./auth");

describe("Authentication Tests", () => {

    test("should successfully signup a new user", () => {
        const result = signup(
            "Madhushree",
            "madhu@gmail.com",
            "123456"
        );

        expect(result.success).toBe(true);
        expect(result.message).toBe("Signup successful");
        expect(result.user.email).toBe("madhu@gmail.com");
    });


    test("should fail when signing up with an existing email", () => {
        const result = signup(
            "Madhushree",
            "madhu@gmail.com",
            "123456"
        );

        expect(result.success).toBe(false);
        expect(result.message).toBe("User already exists");
    });

   
    test("should successfully login with correct password", () => {
        const result = login(
            "madhu@gmail.com",
            "123456"
        );

        expect(result.success).toBe(true);
        expect(result.message).toBe("Login successful");
        expect(result.user.email).toBe("madhu@gmail.com");
    });

    test("should fail login with incorrect password", () => {
        const result = login(
            "madhu@gmail.com",
            "wrongpassword"
        );

        expect(result.success).toBe(false);
        expect(result.message).toBe("Invalid password");
    });

});