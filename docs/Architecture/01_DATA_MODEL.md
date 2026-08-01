# DATA MODEL

Versión: 1.0

---

# Objetivo

Definir el modelo de datos oficial de Tiendas Drakkar.

Este documento establece las entidades principales del sistema, sus relaciones y las reglas generales para el almacenamiento de información.

Todo el ecosistema (Sitio Web, CMS, CRM, APIs, IA y Automatizaciones) deberá utilizar este modelo como referencia.

---

# Filosofía

Cada dato deberá existir una sola vez.

No se permitirá información duplicada.

Toda relación entre entidades deberá ser explícita.

El modelo deberá ser escalable y permitir el crecimiento de la empresa sin rediseños estructurales.

---

# Principios

Toda entidad deberá:

- Tener un identificador único.
- Contar con fecha de creación.
- Contar con fecha de actualización.
- Permitir estados cuando aplique.
- Mantener integridad referencial.

---

# Entidades principales

El sistema estará compuesto inicialmente por las siguientes entidades:

- Productos
- Categorías
- Variantes
- Colores
- Clientes
- Leads
- Pedidos
- Producción
- Entregas
- Distribuidores
- Usuarios
- Roles
- Pipeline CRM
- Automatizaciones
- Configuración del sitio

---

# Relaciones principales

Cliente

↓

Pedidos

↓

Productos

↓

Producción

↓

Entrega

---

Lead

↓

CRM

↓

Seguimientos

↓

Cliente

---

Producto

↓

Variantes

↓

Colores

↓

Categorías

---

Usuario

↓

CRM

↓

Leads

↓

Pedidos

---

# Reglas

Un Cliente podrá tener múltiples Pedidos.

Un Pedido podrá contener múltiples Productos.

Un Producto podrá tener múltiples Variantes.

Una Variante podrá tener un Color.

Un Producto podrá pertenecer a varias Categorías.

Un Lead podrá convertirse en Cliente.

Todo Pedido deberá pertenecer a un Cliente.

Toda Producción deberá pertenecer a un Pedido.

Toda Entrega deberá pertenecer a un Pedido.

Todo Usuario tendrá un Rol.

---

# Escalabilidad

El modelo deberá permitir agregar nuevas entidades sin modificar las existentes.

Todas las relaciones deberán mantenerse normalizadas.

El sistema deberá ser compatible con PostgreSQL.


---

# Entidad: Producto

## Descripción

Representa un mueble comercializado por Tiendas Drakkar.

Es la entidad principal del catálogo.

---

## Campos principales

ID

SKU

Nombre

Slug

Descripción corta

Descripción completa

Categoría principal

Categorías secundarias

Marca

Estado

Producto destacado

Orden de visualización

Fecha de creación

Fecha de actualización

---

## Relaciones

Un Producto podrá tener:

- Variantes.
- Colores.
- Imágenes.
- Categorías.
- Características.
- Etiquetas.
- Productos relacionados.

---

## Restricciones

El SKU deberá ser único.

El Slug deberá ser único.

Todo producto deberá pertenecer al menos a una categoría.

Todo producto deberá tener al menos una imagen principal.

Todo producto deberá tener un estado válido.

---

# Estados

Borrador.

Publicado.

Oculto.

Descontinuado.

---

# Entidad: Categoría

## Descripción

Agrupa productos con características similares.

---

## Campos

ID

Nombre

Slug

Descripción

Imagen

Orden

Estado

Fecha de creación

Fecha de actualización

---

## Relaciones

Una Categoría podrá contener múltiples Productos.

Un Producto podrá pertenecer a una o varias Categorías.

---

# Estados

Activa.

Oculta.

Eliminada.

---

# Entidad: Variante

## Descripción

Representa una versión específica de un producto.

Permite administrar diferentes configuraciones sin duplicar el producto principal.

---

## Campos

ID

Producto

Nombre

SKU

Color

Medidas

Configuración

Precio

Estado

Orden

Fecha de creación

