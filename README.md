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

```bash
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



cd Downloads/DIR/

_site/**/*.html
# 
'<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg">' '</svg>'


# inline
perl -pi -e "s/\n/\ /gm" *.svg

perl -pi -e "s/(<symbol|<\/svg>)/\$1/gm" *.svg

(<symbol|<\/svg>)

# 
echo '<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg">' > fa.txt
cat *.svg >> fa.txt
echo '</svg>' >> fa.txt


# Concatenate HTML files
cat *.html > allhtmlfiles.txt

cat brands.min.js solid.min.js fontawesome.min.js > fa-custom.min.js


# Concatenate HTML files
cat *.html > allhtmlfiles.txt
# inline
perl -pi -e "s/\n/\ /gm" allhtmlfiles.txt
# get fontawesome classes
perl -pi -e "s/.*?fa-([\w\-]{3,})/\$1\n/gm" allhtmlfiles.txt
# remove last line and stack and circle classes
perl -pi -e "s/^.*>|^stack.*\n|^circle\n//gm" allhtmlfiles.txt
# remove repeat classes
sort allhtmlfiles.txt | uniq > allfaicons.txt
# clean first line
perl -pi -e 's/^ \n//gm' allfaicons.txt
# join whith pipeline
perl -pi -e "s/\n/\|/gm" allfaicons.txt
# clean last character
perl -pi -e 's/\|$//gm' allfaicons.txt

"(?!PATERN).+?": \[.+?"\],?
"(?!book|chalkboard-teacher|chart-line|chart-pie|check|check-circle|clock|cookie-bite|copyright|crosshairs|desktop|envelope|exchange-alt|facebook-f|gift|hands-helping|heart|instagram|lock|paint-brush|paper-plane|pen|phone|quote-left|quote-right|shield-alt|square-root-alt|times-circle|trophy|user|wallet|whatsapp).+?": \[.+?"\],?







```

## Deploy

Deploy with date now

```bash
# deploy with date now
git add .;git commit -m "Actualización: `date +'%Y-%m-%d %H:%M:%S'`";git push
```

## FALTA

- smoth scroll safary en enlaces con has
- estilos if varios autores
- limpiar memoirs
- windows ayelen
  - font din
  - no se ven btn llamar, facebook e instagram