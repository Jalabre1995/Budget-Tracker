const WebpackPwaManifest = require("webpack-pwa-manifest")
const path = require( "path");
const config = {
    entry: {
        app: "./src/index/js"
    },
    output: {
        path:__dirname + "/public/dist",
        filename: "[name].bundle.js"
    },
    mode: "production",
    plugins: [
        new WebpackPwaManifest({
            filename: "Budget app",
            short_name: "Budget",
            description: "An application to track your transaction history from your budget.",
            background_color: "#01579b",
            theme_color: "#ffffff",
            start_url: "/",
            display: "standalone",
            icons: [{
                src: path.resolve(__dirname, "public/icons/icon-192x192.png"),
                size: [192,515],
            }]
        })
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset=env"]
                    }
                }
            }
        ]
    }
    
};

module.exports = config;


