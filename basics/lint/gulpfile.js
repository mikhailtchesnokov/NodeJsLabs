const { src, series } = require("gulp");
const eslint = require("gulp-eslint-new");

function lint() {
  return src(["src/*.js"])
    .pipe(eslint())              // run eslint
    .pipe(eslint.format())       // output results to console
    .pipe(eslint.failAfterError()); // fail task if errors
}

exports.lint = lint;
exports.default = series(lint);
