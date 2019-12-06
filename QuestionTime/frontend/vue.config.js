
// module.exports = {
//   devServer: {
//     disableHostCheck: true
//   }
// }

const BundleTracker = require("webpack-bundle-tracker");

module.exports = {
    //     This is an optional file but needed when serving Vue 
    //     behind a proxy, we need to disable host checks.
    devServer: {
        disableHostCheck: true
    },       
    // on Windows you might want to set publicPath: "http://127.0.0.1:8080/" 
    publicPath: "https://8080-cfd44999-e568-4d51-9c11-18b06a6fd5c0.ws-ap01.gitpod.io/", 
    outputDir: './dist/',


    chainWebpack: config => {

        config
            .plugin('BundleTracker')
            .use(BundleTracker, [{filename: './webpack-stats.json'}])

        config.output
            .filename('bundle.js')

        config.optimization
        	.splitChunks(false)

        config.resolve.alias
            .set('__STATIC__', 'static')

        config.devServer
            // the first 3 lines of the following code have been added to the configuration
            .public('http://127.0.0.1:8080')    
            .host('127.0.0.1')    
            .port(8080)
            .hotOnly(true)
            .watchOptions({poll: 1000})
            .https(false)
            .disableHostCheck(true)
            .headers({"Access-Control-Allow-Origin": ["\*"]})

    },


    // uncomment before executing 'npm run build' 
    // css: {
    //     extract: {
    //       filename: 'bundle.css',
    //       chunkFilename: 'bundle.css',
    //     },
    // }

};



