var gulp = require('gulp');
sass = require("gulp-sass"),
postcss = require("gulp-postcss");
autoprefixer = require("autoprefixer");
var sourcemaps = require('gulp-sourcemaps'); 
var browserSync = require('browser-sync').create(); 
var cssbeautify = require('gulp-cssbeautify');
var beautify = require('gulp-beautify');


/*******************  LTR   ******************/


//_______ task for scss folder to css main style 
gulp.task('watch', function() {
	console.log('Command executed successfully compiling scss in assets.');
	 return gulp.src('APPLIST/assets/scss/**/*.scss') 
		.pipe(sourcemaps.init())                       
		.pipe(sass())
		.pipe(sourcemaps.write(''))   
		.pipe(gulp.dest('APPLIST/assets/css'))
		.pipe(browserSync.reload({
		  stream: true
	}))
})


//_______task for admin-custom
gulp.task('admin', function(){
   return gulp.src('APPLIST/assets/css/admin-custom.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('APPLIST/assets/css'));
		
})


//_______task for sidemenu
gulp.task('menu', function(){
   return gulp.src('APPLIST/assets/css/sidemenu.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('APPLIST/assets/css'));
		
})


/*******************  RTL   ******************/


//_______ task for scss folder to css main style 
gulp.task('watch-rtl', function() {
	console.log('Command executed successfully compiling scss in assets.');
	 return gulp.src('APPLIST/assets/scss-rtl/**/*.scss') 
		.pipe(sourcemaps.init())                       
		.pipe(sass())
		.pipe(sourcemaps.write(''))   
		.pipe(gulp.dest('APPLIST/assets/css-rtl'))
		.pipe(browserSync.reload({
		  stream: true
	}))
})


//_______task for admin-custom
gulp.task('admin-rtl', function(){
   return gulp.src('APPLIST/assets/css-rtl/admin-custom.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('APPLIST/assets/css-rtl'));
		
})


//_______task for sidemenu
gulp.task('menu-rtl', function(){
   return gulp.src('APPLIST/assets/css-rtl/sidemenu.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('APPLIST/assets/css-rtl'));
		
})



/*******************  Color-skins For LTR   ******************/

 
 //_______task for Color-skins
gulp.task('color', function(){
	return gulp.src('APPLIST/assets/webslidemenu/color-skins/**/*.scss')
		 .pipe(sourcemaps.init())
		 .pipe(sass())
		 .pipe(sourcemaps.write('.'))
		 .pipe(gulp.dest('APPLIST/assets/webslidemenu/color-skins'));
		 
 });

/*******************  Color-skins For RTL   ******************/
 
 //_______task for Color-skins
gulp.task('color-rtl', function(){
	return gulp.src('APPLIST/assets/webslidemenu/color-skins-rtl/**/*.scss')
		 .pipe(sourcemaps.init())
		 .pipe(sass())
		 .pipe(sourcemaps.write('.'))
		 .pipe(gulp.dest('APPLIST/assets/webslidemenu/color-skins-rtl'));
		 
 });


/*******************  Beautify For LTR   ******************/

//_______ task for beautifying css
gulp.task('beautify', function() {
    return gulp.src('APPLIST/assets/css/*.css')
        .pipe(beautify.css({ indent_size: 4 }))
        .pipe(gulp.dest('APPLIST/assets/css'));
});


//_______ task for beautifying colorskins
gulp.task('beautifycolor', function() {
    return gulp.src('APPLIST/assets/webslidemenu/color-skins/*.css')
        .pipe(beautify.css({ indent_size: 4 }))
        .pipe(gulp.dest('APPLIST/assets/webslidemenu/color-skins'));
});

/*******************  Beautify For RTL ******************/


//_______ task for beautifying css
gulp.task('beautify-rtl', function() {
    return gulp.src('APPLIST/assets/css/*.css')
        .pipe(beautify.css({ indent_size: 4 }))
        .pipe(gulp.dest('APPLIST/assets/css'));
});


//_______ task for beautifying colorskins
gulp.task('beautifycolor-rtl', function() {
    return gulp.src('APPLIST/assets/webslidemenu/color-skins-rtl/*.css')
        .pipe(beautify.css({ indent_size: 4 }))
        .pipe(gulp.dest('APPLIST/assets/webslidemenu/color-skins-rtl'));
});