var gulp = require('gulp');
var sass = require('gulp-sass');
var jsoncombine = require('gulp-jsoncombine');

var paths = {
  files: ['images/**/*', 'js/**/*'],
  sass: 'sass/main.scss',
  manifest: 'manifest.json',
  ffmanifest: 'firefox-manifest.json',
  dest: {
    chrome: 'dist/chrome',
    firefox: 'dist/firefox'
  }
};

var ffmanifest = {
  "applications": {
    "gecko": {
      "id": "twitter-night-mode@mozilla.org"
    }
  }
}

function copyFiles() {
  return gulp.src(paths.files, { "base": "."})
          .pipe(gulp.dest(paths.dest.chrome))
          .pipe(gulp.dest(paths.dest.firefox));
}

function sassTask() {
  return gulp.src(paths.sass)
          .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
          .pipe(gulp.dest(paths.dest.chrome + '/css'))
          .pipe(gulp.dest(paths.dest.firefox + '/css'));
}

function firefoxManifest(data, meta) {
  data.manifest.applications = ffmanifest.applications;
  return new Buffer(JSON.stringify(data.manifest));
}

function copyManifest() {
  return gulp.src(paths.manifest)
          .pipe(gulp.dest(paths.dest.chrome))
          .pipe(jsoncombine('manifest.json', firefoxManifest))
          .pipe(gulp.dest(paths.dest.firefox));
}

gulp.task('copy', copyFiles);

gulp.task('sass', sassTask);

gulp.task('manifest', copyManifest);

gulp.task('default', ['copy', 'sass', 'manifest']);