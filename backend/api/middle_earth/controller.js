const { get_gondor} = require('./service')


module.exports = {
  generic: (req,res) => {
    res.status(201).json({
      success: 1,
      message: `Welcome to Middle Earth! Please visit each region`
    })
  },
  get_gondor: (req, res) => {
    get_gondor( (error, results) => {
      if (error) {
        res.status(500).json({
          success: 0,
          message: 'DATABASE ERROR',
          error
        })
      } else {
        res.status(201).json({
          success: 1,
          message: 'HERE THE DATA',
          data: results
        })
      }
    })
  }
}