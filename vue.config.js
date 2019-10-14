
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack');

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ?'/'
        :'',
    devServer: {
        proxy:  {
            '/ey-res/': {
                pathRewrite: {
                    '^/ey-res/api': '/ext-res/api', // rewrite path
                },
                target: 'http://80.241.242.124/',
                changeOrigin: true
            },
            '/ey-res/api': {
                pathRewrite: {
                    '^/ey-res/api': '/api', // rewrite path
                },
                target: 'http://localhost:3502/',
                changeOrigin: true
            },
        }
    },
    css: {
        loaderOptions: {
            sass: {
                data: `@import "@/assets/css/variables.scss";`
            }
        }
    },
    /*configureWebpack: {
        plugins: [new BundleAnalyzerPlugin(), new webpack.IgnorePlugin({
            resourceRegExp: /^\.\/locale$/,
            contextRegExp: /moment$/
        })]
    }*/
}
