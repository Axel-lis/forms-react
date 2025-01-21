# Formularios en React +Tailwind !

Usando **React hook form**, **ZOD** y lo diseñé de modo que haya dos componentes, un componente padre que es el que maneja el formulario y sus validaciones y luego que un componente secundario que tomas cada uno de los inputs y muestre los errores asociados. Adicionalmente usé **PropTypes** y **SweetAlert** para las alertas



# Explicación del código:

A modo de resumen y apuntes para futuros proyectos armé un cheatsheet de cómo lo pensé. 

## 1-->Gestión de Formulario:
- Utilicé react-hook-form para manejar el estado y validación del formulario
- Zod se implementa para definir un esquema de validación robusto
- Cada campo tiene reglas específicas: nombre, email, contraseña con requisitos complejos

## 2-->Componente de Input Reutilizable:

- Creé un componente FormInput genérico para manejar diferentes tipos de entradas
- Maneja automáticamente la visualización de errores
- Incluye estilos dinámicos basados en el estado de validación
- Usé  íconos de react-icons para mejorar la experiencia visual
- 
## 3- Validaciones Avanzadas:

- La contraseña requiere mínimo 8 caracteres
- Obligatorio incluir mayúsculas y números
- Email con formato válido
- Campos opcionales como teléfono y biografía

## 4- Experiencia de Usuario

- SweetAlert2 muestra notificaciones amigables después del envío
- Diseño responsivo con Tailwind CSS
- Retroalimentación inmediata de errores
- Botón de submit con efectos de transición
## 5-Sugerencias para futuros forms
- Añadir confirmación de contraseña

## 6- En BotonArrepentimiento.jsx 
- Acá hay otro tipo de formualario que no usa ZOD, pero verifica en tiempo real. También me gustó cómo
resolví que al enviarlo figure un cartel y bloquee el resto