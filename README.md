Here’s your content rewritten in a **README-friendly format** with proper Markdown styling:

---

# JavaScript ES6 Concepts Cheat Sheet

## 1. Difference Between `var`, `let`, and `const`

| var                       | let                       | const                               |
| ------------------------- | ------------------------- | ----------------------------------- |
| Function Scope            | Block Scope               | Block Scope                         |
| Redeclare possible        | Redeclare not possible    | Redeclare not possible              |
| Reassign possible         | Reassign possible         | cannot reassign after initial assignment |
| Update allow              | Update allow              | Update not allow                    |

---

## 2. Spread Operator (`...`)

The **spread operator (`...`)** is a JavaScript ES6 feature that expands elements from an array, object, or iterable into individual elements.

**Key Uses and Examples:**

* **Copying Arrays/Objects:** Creates shallow copies

```javascript
const newArray = [...oldArray];
const newObj = {...oldObj};
```

* **Merging Arrays:** Combines multiple arrays into a new array

```javascript
const combined = [...arr1, ...arr2];
```

* **Passing Arguments to Functions:** Expands an array into individual arguments

```javascript
Math.max(...[1, 5, 10]);
```

* **Object Merging:** Merges objects and updates/adds properties

```javascript
const updatedUser = {...user, role: 'admin'};
```

---

## 3. Difference Between `map()`, `filter()`, and `forEach()`


| map()                             | filter()                               | forEach()                                                   |
| --------------------------------- | -------------------------------------- | ----------------------------------------------------------- |
| Transform each the array           | Selects some items based on a condition | Just loops through the array                                |
| Returns a same length new array    | Returns a new array based on a condition | Does not return a new array                                 |
| Does not change the original array unless the callback function changes | Does not change the original array | Does not change the original array by itself, but the callback function can affect it |
| Same length as the original array  | Length can be smaller than the original | Original array stays same length                             |

---

## 4. Arrow Function

An **arrow function** is a shorter way to write a function using the `=>` operator.

**Features:**

* No need to write the `function` keyword
* Can skip `{}` and `return` for one-liners
* Commonly used in modern JavaScript and React

**Example:**

*Normal Function:*

```javascript
var multiply = function(a, b) {
  return a * b;
};
```

*Arrow Function:*

```javascript
const multiply = (a, b) => a * b;
```

---

## 5. Template Literals

**Template literals** allow strings using backticks (`` ` ``) instead of quotes.

**Key Features and Examples:**

* **Backtick Syntax:**

```javascript
const simple = `Hello World`;
```

* **String Interpolation:** Embed variables using `${}`

```javascript
const name = "Alice";
console.log(`Hello, ${name}!`); // "Hello, Alice!"
```

* **Multi-line Strings:**

```javascript
const multiLine = `This is line one.
This is line two.`;
```

* **Expression Evaluation:** Perform calculations inside strings

```javascript
const a = 5;
const b = 10;
console.log(`Sum: ${a + b}`); // "Sum: 15"
```

---

This README format is clean, easy to read, and perfect for documentation or GitHub projects.

If you want, I can also make a **version with colored code blocks and badges** to make it look even more like a professional GitHub README.

Do you want me to do that?
