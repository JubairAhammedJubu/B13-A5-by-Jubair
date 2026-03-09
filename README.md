JavaScript ES6 Notes
<details> <summary>1. What is the difference between <code>var</code>, <code>let</code>, and <code>const</code>?</summary>
| Feature    | var           | let         | const                          |
|-----------|---------------|------------|--------------------------------|
| Scope     | Function Scope| Block Scope| Block Scope                     |
| Redeclare | Possible      | Not possible| Not possible                   |
| Reassign  | Possible      | Possible    | Cannot reassign after initial assignment |
| Update    | Allow         | Allow       | Not allow                      |

Ans:

</details> <details> <summary>2. What is the spread operator (<code>...</code>)?</summary>

Ans: The spread operator (...) is a JavaScript ES6 operator that expands elements from an array, object, or iterable into individual elements.

Key Uses and Examples:

Copying Arrays/Objects: Creates shallow copies

const newArray = [...oldArray];
const newObj = {...oldObj};

Merging Arrays: Combines multiple arrays into a new array

const combined = [...arr1, ...arr2];

Passing Arguments to Functions: Expands an array into individual arguments

Math.max(...[1, 5, 10]);

Object Merging: Merges objects and updates/adds properties

const updatedUser = {...user, role: 'admin'};
</details> <details> <summary>3. What is the difference between <code>map()</code>, <code>filter()</code>, and <code>forEach()</code>?</summary>
| Method    | Purpose                             | Returns                     | Original Array                     | Notes                         |
|----------|-------------------------------------|-----------------------------|-----------------------------------|-------------------------------|
| map()    | Transform each item in the array    | New array of same length    | Does not change unless callback modifies it | Same length as original array |
| filter() | Selects some items based on a condition | New array (length may be smaller) | Original array unchanged          | Length can be smaller than original |
| forEach()| Just loops through the array        | Does not return a new array| Original array unchanged (callback can affect it) | Original array stays same length |

Ans:

</details> <details> <summary>4. What is an arrow function?</summary>

Ans: An arrow function is a shorter way to write a function using the => operator.
It works the same as a normal function but requires less typing.

Key Points:

No need to write function keyword

If it has one line, you can skip {} and return

Commonly used in modern JavaScript and React

Example:

Normal Function:

var multiply = function(a, b) {
  return a * b;
};

Arrow Function:

const multiply = (a, b) => a * b;
</details> <details> <summary>5. What are template literals?</summary>

Ans: Template literals are a JavaScript ES6 feature that allow strings using backticks (` ``) instead of quotes.

Key Features and Examples:

Backtick Syntax:

const simple = `Hello World`;

String Interpolation:

const name = "Alice";
console.log(`Hello, ${name}!`); // "Hello, Alice!"

Multi-line Strings:

const multiLine = `This is line one.
This is line two.`;

Expression Evaluation:

const a = 5;
const b = 10;
console.log(`Sum: ${a + b}`);
</details>
