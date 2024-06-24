const crypto = require('crypto');

class otp {
    constructor() {
      this.seed = Math.random();
    }
  
     stringToNumber(str) {
        let result = '';
        for (let i = 0; i < str.length; i++) {
          result += str.charCodeAt(i).toString();
        }
        return parseInt(result, 10);
      }

     generate6DigitCode(str, timestampToCheck) {
        const timestamp = timestampToCheck || Math.floor(Date.now() / 1000);  // Current time in seconds
        const combined = `${timestamp}${this.stringToNumber(str)}`;
        const hash = crypto.createHash('sha256').update(combined).digest('hex');
        const sixDigitCode = parseInt(hash.substring(0, 6), 16) % 1000000;
        return sixDigitCode.toString().padStart(6, '0');
    }

     isValidCode(username, providedCode, mins = 5) {
    const currentTimestamp = Math.floor(Date.now() / 1000);  // Current time in seconds
    for (let i = 0; i <= 60*mins; i += 60) {  
        const timestampToCheck = currentTimestamp - i;
        const expectedCode = this.generate6DigitCode(username, timestampToCheck);
        if (providedCode === expectedCode) {
            return true;
        }
    }
    return false;
}


}

module.exports = otp;