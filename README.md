# Amigo Secreto

![Captura de pantalla de la aplicación](assets/amigo-secreto.png)

¡Una aplicación web sencilla para organizar sorteos de "Amigo Secreto" de manera fácil y divertida!

Corresponde a una aplicación que permita a los usuarios ingresar nombres de amigos en una lista para luego realizar un sorteo aleatorio y determinar quién es el **amigo secreto**

---

## Cómo Usar 🚀

### Requisitos
- Navegador web moderno (Chrome, Firefox, Safari)

### Instalación
```bash
git clone https://github.com/pablins/juego-amigo-secreto.git
cd amigo-secreto
# Abrir index.html en tu navegador
````

### Flujo de uso
1. Añadir participantes:
    * Escribe un nombre en el campo de texto
    * Haz clic en "Añadir"
    * ¡Los nombres se capitalizan automáticamente!

2. Realizar sorteo:
    * Con al menos 2 nombres añadidos
    * Haz clic en el botón "Sortear amigo"
    * ¡El resultado aparecerá en pantalla!

## Estructura del Código 🧩

```bash
.
├── index.html         # Estructura principal de la aplicación
├── style.css          # Estilos visuales
├── app.js             # Lógica de negocio y manipulacion DOM
└── assets/            # Recursos gráficos
```
---

## Fucionalidades ✨
* `Agregar nombres:` Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en **"Adicionar"**.

* `Validar entrada:` Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.

* `Visualizar la lista:` Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

* `Sorteo aleatorio:` Al hacer clic en el botón **"Sortear Amigo"**, se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.

---

## Autor 😀

Este proyecto fue desarrollado como parte del curso de lógica de programación en **Alura Latam**.

---

## Licencia 🖨

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---

¡Disfruta del juego!