Fecha de actualización

---

## Relaciones

Una Variante pertenece a un Producto.

Una Variante puede tener un Color.

Una Variante puede tener múltiples Imágenes.

---

## Estados

Activa.

Oculta.

Descontinuada.

---

# Entidad: Color

## Descripción

Representa un color disponible para los productos.

Un mismo color podrá utilizarse en múltiples variantes.

---

## Campos

ID

Nombre

Código interno

Código HEX

Imagen de muestra

Estado

Orden

Fecha de creación

Fecha de actualización

---

## Relaciones

Un Color podrá pertenecer a múltiples Variantes.

---

## Estados

Activo.

Inactivo. 

---

# Entidad: Cliente

## Descripción

Persona o empresa que ha realizado al menos una compra.

---

## Campos

ID

Nombre

Apellidos

Empresa

RFC

Teléfono

Correo

Dirección

Ciudad

Estado

Código Postal

Notas

Fecha de registro

Última actualización

Estado

---

## Relaciones

Un Cliente podrá tener:

Múltiples Pedidos.

Múltiples Seguimientos.

Múltiples Direcciones.

---

# Entidad: Lead

## Descripción

Persona interesada en uno o más productos.

---

## Campos

ID

Nombre

Teléfono

Correo

Origen

Producto de interés

Campaña

Medio

Estado

Asesor asignado

Observaciones

Fecha de creación

Última actualización

---

## Relaciones

Un Lead podrá convertirse en Cliente.

Todo Lead pertenecerá al Pipeline del CRM.

---

# Entidad: Pedido

## Descripción

Representa una compra confirmada realizada por un cliente.

Un pedido podrá contener uno o varios productos.

---

## Campos

ID

Folio

Cliente

Asesor

Estado

Subtotal

Descuento

Total

Método de pago

Estado de pago

Dirección de entrega

Fecha de creación

Fecha estimada de entrega

Fecha de cierre

Observaciones

---

## Relaciones

Un Pedido pertenece a un Cliente.

Un Pedido puede contener múltiples Productos.

Un Pedido genera una Producción.

Un Pedido genera una Entrega.

---

## Estados

Pendiente.

Confirmado.

En producción.

Listo para entrega.

Entregado.

Cancelado.

---

# Entidad: Producción

## Descripción

Representa el proceso de fabricación de un pedido.

---

## Campos

ID

Pedido

Responsable

Fecha de inicio

Fecha estimada

Fecha de finalización

Estado

Observaciones

---

## Relaciones

Una Producción pertenece a un Pedido.

---

## Estados

Pendiente.

Programada.

En fabricación.

Control de calidad.

Terminada.

Cancelada.

---

# Entidad: Entrega

## Descripción

Representa la entrega física de un pedido.

---

## Campos

ID

Pedido

Cliente

Dirección

Responsable

Fecha programada

Fecha de entrega

Estado

Observaciones

Evidencias

---

## Relaciones

Una Entrega pertenece a un Pedido.

Una Entrega pertenece a un Cliente.

---

## Estados

Pendiente.

Programada.

En ruta.

Entregada.

Reagendada.

Cancelada.

---

# Entidad: Usuario

## Descripción

Persona con acceso al sistema.

---

## Campos

ID

Nombre

Correo

Teléfono

Rol

Estado

Último acceso

Fecha de creación

Fecha de actualización

---

## Relaciones

Un Usuario tiene un Rol.

Un Usuario puede administrar:

Productos.

Leads.

Clientes.

Pedidos.

Producción.

Entregas.

---

# Entidad: Rol

## Descripción

Define los permisos de un usuario.

---

## Roles iniciales

Administrador.

Gerente.

Ventas.

Producción.

Logística.

Atención al cliente.

Marketing.

---

# Criterios de aceptación

El modelo de datos deberá ser suficiente para soportar el funcionamiento del sitio web, el CMS, el CRM, las automatizaciones, los agentes de IA y la base de datos sin necesidad de rediseñar su estructura principal.