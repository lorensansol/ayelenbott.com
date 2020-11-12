---
title: Instrucciones
categories: Instrucciones
image: /assets/img/servicios/blogging.svg
toc: true
published: true
last_modified_at: 2020-11-02
---

Hola!

Te dejo unas instrucciones para que puedas usar tu blog.

Ten paciencia, al principio te puede parecer complejo, pero ya verás con el tiempo que es súper fácil.

<!--more-->

## Hosting (github.com)

Te he enviado una invitación para colaborar en el proyecto (también llamado repositorio) de __GitHub__ al email que me indicaste. Puedes acceder aquí:

[Tu repositorio](https://github.com/lorensansol/{{ site.url | replace: 'https://', '' }}){: .btn.btn-primary target="_blank"}

### Sistema de carpetas

Al acceder, veras una lista de carpetas y archivos con nombres raros. De entrada, __sólo te tienes que fijar en 3 carpetas__ (puedes hacer clic para acceder directamente):

1. [`_posts`{: .bg-primary.text-light}](https://github.com/lorensansol/{{ site.url | replace: 'https://', '' }}/tree/main/_posts){: target="_blank"}
2. [`_drafts`{: .bg-primary.text-light}](https://github.com/lorensansol/{{ site.url | replace: 'https://', '' }}/tree/main/_drafts){: target="_blank"}
3. [`assets`{: .bg-primary.text-light}](https://github.com/lorensansol/{{ site.url | replace: 'https://', '' }}/tree/main/assets){: target="_blank"} (sin la barra baja del principio)
  - [`img`{: .bg-primary.text-light}](https://github.com/lorensansol/{{ site.url | replace: 'https://', '' }}/tree/main/assets/img){: target="_blank"} <- Dentro de assets, fíjate sólo en la carpeta con este nombre


### Sistema de archivos

- Dentro de la carpeta `_posts` es donde se encuentran los archivos equivalentes a los __posts__.
- Dentro de la carpeta `_drafts` es donde se encuentran los archivos equivalentes a los posts de tipo __borradores__.
- Dentro de `assets/img/` es donde se encuentran las __imágenes__ a las que quieras hacer referencia en cada post.


#### Imágenes

- Dentro de la carpeta `assets/img/` puedes __subir imágenes__ (`Add file > Uploads files`).
- __Antes de subir cualquier imagen__, ten en cuenta lo siguiente:
  - El __formato__ de la imagen.
    - Puede ser casi cualquiera, pero por lo general JPG será el más usual.
  - El __nombre del archivo__ de la imagen.
    - Tiene que ser descriptivo, en minúsculas y sin espacios (usa guiones medios en su lugar) ni caracteres extraños (ni siquiera eñes ni barras bajas).
      - _Ejemplo_: `dia-de-paseo-por-el-nuevo-barrio.jpg`
    - Será el que utilices para indicar en la redacción de posts que esa es la que quieres utilizar, y tendrá que indicarse con la ruta completa (esto lo entenderás más adelante).
      - _Ejemplo_: `/assets/img/dia-de-paseo-por-el-nuevo-barrio.jpg`
  - __Resolución__ de la imagen.
    - El diseño del blog nunca mostrará más de 700 pixeles de ancho, por lo que no tiene sentido imágenes con mayor ancho que ese. Puedes usar photoshop o cualquier programa de edición de imagen (online o no) para usar ese ancho máximo. _Ejemplo_: [pixlr.com](https://pixlr.com/es/){: target="_blank"}
  - __Peso__ de la imagen.
    - Es recomendable comprimir la imagen para que no pese tantos kilobites (por no saturar el hosting y por que no tarde en cargar demasiado el sitio web para los usuarios).
    - Te recomendaría que, teniendo ya tus imágenes con ese ancho máximo, usaras esta herramienta online donde arrastras/sueltas los archivos con las opciones por defecto y al terminar le das a downloads, el resultado son las mismas imágenes sin que se note cambio en la calidad pero pesando menos (peso máximo de entrada de 1 Mb): [kraken.io](https://kraken.io/web-interface){: target="_blank"}


#### Posts

- Dentro de la carpeta `_posts` puedes:
  - __Subir archivos__ que ya tengas preparados (`Add file > Uploads files`).
  - __Crear un nuevo archivo__ (`Add file > Create new file`).
    - Directamente se abriría la interfaz de edición.
  - __Abrir un archivo existente__ (`clic en el nombre del archivo deseado`).
    - Puedes editar un archivo existente (`clic en el icono de lápiz`).
- Cuando estás __editando__ un archivo tienes varias opciones:
  - Sección __nombre__ del archivo para indicarlo/modificarlo (justo a la derecha de `_posts`).
    - Es muy importante que tenga este formato `año-mes-día-nombre.md`
      - El año con 4 dígitos
      - El més y el día con 2 dígitos
      - El nombre:
        - Tiene que ser descriptivo.
        - En minúsculas y sin espacios (usa guiones medios en su lugar) ni caracteres extraños (ni siquiera eñes ni barras bajas).
        - Sin stop words ni palabras irrelevantes (de, por, el, la, los...)
        - Lo más corto posible.
        - Debe terminar en `.md`
    - _Ejemplo_: de un post titulado `Día de paseo por el nuevo barrio` con fecha `6 de octubre de 2020`, el archivo podría tener este nombre: `2020-10-06-paseo-nuevo-barrio.md`.
    - La URL o enlace para acceder al contenido del post sería: `{{ site.url }}{{ site.baseurl }}/paseo-nuevo-barrio`.
  - Sección de __edición__ del archivo.
    - Cabecera (en formato `YAML`).
      - Todos los archivos deben de empezar por una cabecera delimitada por 2 líneas con 3 guiones cada una, entre las cuales se indican detalles y características que tendrá el post, de entre las cuales están las siguientes:
        - `title`: Título del post. _Ejemplo_: `title: Día de paseo por el nuevo barrio`.
        - `categories`: Categorías del post. _Ejemplos_:
          - Una sola: `categories: General`.
          - Varias: `categories: [General, Cultura, Molando]`.
          - _Nota_: Los __artículos relacionados__ que aparecen se tomarán de la misma categoría que el post visualizado. Por lo que recomiendo añadir siempre al menos una categoría, aunque se llame "General".
        - `tags`: Etiquetas. Se usan exactamente igual que las categorías.
        - `image`: Ruta de la imagen principal que aparecerá bajo el título del post y en la lista de posts (importante indicar toda la ruta, no solamente el nombre del archivo). _Ejemplo_: `image: /assets/img/dia-de-paseo-por-el-nuevo-barrio.jpg`.
        - `toc`: Índice (Table Of Contents). Se trata de un índice generado automáticamente con enlaces hacia los encabezados usados en el contenido (puedes ver el ejemplo en este post que estás leyendo). Si quieres usarlo, indica `toc: true`, si no, `toc: false`.
        - `published`: Esto indica si el post aparecerá o no. Si quieres que no aparezca, indica `published: false`, de lo contrario, `published: true`.
        - `last_modified_at`: Fecha de última actualización del post. _Ejemplo_: `last_modified_at: 2020-09-07` (no indicar nada o `false` si el artículo es nuevo o no hay modificaciones posteriores).
        - _Nota_: Si lo que hay detrás de los 2 puntos tiene comillas de cualquier tipo en alguna parte, habría que envolverlo todo de unas comillas de tipo diferente. _Ejemplo_: `title: Como me mola "esto" que hacemos` <- probablemente de error, por lo que habría que dejarlo así -> `title: 'Como me mola "esto" que hacemos'`.
    - Contenido (en formato `Markdown`).
      - Tutorial que explica de qué va esto y cómo escribir con este formato: [markdown.es](https://markdown.es/){: target="_blank"}.
        - _Nota_: el encabezado principal (el que empieza sólo por un numeral `#`) no hay que indicarlo, ya que mediante programación se obtiene de la cabecera `title`.
      - Editor online de este tipo de formato (por si quieres usar algo más visual, puedes copiar y pegar desde / hacia los archivos / este editor): [stackedit.io](https://stackedit.io/app){: target="_blank"}.
      - Puedes usar emojis: 😍 💪😁👍
    - _Ejemplos_: Puedes ver el contenido del post [Presentación](https://github.com/lorensansol/{{ site.url | replace: 'https://', '' }}/blob/main/_posts/2020-10-06-presentacion.md){: target="_blank"} y este mismo post/borrador llamado [Instrucciones](https://github.com/lorensansol/{{ site.url | replace: 'https://', '' }}/blob/main/_drafts/2020-10-06-instrucciones.md){: target="_blank"} dándole a editar para que te hagas una idea del formato.
  - Sección de __previsualización__ del post.
    - Pues previsualizar cómo quedará el post (en cuanto al formato, pero en el blog se verá con los estilos, encabezado principal e imagen principal).
  - Sección para __guardar cambios__ en el archivo.
    - Básicamente puedes dejarlo todo a como está por defecto y darle a `Commit changes`.

##### Ejemplo de Archivo

- Nombre: `2020-10-06-paseo-nuevo-barrio.md`
- Contenido:
<pre class="code bg-secondary rounded p-3">
---
title: Día de paseo por el nuevo barrio
categories: [General, Cultura, Molando]
image: /assets/img/dia-de-paseo-por-el-nuevo-barrio.jpg
toc: false
published: true
last_modified_at: false
---
¡Holi! 💃

¡Hoy salí a pasear! Y mirad qué foto más cuqui hice:

![Yo sinedo yo](/assets/img/avatar.svg)
</pre>


#### Borradores (drafts)

Los borradores son exactamente __igual que los posts__, salvo que se colocan en la carpeta `_drafts` temporalmente con el __objetivo__ de poder __previsualizarlos__ en el propio blog; y una vez terminados, mover los archivos a la carpeta `_posts`.

Dichos borradores los podrás ver en este enlace (verás que hay algunos ejemplos, como este mismo post de instrucciones que debes de dejar aquí como referencia):

[Borradores]({{ site.baseurl }}/drafts/){: .btn.btn-primary target="_blank"}

No obstante, si no tienes interés en previsualizar cómo quedará finalmente (quizás te sirva con previsualizar directamente desde github), como alternativa de usar esta carpeta, puedes escribir los posts en la carpeta `_posts` directamente y simplemente colocas la opción `published: false` mientras no lo quieras mostrar.

## Sistema de comentarios (disqus.com)

Te he implementado un sistema de comentarios mediante __Disqus__, lugar donde te debes registrar y facilitarme tu nombre de usuario para que te añada y puedas moderar y ver estadísticas desde aquí:

[Administrar comentarios](https://{{ site.disqus }}.disqus.com/admin/){: .btn.btn-primary target="_blank"}

## Analítica (analytics.google.com)

Te he implementado un sistema de Analítica mediante __Google Analitycs__ y te he dado permisos para poder visualizarla con el email que me indicaste desde aquí:

[Analitycs](https://analytics.google.com/){: .btn.btn-primary target="_blank"}

Eso es todo, cualquier duda que tengas me comentas.

¡Un saludo! 🤗

![Alumna](/assets/img/servicios/reading.svg)
