const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const ENTRY_FILE = 'index.jsx'
const BUNDLE_FILE = 'index.js'

const SOURCE = path.resolve(__dirname, 'src')
const OUTPUT = path.resolve(__dirname, 'dist')

module.exports = () => {

    return {
        entry: {
            index: path.resolve(SOURCE, ENTRY_FILE)
        },
        output: {
            path: path.resolve(OUTPUT),
            filename: BUNDLE_FILE
        },
        devtool: 'source-map',
        resolve: {
            extensions: ['*', '.js'],
            modules: [
                path.resolve(__dirname, 'node_modules')
            ],
            alias: {
                'vue': 'vue/dist/vue.esm.js',
                '@': path.resolve(SOURCE)
            }
        },
        devServer: {
            open: true,
            contentBase: path.resolve(OUTPUT),
            watchContentBase: true,
            historyApiFallback: true,
        },
        module: {
            rules: rules
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(SOURCE, 'index.html')
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
                        (path.resolve(SOURCE, 'app', 'styles', 'resources', '*'))
                    ]
                }
            }
        ]
    },{
        test: /\.(html)$/,
        loader: 'html-loader'
    }
]