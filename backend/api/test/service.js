module.exports = {
  test: (id, callback) => {
    return callback(null, {
      id,
      context: "example 1 - GOOD MORNING!"
    })

  }
}