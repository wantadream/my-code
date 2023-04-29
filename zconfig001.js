const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

// const { defineConfig } = require("@vue/cli-service");

// module.exports = defineConfig({
//   chainWebpack: (config) => {
//     config.resolve.alias
//       .set("@", resolve("src"))
//       .set("assets", resolve("src/assets"))
//       .set("components", resolve("src/components"));
//   },
//   css: {
//     loaderOptions: {
//       sass: {
//         additionalData: `
//           @import "@/scss/_variables.scss";
//           @import "@/scss/_mixins.scss";
//         `,
//       },
//     },
//   },
//   configureWebpack: {
//     module: {
//       rules: [
//         {
//           test: /\.scss$/,
//           use: ["vue-style-loader", "css-loader", "sass-loader"],
//         },
//       ],
//     },
//   },
// });

module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: ["vue-style-loader", "css-loader", "sass-loader"],
        },
      ],
    },
    resolve: {
      extensions: [".js", ".vue", ".json"],
      alias: {
        "@": path.resolve(__dirname, "src"),
        assets: path.resolve(__dirname, "src/assets"),
        components: path.resolve(__dirname, "src/components"),
      },
    },

    css: {
      loaderOptions: {
        sass: {
          additionalData: `
          @import "@/scss/_variables.scss";
          @import "@/scss/_mixins.scss";
        `,
        },
      },
    },
  },
  // configureWebpack: (config) => {
  //   config.resolve.alias
  //     .set("@", resolve("src"))
  //     .set("assets", resolve("src/assets"))
  //     .set("components", resolve("src/components"));
  // },

  // configureWebpack: {
  //   module: {
  //     rules: [
  //       {
  //         test: /\.scss$/,
  //         use: ["vue-style-loader", "css-loader", "sass-loader"],
  //       },
  //     ],
  //   },
  // },
};
