exports.index = (req, res) => {
    console.log(res.data)
}

// .then(data => {
//     res.status(200).json({
//         message: "GET Request successful",
//         data
//     })
// }).catch(err => {
//     res.status(400).json({
//         message: "ERROR",
//         err
//     })
// })