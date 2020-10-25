# ayelenbott.com

[![Ayelén Bott(/assets/img/logo.svg)]](https://ayelenbott.com/)

Instalar con terminal desde carpeta root:

```bash
gem install bundler
bundle install
```

Servidor para jekyll:

```bash
# local (development)
bundle exec jekyll serve --watch --config _config.yml,_config_dev.yml

# production
JEKYLL_ENV=production bundle exec jekyll serve --watch
```

Precompilar pug

```
pug --out _layouts/ _pug/*.pug --watch
```

Subir a producción previo minificar y purgar css + minificar js (no olvidar descomentar site.critical-path-css y comentar site.include en \_config.yml):

```bash
# minificar archivos js
terser _site/_assets/js/scripts.js --comments false --output assets/js/scripts.js
terser _site/_assets/js/smooth-scroll.js --comments false --output assets/js/smooth-scroll.js
terser _site/_assets/js/lunr.js --comments false --output assets/js/lunr.js
# terser _site/_assets/js/lunrsearchengine.js --comments false --output assets/js/lunrsearchengine.js

# purgar css
purgecss --css _site/_assets/css/styles.css --content _site/**/*.html,_site/assets/js/*.js --output assets/css/

# deploy con fecha actual
git add .;git commit -m "Actualización: `date +'%Y-%m-%d %H:%M:%S'`";git push
```

## FALTA

- windows ayelen
  - font din
  - no se ven btn llamar, facebook e instagram
- author description