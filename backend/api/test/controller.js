const { test } = require('./service');

module.exports = {
  test: (req, res) => {
    id = req.body || 0
    test(id, (error, results) => {
      if (error) {
        res.status(500).json({
          success: 0,
          message: "ERROR!"
        })
      } else {
        res.status(201).json({
          success: 1,
          message: results
        })
      }
    })
  }
}