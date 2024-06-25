# OTP (One-Time Password) manager - InstantOTP

A simple and secure Node.js module for generating and validating one-time passwords (OTPs) based on a username. This can be used for two-factor authentication (2FA) or other security purposes.

## Features

- Generates a 6-digit OTP based on a username and the current timestamp.
- Validates the provided OTP against a specified time window or mainly for 5 mins.
- Allows reseeding for added security.

## Installation

You can install this module via npm:

```sh
npm install instant-otp
```

## Usage

### Importing the Module

First, import the module in your project:

```javascript
const OTP = require('instant-otp');
```

### Creating an OTP Instance

Create an instance of the OTP class:

```javascript
const otp = new OTP();
```

### Generating an OTP

Generate a 6-digit OTP based on a username:

```javascript
const username = 'exampleUser';
const otpCode = otp.creat(username);
console.log(`Your OTP is: ${otpCode}`);
```

### Validating an OTP

Validate the provided OTP against a username and a time window (default is 5 minutes):

```javascript
const providedCode = '123456';
const isGood = otp.check(providedCode, username);

if (isGood) {
    console.log('The OTP is good.');
} else {
    console.log('The OTP is bad.');
}
```

### Reseeding the OTP Generator

Reseed the OTP generator to change the internal seed:

```javascript
otp.reSeed();
console.log('The OTP generator has been reseeded.');
```

## Methods

### `creat(username)`

Generates a 6-digit OTP based on the provided username.

- `username` (string): The username to generate the OTP for.

Returns a 6-digit OTP (string).

### `check(providedCode, username, mins)`

Validates the provided OTP against the specified username and time window.

- `providedCode` (string): The OTP to validate.
- `username` (string): The username to validate the OTP for.
- `mins` (optional, number): The time window in minutes to check the OTP against (default is 5 minutes before).

Returns a boolean indicating whether the OTP is valid.

### `reSeed()`

Reseeds the OTP generator with a new random seed for more securety - note that every otp in the rang will be invailed after doing so.


## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## Author

Developed by @abuelhijarwad.


