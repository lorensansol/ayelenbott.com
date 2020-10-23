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

- search en firefox y safary
- certificate en btn whatsapp
- target blank en enlaces externos
- aye
  - badgets?
  - menu burgrer con certificate
- windows ayelen
  - font din
  - contacto
    - background
    - no se ven btn llamar, facebook e instagram
- movil
  - centrado vertical header
  - color
    - FA
    - h2
      - sobre mi
      - que
      - blog
    - h3 servicios
    - lead contacto
    - hastags
    - onclick footer
- critical path css
- author description
- educando por formando?
- seleccionar imágenes de capacitación, copiar en _assets y borrar no seleccionadas
- featured image


- Quitar acentos en tag links de toc
- CLI / Gulp padre
  - critical
  - img
  - babel
  - Eliminar comentarios #! de css (purgecss remove special comments)
  - Eliminar comentarios mapping

- Marcado de datos estructurados
