const { src } = require("gulp");
const mocha = require("gulp-mocha");

function test() {
  return src("tests/**/*.js", { read: false })
    .pipe(mocha({ reporter: "spec" }));
}

// register tasks for gulp 4
exports.test = test;
exports.default = test;
