const crypto = require("crypto");
const jwt = require("jsonwebtoken");

// ENC_KEY and IV can be generated as crypto.randomBytes(32).toString('hex');
require("dotenv").config();

exports.encrypt = (text) => crypto.createHash("md5").update(text).digest("hex");

exports.getEnv = async (envVar) => {
  let value = "";
  try {
    value = process.env[envVar];
  } catch (error) {
    console.log(error);
  }
  return value;
};

exports.generateToken = async (params = {}, rememberMe = false) => {
  if (!rememberMe) {
    const expTime = 86400;
    const dt = new Date();
    dt.setSeconds(dt.getSeconds() + 86400);

    return {
      token: jwt.sign(params, await this.getEnv('JWT_KEY'), {
        expiresIn: `${expTime}s`,
      }),
      expDate: dt,
    };
  }
  const dt = new Date();
  dt.setMonth(dt.getMonth() + 12);

  return {
    token: jwt.sign(params, await this.getEnv('JWT_KEY')),
    expDate: dt,
  };
};

exports.verifyToken = async (token) =>
  jwt.verify(token, await this.getEnv('JWT_KEY'));
