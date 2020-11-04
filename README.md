# ayelenbott.com

[![Ayelén Bott(/assets/img/logo.svg)]](https://ayelenbott.com/)

## Jekyll

### Install

Jekyll install from root directory

```bash
gem install bundler
bundle install
```

### Server

Jekyll server start

```bash
# local (development)
bundle exec jekyll serve --watch --config _config.yml,_config_dev.yml

# production
JEKYLL_ENV=production bundle exec jekyll serve --watch
```

## Pug

Pug precompile watcher

```
pug --out _layouts/ _pug/*.pug --watch
```

## Assets

Optimice assets

### CLI

Optimice assets with CLI:

- JS: minify
- CSS: purge

```bash
# minify js files
terser _site/_assets/js/scripts.js --comments false --output assets/js/scripts.js
terser _site/_assets/js/smooth-scroll.js --comments false --output assets/js/smooth-scroll.js
terser _site/_assets/js/lunr.js --comments false --output assets/js/lunr.js
# terser _site/_assets/js/lunrsearchengine.js --comments false --output assets/js/lunrsearchengine.js

# purge css
purgecss --css _site/_assets/css/styles.css --content _site/**/*.html,_site/assets/js/*.js --output assets/css/

# remove css comments
perl -pi -e "s[/\*.*\*/][]gi" assets/css/styles.css
```

### Gulp

Optimice assets with gulp (in parent directory):

- JS
  - babel
  - minify
- CSS
  - purge
  - comments
  - cssnano (minify)
  - autoprefixer
  - critical
- IMG
  - compress

```bash
# gulp parent directory
cd ../
## minify js files
cd ../;gulp js_ayelenbott.com;cd ayelenbott.com
## critical css
cd ../;gulp critical_ayelenbott.com;cd ayelenbott.com
## minify css files
cd ../;gulp css_ayelenbott.com;cd ayelenbott.com
## compress img
cd ../;gulp img_ayelenbott.com;cd ayelenbott.com
## compress fonts
cd ../;gulp fonts2_ayelenbott.com;cd ayelenbott.com
## return to proyect directory
cd ayelenbott.com
```

## Deploy

Deploy with date now

```bash
# deploy with date now
git add .;git commit -m "Actualización: `date +'%Y-%m-%d %H:%M:%S'`";git push
```

## FALTA

- windows ayelen
  - font din
  - no se ven btn llamar, facebook e instagram