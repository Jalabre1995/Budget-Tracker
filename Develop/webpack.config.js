const config = {
    entry: {
        app: "./src/app/js"
    },
    output: {
        path: _dirname + "/public",
        filename: "[name].bundle.js"
    },
    mode: "production",
};

module.exports = config;

