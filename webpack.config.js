module.exports = {
    entry: "./js/app.js",
    output: {
        path: __dirname + "/public/",
        filename: "bundle.js",
    },
    //loaders...
    module : {
        loaders : [
            {test: /\.js$/, loader: 'babel-loader', query: {presets: ['react', 'es2015']} }
        ]
    }
}