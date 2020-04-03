const config = {
    entry: {
        app: "./src/app/js"
    },
    output: {
        path:__dirname + "/public/dist",
        filename: "bundle.js"
    },
    mode: "development",
};

module.exports = config;


