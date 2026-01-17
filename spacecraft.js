/* Task 1: No Parameters: Activate Hyperdrive */
// TODO: Write an arrow function named `activateHyperdrive` with no parameters that print `"Hyperdrive activated!"` to the console. Call `activateHyperdrive` to test it.
const activateHyperdrive = () => {
    console.log("Hyperdrive activated!");
};
activateHyperdrive();

/* Task 2: Implicit Return: Scan for Lifeforms */
// TODO: Create an arrow function named `scanForLife` that implicitly returns `"No lifeforms detected"` without using curly braces. Print the result of calling `scanForLife`.
const scanForLife = () => "No lifeforms detected";
console.log(scanForLife());

/* Task 3: Implicit Return with Objects: Log Coordinates */
// TODO: Write an arrow function named `currentCoordinates` that returns an object with properties `x`, `y`, and `z`, representing coordinates in space. Use implicit return. Print the returned object from `currentCoordinates`.
const currentCoordinates = () => ({ x: 42, y: 27, z: 13 });
console.log(currentCoordinates());

/* Task 4: Understanding `this`: Message from Home Base */
// TODO: Inside an object named `spacecraft`, create a method named `receiveMessage` using arrow function syntax. This method should log `"Message received: "` followed by a message it receives as a parameter. Directly call `receiveMessage` within `spacecraft` and observe. Observe and explain the behavior of `this` in this context as a comment.
const spacecraft = {
    receiveMessage: (message) => {
        console.log("Message received: " + message);
        console.log(this); // 'this' does not refer to the spacecraft object
    }
};
spacecraft.receiveMessage("All systems operational.");
/*
 * Observations:
 * TODO: Explain here.
 */
// In this context, the arrow function does not have its own `this` binding. Instead, it inherits `this` from the surrounding lexical context, which is likely the global object (or undefined in strict mode). Therefore, `this` inside `receiveMessage` does not refer to the `spacecraft` object as one might expect with a regular function.