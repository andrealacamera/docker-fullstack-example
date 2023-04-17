const pool = require('../../utilities/database');

module.exports = {
  get_gondor: (callback) => {
    pool.query(`SELECT * FROM gondor`, 
    [],
    (error, results) => {
      if (error) {
        console.log(error)
        return callback(error)
      } else {
        console.log(results)
        return callback (null, results)
      }
    })
  }
}