# Reemplazar imágenes

Todas las imágenes del sitio se sirven ahora mismo desde los enlaces temporales
que genera Figma al leer tu archivo. Esos enlaces caducan a los pocos días.

Para dejarlas fijas:

1. Abre el archivo de Figma, selecciona la capa/imagen y usa **Export** (PNG).
2. Guarda el archivo exportado en esta carpeta (`public/images/`) usando el
   nombre sugerido en `src/lib/assets.ts` (aparece como comentario junto a
   cada URL, por ejemplo `home-mockup-laptop.png`).
3. En `src/lib/assets.ts`, cambia esa línea de la URL de figma.com por la ruta
   local, por ejemplo:

   ```ts
   homeMockupLaptop: "/images/home-mockup-laptop.png",
   ```

No hace falta tocar ningún otro archivo — todas las páginas importan las
imágenes desde `assets.ts`.

## Mockups pendientes

Los mockups de laptop y teléfono en la página de inicio (`homeMockupLaptop`,
`homeMockupPhone`) son justo los que mencionaste que aún no has terminado en
Figma. En cuanto los tengas listos, expórtalos y reemplázalos siguiendo los
pasos de arriba.
