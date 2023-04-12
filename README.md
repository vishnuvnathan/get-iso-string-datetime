# get-iso-string-datetime

A Node.js package for converting ISO string datetime to JavaScript Date objects.
Installation
You can install get-iso-string-datetime using npm:

## Installation

Install get-iso-string-datetime with npm

```bash
  npm install get-iso-string-datetime

```

## Function

#### getDateTimeFromISOString(isoString)

getDateTimeFromISOString is a simple function converts an ISO string to simple datetime format without UTC attributes by removing ISO datetime format attributes delimiter "T" and Zero hour offset "Z" .

isoString: A string representing the datetime in ISO format (e.g., '2023-04-12T09:30:45.123Z').
Returns: A string representing the datetime in the input ISO string.

## Usage

```javascript
const getDateTimeFromISOString = require('get-iso-string-datetime');

const datetime = getDateTimeFromISOString('2023-04-12T09:30:45.123Z');
console.log(datetime); //2023-04-12 09:30:45.123
```

## License

This package is released under the [MIT License.](https://choosealicense.com/licenses/mit/)

## Contributing

If you find any issues or have suggestions for improvement, please feel free to contribute by opening an issue or submitting a pull request. We welcome contributions from the community!
