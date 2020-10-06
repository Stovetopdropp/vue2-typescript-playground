// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = {
    lintOnSave: false,
    configureWebpack: {
        resolve: {
            alias: {
                "@config": path.resolve(__dirname, "config"),
                "@images": path.resolve(__dirname, "src/images"),
                "@modules": path.resolve(__dirname, "src/modules"),
                "@routes": path.resolve(__dirname, "src/routes"),
                "@server": path.resolve(__dirname, "src/server"),
                "@scss": path.resolve(__dirname, "src/scss"),
                "@static": path.resolve(__dirname, "static"),
                "@tests": path.resolve(__dirname, "tests")
            }
        }
    }
};
