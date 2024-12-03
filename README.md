# Classnames Utility
A utility function for dynamically constructing className strings in JavaScript and TypeScript projects. This function combines base class names, conditional modifiers, and additional classes into a single, clean string.
## Installation

You can install this package via npm:

```bash
npm i classnames-util
```

## Usage

### Import the function

You can import the function into your project as follows:

```ES modules
import { classNames } from 'classnames-util';
or
const { classNames } = require('classnames-util');
```

### Syntax

```typescript
classNames(
    cls: string,
    mods?: Record<string, boolean | string>,
    additional?: string[]
): string
```


### Return Value
The function returns a string containing all included class names, separated by spaces. It's optimized for use in scenarios like dynamically constructing CSS class strings in frameworks such as React.

### Example

```javascript
//Example 1: Basic Usage
const className = classNames('button', { 'button--active': true, 'button--disabled': false }, ['extra-class']);
console.log(className);
// Output: "button button--active extra-class"

// Example 2: Custom parameters
const isActive = true;
const isDisabled = false;

const className = classNames('button', { 'button--active': isActive, 'button--disabled': isDisabled });
console.log(className);
// Output: "button button--active"

const additionalClasses = ['extra', 'another-extra'];
//Example 3: Additional Classes
const className = classNames('main', {}, additionalClasses);
console.log(className);
// Output: "main extra another-extra"

```
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