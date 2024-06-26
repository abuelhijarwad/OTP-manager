const crypto = require('crypto');

class otp {
    constructor() {
      this.seed = Math.floor(Math.random() * (64783892764 - 234234 + 1)) + 234234;
    }
  
     stringToNumber(str) {
        let result = '';
        for (let i = 0; i < str.length; i++) {
          result += str.charCodeAt(i).toString();
        }
        return parseInt(result, 10);
      }

     creat(username, timestampToCheck) {
        const timestamp = timestampToCheck || Math.floor(Date.now() / 1000);  // Current time in seconds
        const combined = `${timestamp}${this.stringToNumber(username)+this.seed}`;
        const hash = crypto.createHash('sha256').update(combined).digest('hex');
        const sixDigitCode = parseInt(hash.substring(0, 6), 16) % 1000000;
        return sixDigitCode.toString().padStart(6, '0');
    }

     check(providedCode, username, mins = 5) {
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
    reSeed() {
      this.seed = Math.floor(Math.random() * (64783892764 - 234234 + 1)) + 234234;
    }

}

module.exports = otp;