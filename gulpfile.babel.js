// Modo Desarrollo
const devMode = false

// Common
// import fs from 'fs'
import child from 'child_process'
import gulp from 'gulp'
// import concat from 'gulp-concat'

// HTML
import pug from 'gulp-pug'

// CSS
import postcss from 'gulp-postcss'
import comments from 'postcss-discard-comments'
import cssnano from 'cssnano'
import autoprefixer from 'autoprefixer'
import purgecss from 'gulp-purgecss'
const critical = require('critical')

// JavaScript
import babel from 'gulp-babel'
import terser from 'gulp-terser'

// IMG
import imagemin from 'gulp-imagemin'

// Fonts
import googleWebFonts from 'gulp-google-webfonts'
import fontgen from 'gulp-fontgen'

// SHELL
import run from 'gulp-run-command'

// jekyll install from root directory
// gulp.task('jekyll', child.exec('gem install bundler;bundle install'))

// jekyll local development server start
// gulp.task('server', child.exec('bundle exec jekyll serve --watch --config _config.yml,_config_dev.yml'))

// jekyll local production server start
// gulp.task('server-production', child.exec('JEKYLL_ENV=production bundle exec jekyll serve --watch'))

gulp.task('html', () => {
  return gulp
    .src('_pug/*.pug')
    .pipe(pug({ pretty: devMode }))
    .pipe(gulp.dest('_layouts'))
})

gulp.task('js', () => {
  return gulp
    .src('_site/_assets/js/smooth-scroll.js')
    .pipe(babel({minified: true, comments: false}))
    .pipe(terser())
    .pipe(gulp.dest('assets/js'))
})

gulp.task('css', () => {
  return gulp
    .src('_site/_assets/css/styles.css')
    .pipe(
      purgecss({
        content: [
          '_site/**/*.html',
          '_site/assets/js/scripts.js',
        ],
        variables: true,
      })
    )
    .pipe(postcss([comments({ removeAll: true }), cssnano(), autoprefixer()]))
    .pipe(gulp.dest('assets/css'))
})

gulp.task('critical', (done) => {
  function criticalPathCss(htmlSrc, cssTarget){
    gulp
      .src('_site' + htmlSrc)
      .pipe(
        critical({
          base: '',
          // inline: true,
          // css: ['_assets/css/styles.css'],
          target: {
            css: '_includes/critical-path-css' + cssTarget,
            // uncritical: 'assets/css/uncritical' + cssTarget,
          },
          ignore: ['@font-face', '.bg-bott', ':root'],
        })
      )
  }
  criticalPathCss('index.html', 'critical-index.css')
  criticalPathCss('blog/index.html', 'critical-bloglist.css')
  criticalPathCss('drafts/instrucciones.html', 'critical-posts.css')
  done()
})

gulp.task('img', () => {
  return gulp
    .src('_assets/img/**/*')
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 70, progressive: true }),
        imagemin.optipng({ optimizationLevel: 1 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(gulp.dest('assets/img'))
})

// create an optimal fa-used.json with all the fontawesome used icons
gulp.task('fa-min',
  // used fa icons
  //// fin all html files
  //// xargs: in each
  //// grep: get fa icons by regex
  //// sort
  //// unique
  //// perl: regex replace
  ////// remove fa- prefix
  ////// remove stack
  ////// join with pipeline
  ////// clean last
  run('usedFaIcons=`find _site -type f -iname "*.html" | xargs grep -Eoh "fa-(\w|-){3,}" | sort | uniq | perl -pe "s/^fa-//gm" | perl -pe "s/^stack.*\n//gm" | perl -pe "s/\n/|/gm" | perl -pe "s/\|$//gm"`'),
  // fa custom js file
  //// cat: concatenate fa js files with icons (brands and solid)
  //// grep: filter only used fa icons
  //// perl: add finish comma by regex replace
  //// sed: add "{" in first line
  //// sed: add "}" in last line
  //// save as used-icons.json
  run(`cat node_modules/@fortawesome/fontawesome-free/js/{brands,solid}.js | grep -Eo "^\s{4}\"($usedFaIcons)\".+" | perl -pe "s/\]$/\],/gm" | sed '1s/^/{\'$'\n/g' | sed '$s/,$/}/g' > _assets/js/_includes/fa-used.json`)
)

gulp.task('fonts', (done) => {
  gulp
    .src('_assets/fonts/*.{ttf,otf}')
    .pipe(fontgen({
      css_fontpath: '/assets/fonts',
      // css: '_assets/css/_sass/fonts',
      dest: 'assets/fonts',
    }))
  // child.exec('mv ./assets/fonts/*.css ./_assets/css/_sass/fonts/')
  done()
})

gulp.task('gfonts', () => {
  return gulp
    .src('fonts.list')
    .pipe(googleWebFonts({ fontDisplayType: 'swap' }))
    .pipe(gulp.dest('_assets/gfonts'))
})

gulp.task('rest', () => {
  return gulp
    .src([
      '_site/_assets/js/lunr.js',
      '_site/_assets/js/lunrsearchengine.js',
      '_site/_assets/js/smooth-scroll.js',
    ])
    .pipe(gulp.dest('assets/js'))
})

gulp.task('all', gulp.series('img', 'fonts', 'gfonts', 'rest', 'html', 'fa-min', 'js', 'critical', 'css'))

gulp.task('deploy', child.exec('git add .;git commit -m "Actualización: `date +\'%Y-%m-%d %H:%M:%S\'`";git push'))

gulp.task('up', gulp.series('html', 'fa-min', 'js', 'critical', 'css', 'deploy'))

gulp.task('default', () => {
  gulp.watch('_pug/*.pug', gulp.series('html'))
})
