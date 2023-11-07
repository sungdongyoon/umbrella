const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware(`/api`, {
      target: "http://openapi.seoul.go.kr:8088",
      changeOrigin: true,
      pathRewrite: {
        '^/api': `/${process.env.BIKE_API_KEY}/json/tbCycleStationInfo/1/200/`,
      },
    })
  );
};