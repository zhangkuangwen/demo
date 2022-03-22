const CracoLessPlugin = require('craco-less');
const px2rem = require('postcss-px2rem')
const postcss = px2rem({
    // 基准大小 baseSize，需要和rem.js中相同
    remUnit: 16
})
module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        module:true,
                        javascriptEnabled: true,
                    },
                },
                // cssLoaderOptions: {
                //     modules: { localIdentName: "[name]_[local]_[hash:base64:5]" },
                // },
            },
        },
    ],
    // devServer: {//反向代理
    //     proxy: {
    //         '/api': {//http://192.168.61.50:8006/  http://47.95.123.177
    //             ws: false, // proxy websockets
    //             target: 'http://192.168.61.50:8006/',//测试
    //             changeOrigin: true,
    //             pathRewrite: {
    //                 '^/api': ''   //需要rewrite重写的,
    //             },
    //         },
    //     }
    // },
    // style: {
    //     postcss: {
    //         loaderOptions: {
    //             plugins: [
    //                 postcss
    //             ]
    //         }
    //     }
    // },
    // loaders:[
    //     {
    //     test: /\.less$/,
    //     loader: "style-loader!less-loader?modules"
    //   },
    // ]
};