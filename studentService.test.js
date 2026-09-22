const {
  calculateAverage,
  getGrade,
  analyzeStudent,
  findTopStudent,
} = require("./studentService");

describe("calculateAverage", () => {
  test("should calculate average of valid marks", () => {
    expect(calculateAverage([90, 80,89,70,50])).toBe(75.8);
  });

  test("should return 0 for an empty array", () => {
    
    expect(calculateAverage([])).toBe(0);
  });

  test("should ignore invalid marks", () => {
    expect(calculateAverage([90, 80, -10, 70, 110, 50]) ).toBe(80);
  });

  test("should return 0 when all marks are invalid", () => {
expect(calculateAverage(["80","90","89","70"])).toBe(0);
});

  test("should handle decimal averages", () => {
    expect(calculateAverage([80.5,])).toBe(85)
  });
});

describe("getGrade", () => {
  test("should return A for average >= 90", () => {
//todo
  });

  test("should return B for average between 75 and 89", () => {
    // TODO
  });

  test("should return C for average between 60 and 74", () => {
    // TODO
  });

  test("should return D for average between 40 and 59", () => {
    // TODO
  });

  test("should return F for average below 40", () => {
    // TODO
  });
});

describe("analyzeStudent", () => {
  test("should return complete student analysis", () => {
    // TODO
  });

  test("should mark student as passed when average is 40 or above", () => {
    // TODO
  });

  test("should mark student as failed when average is below 40", () => {
    // TODO
  });

  test("should throw error for invalid student", () => {
    // TODO
  });
});

describe("findTopStudent", () => {
  test("should return student with highest average", () => {
    // TODO
  });

  test("should return null for empty student list", () => {
    // TODO
  });

  test("should handle students with different number of marks", () => {
    // TODO
  });
});