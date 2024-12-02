# Classnames Utility
A utility function for dynamically constructing className strings in JavaScript and TypeScript projects. This function combines base class names, conditional modifiers, and additional classes into a single, clean string.

## Installation

You can install this package via npm:

bash
npm i classnames-util



## Usage

### Import the function

You can import the function into your project as follows:

ES modules
import { classNames } from 'classnames-util';

const { classNames } = require('classnames-util');




### Syntax
classNames(
cls: string,
mods?: Record<string, boolean | string>,
additional?: string[]
): string



### Parameters

| Parameter     | Type     | Default | Description                                           |
|---------------|----------|---------|-------------------------------------------------------|
| cls    | string |         | The base class name (always included in the result).  |
| mods    | `Record<string, boolean | string>`   | Passed css styles that need to be added to the class. |
| additional     | string[] | []     | An array of additional class names that are always included (e.g., computed or static class names).  |

### Return Value
The function returns a string containing all included class names, separated by spaces. It's optimized for use in scenarios like dynamically constructing CSS class strings in frameworks such as React.

### Example

javascript
const { GameDifficultCoefCalculate } = require('game-difficult-coef-calculate');

// Example 1: Basic usage with default parameters
const difficulty1 = GameDifficultCoefCalculate(30);
console.log(difficulty1); // Output: A calculated difficulty coefficient

// Example 2: Custom parameters
const difficulty2 = GameDifficultCoefCalculate(75, 150, 5, 0.8, 3);
console.log(difficulty2); // Output: A calculated difficulty coefficient with 3 decimal precision


### How It Works

1. **Base Class**: Always includes the base class (cls).
2. **Modifiers**: Iterates through the mods object. If a key's value is truthy (true or a non-empty string), the key is included in the final class name string.
3. **Additional Classes**: Includes all strings in the additional array.



## Why Use This?

Why Use This?

This utility is designed to make dynamic class name construction:

Cleaner and more maintainable.
Easier to understand in large, component-based codebases like React.
Compatible with conditional and computed CSS classes.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE.txt) file for details.