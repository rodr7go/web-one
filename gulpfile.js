var babelify   = require('babelify'),
	browserify = require('browserify'),
	buffer     = require('vinyl-buffer'),
	// connect    = require('gulp-connect'),
	gulp       = require('gulp'),
	server 		= require('gulp-server-livereload'),
	pug        = require('gulp-pug'),
	nib        = require('nib'),
	source     = require('vinyl-source-stream'),
	sass       = require('gulp-sass'),
	uglify     = require('gulp-uglify');


	gulp.task('browserify', function () {
	return browserify({
		entries: 'lib/js/scripts.js'
	})
	.transform(babelify, {
		presets: ['es2015']
	})
	.bundle()
	.pipe(source('scripts.min.js'))
	.pipe(buffer())
	.pipe(uglify())
	.pipe(gulp.dest('public/js'))
	// .pipe(refresh());
});

gulp.task('pug', function() {
	return gulp.src('lib/pug/*.pug')
		.pipe(pug())
		.pipe(gulp.dest('./public'))
		// .pipe(refresh());

	setTimeout(function () {
		del(['./public/layout.html']);
	}, 2000);
});

gulp.task('sass', function () {
	return gulp.src('lib/scss/styles.scss')
		.pipe(sass({
			outputStyle: 'compressed'
		}))
		.pipe(gulp.dest('./public/css'))
		// .pipe(refresh());
});

gulp.task('webserver', function() {
	gulp.src('public/')
		.pipe(server({
			livereload: true,
			// directoryListing: true,
			open: false,
			port: 8080
		}));
});

gulp.task('fonts', function() {
	return gulp.src('node_modules/font-awesome/fonts/*')
		.pipe(gulp.dest('public/fonts'))
});

gulp.task('watch', function () {
	gulp.watch('lib/js/**/*.js', ['browserify']);
	gulp.watch('lib/pug/**/*.pug', ['pug']);
	gulp.watch('lib/scss/**/*.scss', ['sass']);
});

gulp.task('default', ['browserify', 'pug', 'sass', 'fonts', 'webserver','watch']);