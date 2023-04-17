const dotenv = require("dotenv");
const fs = require('fs');
const { createPool } = require("mysql2");

const dockerSecret = () => {
  const secret = process.env.DB_PASSWD;
  try {
    const s = fs.readFileSync(secret, 'utf8');
    // console.log(`PASSWD = ${s}`);
    return s
  } catch (err) {
    if (err.code !== 'ENOENT') {
      console.log(`An error occurred while trying to read the secret: ${secret}. Err: ${err}`)
    } else {
      console.log(`Could not find the secret, probably not running in swarm mode: ${secret}. Err: ${err}`);
    }  
  }
}


const pool = createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: dockerSecret(),
  database: 'middle_earth', 
  waitForConnections: true,
  // connectionLimit: 15,
  // bigNumberStrings: true,
  // supportBigNumbers: true
});

console.log(pool)
module.exports = pool;