const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')
const CracoLessPlugin = require('craco-less')
const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')

module.exports = {
  webpack: {
    plugins: [new AntdDayjsWebpackPlugin()],
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#f6a61e',
              '@font-size-base': '12px',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  style: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
}
