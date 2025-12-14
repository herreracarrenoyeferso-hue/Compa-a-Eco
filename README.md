## ¿Cómo se aplica el flujo de datos unidireccional en este proyecto?

En este proyecto el flujo de datos es unidireccional porque la información se pasa desde los componentes padres hacia los hijos mediante props.
Por ejemplo, el componente App envía datos como el título y el subtítulo al componente Header.
Los componentes hijos solo reciben y muestran la información, pero no modifican directamente los datos del padre, lo que hace que el comportamiento de la aplicación sea más predecible y fácil de mantener.

## ¿Qué papel cumple el estado (useState) en los diferentes componentes y cómo influye en el renderizado?

El estado se usa para manejar información que puede cambiar con el tiempo.
En este proyecto, el hook useState se utiliza en el componente Counter para llevar el control del valor del contador.

Cada vez que el estado cambia (cuando se presionan los botones de sumar o restar), React vuelve a renderizar automáticamente el componente, mostrando el nuevo valor en pantalla.
Esto permite que la interfaz se actualice sin necesidad de manipular el DOM de forma manual.

## ¿Por qué es importante separar la UI en componentes reutilizables y puros?

Separar la interfaz en componentes reutilizables permite:

Organizar mejor el código
Reutilizar partes de la interfaz sin repetir código
Facilitar el mantenimiento y las modificaciones
Los componentes puros solo dependen de sus props y no tienen efectos secundarios, lo que hace que su comportamiento sea más predecible y fácil de probar.
En este proyecto, componentes como Card, Header y Footer pueden reutilizarse en otras secciones sin cambios importantes.

## ¿Qué ventajas aporta el uso de JSX declarativo frente al enfoque imperativo del DOM tradicional?

JSX permite describir cómo debe verse la interfaz, en lugar de indicar paso a paso cómo modificar el DOM.
Esto hace que el código sea más:

Claro
Legible
Fácil de entender
En lugar de usar métodos como document.createElement o appendChild, React se encarga de actualizar el DOM automáticamente cuando cambian los datos, reduciendo errores y mejorando la productividad del desarrollador.

## ¿Cómo podrías mejorar la app agregando tres componentes nuevos sin romper la coherencia del diseño ni la lógica?

La aplicación se podría mejorar agregando nuevos componentes que sigan el mismo estilo y estructura, por ejemplo:

Componente de Estadísticas: mostrar información básica como número de cultivos o consejos aplicados.
Componente de Testimonios: incluir opiniones de usuarios sobre el uso de la huerta ecológica.
Componente de Contacto: un formulario sencillo para recibir mensajes o consultas.
Estos componentes podrían reutilizar las mismas clases de Tailwind, mantener el diseño visual consistente y seguir el flujo de datos unidireccional usando props.
