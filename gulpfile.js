var   gulp = require("gulp"),
      browserify = require("browserify"),
      babelify = require('babelify'),
      source = require('vinyl-source-stream');


function createBundler(useWatchify) {
  return browserify({
    entries:      [ "index.js" ],
    transform:    [ [babelify.configure({presets: ["react"]})] ],
    cache: {},
    packageCache: {},
    fullPaths: true // for watchify
  });
}

gulp.task("build", function () {
  var bundler = createBundler(false);
    bundler
	    .bundle()
      .pipe(source('main.js'))
	    .pipe(gulp.dest('docs'));
});

gulp.task("default",["build", "html"],function(){
   console.log("Gulp completed...");
});

gulp.task("html", function () {
    return gulp.src(["index.html"])
        .pipe(gulp.dest("docs"))
});
