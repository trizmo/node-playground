module.exports = app => {

    // Our model controllers (rather than routes)
    const data = require("./data")

    app.use('/data', data);
}