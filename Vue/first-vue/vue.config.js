const HOST = process.env.HOST;
module.exports = {
  publicPath: "./",
  productionSourceMap: false,
  devServer: {
    host: HOST || "0.0.0.0",
    open: true,
    historyApiFallback: true,
    allowedHosts: "all",
  },
};