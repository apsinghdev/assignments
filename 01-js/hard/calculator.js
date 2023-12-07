/*
  Implement a class `Calculator` having below methods
    - initialise a this.result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the this.result
    - subtract: takes a number and subtracts it from the this.result
    - multiply: takes a number and multiply it to the this.result
    - divide: takes a number and divide it to the this.result
    - clear: makes the `this.result` variable to 0
    - getthis.result: returns the value of `this.result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its this.result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.result = 0;
  }
  add(a) {
    this.result = a + this.result;
  }
  subtract(a) {
    this.result = this.result - a;
  }
  multiply(a) {
    this.result = this.result * a;
  }
  divide(a) {
    if (a === 0) {
      throw new Error("can not divide by zero");
    }
    this.result = this.result / a;
  }
  clear() {
    this.result = 0;
  }
  getResult() {
    return this.result;
  }
  calculate(expression) {
    // the line below is optional coz eval(expression) has no impact of any kind of whitespaces in expression

    expression = expression.replace(/\s+/g, " ").trim();

    // first solution of below was to split the expression in array then iterate, check what elements are non-numeric and on founding them , throw error
    // was not a good solution coz i want non-numeric values in the expression as well like +=-
    // so good solution would be the specify my own expression pattern/structure using regex and then using test

    // NOTE: "2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs" in this my objective is : [ allow only element that make a valid expression ] so there are two ways to achieve this 1) write conditions for all the unwanted elements that will make the expression invalid like @##$^ 2) create an pattern of wanted elements and make rest of all invalid. the second one is easier to do and more definite

    if (!/^[0-9+\-*/(). ]+$/.test(expression)) {
      throw new Error("invalid expression");
    }
    try {
      // below line checks if there is any /0 situation in expression, and throws an error
      if (/\/\s*0/g.test(expression)) {
        throw new Error("invalid expression");
      }
      this.result = eval(expression);
      return this.result;
    } catch (error) {
      throw new Error("invalid expression");
    }
  }
}

module.exports = Calculator;
