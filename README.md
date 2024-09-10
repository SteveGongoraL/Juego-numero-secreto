# Adivina el Número Secreto
Este es un sencillo juego de adivinar el número, donde el jugador intenta adivinar un número secreto generado aleatoriamente entre 1 y un número máximo especificado.

[![juego-numero-secreto](https://img.shields.io/badge/JS_Game-efd81d?style=for-the-badge&logoColor=black)](https://stevegongoral.github.io/Juego-numero-secreto/)

## Cómo Jugar 🎮
1. El juego generará un número secreto aleatorio entre 1 y 10.
2. Introduce un número en el campo de entrada y haz clic en el botón de verificar.
3. El juego te indicará si el número secreto es mayor o menor que el número que has ingresado.
4. Continúa adivinando hasta que aciertes el número secreto.
5. Una vez que aciertes el número, el botón de "Nuevo Juego" se habilitará para que puedas jugar nuevamente.
6. Solo puedes seleccionar el botón "Nuevo Juego" en un total de 8 veces.

## Estructura del Código
El código JavaScript está estructurado de la siguiente manera:

### Variables Globales
- `numeroSecreto:` Guarda el número secreto generado.
- `intentos:` Cuenta el número de intentos realizados por el usuario.
- `listaNumeroSorteados:` Lleva un registro de los números ya sorteados para evitar repeticiones.
- `numeroMaximo:` El número máximo que puede ser generado aleatoriamente (por defecto, 10).
- `numeroDeJuegosPosiboles:` Número máximo de juegos posibles antes de que termine el juego (por defecto, 8).

### Funciones
- `asignarTextoAlElemento(elemento, texto):` Asigna texto a un elemento HTML especificado.
- `verificarIntento():` Verifica el intento del usuario, comparando su número con el número secreto.
- `limpiarInput():` Limpia el campo de entrada del usuario.
- `generarNumeroSecreto():` Genera un número secreto aleatorio, asegurándose de que no se repita.
- `condicionesIniciales():` Establece las condiciones iniciales del juego.
- `reiniciarJuego():` Reinicia el juego, restableciendo las condiciones iniciales.

## Ejemplo de Uso
Al cargar la página, el juego se inicializa y se muestra un mensaje indicando que el usuario debe introducir un número del 1 al 10. El jugador ingresa un número y el juego proporciona pistas para ayudar al jugador a adivinar el número secreto. Una vez adivinado correctamente, se muestra el número de intentos y se habilita el botón de reinicio para comenzar un nuevo juego.

## Demo 🥈
<img src="https://github.com/user-attachments/assets/cbc6e77b-ec9d-4613-9fed-b83fba944ca1" alt="Imagen del Juego" width="420" loading="lazy"/>
