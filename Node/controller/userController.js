// const createUser = (req, res) => {
//     res.send("Controller page");
// }

// const getUser = (req, res) => {
//     res.send("Controller page");
// }

// const updateUser = (req, res) => {
//     res.send("Controller page");
// }

// module.exports = {createUser, getUser,  updateUser};


module.exports = {
    createUser : (req, res) => {
        res.send("Login page at controller page");
        console.log(req.body);
    },
    getUser: (req, res) => {
        res.send("Logout page at controller page");
    },
    updateUser: (req, res) => {
        res.send("updateUser page at controller page");
    }
};