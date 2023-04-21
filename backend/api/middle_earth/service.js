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
        results=JSON.parse(JSON.stringify(results))
        return callback (null, results)
      }
    })
  },
  new_gondor: (data, callback) => {
    pool.query(`INSERT INTO gondor (name, note, link) VALUES (?, ?, ?)`,
    [data.name, data.note, data.link],
    (error, results) => {
      if (error) {
        return callback(error)
      } else {
        results=JSON.parse(JSON.stringify(results))
        return callback(null, results)
      }
    })
  }
}