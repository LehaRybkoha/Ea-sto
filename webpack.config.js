const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: {
        main: "./src/js/index.js",
        jquerySteps: "./src/js/import/jquerySteps.js"
    },
    
    output: {
        filename: "[name].js"
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: require.resolve("babel-loader"),
                    query: {
                        presets: [
                            ["@babel/preset-env", { modules: false }]
                        ]
                    }
                }
            }
        ]
    },

    resolve: {
        alias: {
            "%modules%": path.resolve(__dirname, "src/blocks/modules")
        }
    }
};