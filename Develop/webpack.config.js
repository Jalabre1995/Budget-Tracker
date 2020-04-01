const config = {
    entry: {
        app: "./src/app/js"
    },
    output: {
        path: _dirname + "/public",
        filename: "[name].bundle.js"
    },
    mode: "developoment",
};

module.exports = config;

