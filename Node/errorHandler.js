module.exports = (res, error) => {
    try {
        return res.send({
            status: 200,
            error: error
        });
    } catch(error) {
        return res.send({
            status: 400,
            message: error,
            data: {}
        })
    }
}