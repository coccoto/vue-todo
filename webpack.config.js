const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = () => {

    return {
        entry: {
            index: path.resolve(__dirname, 'src', 'index.js')
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'index.js'
        },
        devtool: 'source-map',
        resolve: {
            extensions: ['*', '.js'],
            modules: [
                path.resolve(__dirname, 'node_modules')
            ],
            alias: {
                'vue': 'vue/dist/vue.esm.js',
                '@': path.resolve(__dirname, 'src')
            }
        },
        devServer: {
            open: true,
            contentBase: path.resolve(__dirname, 'dist'),
            watchContentBase: true,
            historyApiFallback: true,
        },
        module: {
            rules: rules
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'src', 'index.html')
            }),
            new VueLoaderPlugin()
        ],
    }
}

const rules = [
    {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
    },{
        test: /\.(vue)$/,
        loader: "vue-loader"
    },{
        test: /\.(sass)$/,
        use: [
            'vue-style-loader', {
                loader: 'css-loader',
                options: {modules: true}
            }, 'sass-loader', {
                loader: 'sass-resources-loader',
                options: {
                    resources: [
                        (path.resolve(__dirname, 'src', 'app', 'styles', 'resources', '*'))
                    ]
                }
            }
        ]
    },{
        test: /\.(html)$/,
        loader: 'html-loader'
    }
]