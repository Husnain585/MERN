const { response } = require("express");

module.exports = {
    create: (req, res) => {
        try {
            return res.send({
                status: "working",
                code: 200,
                response: req.query,
            });
        } catch (error) {
            return res.send({
                status: "working",
                code: 200,
                response: req.query,
                error:error,
            });
        }
    },
    update: (req, res) => {
        try {
            return res.send({
                status: "working",
                code: 200,
                response: req.query,
            });
        } catch (error) {
            return res.send({
                status: "working",
                code: 200,
                response: req.query,
                error:error,
            });
        }
    },
    get: (req, res) => {
        try {
            return res.send({
                status: "working",
                code: 200,
                response: req.query,
            });
        } catch (error) {
            return res.send({
                status: "working",
                code: 200,
                response: req.query,
                error:error,
            });
        }
    },
    getDelete: (req, res) => {
        try {
            return res.send({
                status: "working",
                code: 200,
                response: req.query,
            });
        } catch (error) {
            return res.send({
                status: "working",
                code: 200,
                response: req.query,
                error:error,
            });
        }
    },
};