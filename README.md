# seacomoseo.com

```html
<sea>
  como
</seo>
````

[https://lorensansol.github.io/seacomoseo.com/](https://lorensansol.github.io/seacomoseo.com/)

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

Subir a producción previo minificar y purgar css + minificar js (no olvidar descomentar site.critical-path-css y comentar site.include en \_config.yml):

```bash
# purgar css
purgecss --css _site/_assets/css/styles.css --content _site/**/*.html,_site/assets/js/*.js --output assets/css/

# minificar archivos js
terser _site/_assets/js/scripts.js --comments false --output assets/js/scripts.js
terser _site/_assets/js/smooth-scroll.js --comments false --output assets/js/smooth-scroll.js
terser _site/_assets/js/lunr.js --comments false --output assets/js/lunr.js
# terser _site/_assets/js/lunrsearchengine.js --comments false --output assets/js/lunrsearchengine.js

# deploy con fecha actual
git add .;git commit -m "Actualización: `date +'%Y-%m-%d %H:%M:%S'`";git push
```

Experimental

```bash
# precompilar servicios.pug
pug --out _layouts/ _pug/*.pug --watch
```

## FALTA

- disqus
- analytics
- search console
- critical path css
- author description
- horario
- seleccionar imágenes de capacitación, copiar en _assets y borrar no seleccionadas
- featured image

- Quitar acentos en tag links de toc
- Comprobar Carga diferida de css
  - critical diferente según pagetype
  - Comprobar smooth scroll safari (si con critical no funciona bien, usar js)

- CLI / Gulp padre
  - critical
  - img
  - babel
  - Eliminar comentarios #! de css (purgecss remove special comments)
  - Eliminar comentarios mapping

- Actualizar posts de rejilla y presentación y página sobre y ejemplo rejilla
- Borrar posts de ejemplo y borradores + assets
- Actualizar página de diseño
  - data-showup
  - Contenido general
  - Diseño
    - Proceso
    - Ventajas
    - Reseñas
    - Contacto
  - Brocha en footer
- Marcado de datos estructurados
