# API SPECIFICATION

Versión: 1.0

---

# Objetivo

Definir la API oficial de Tiendas Drakkar.

La API será el medio de comunicación entre:

- Sitio Web
- CMS
- CRM
- Base de datos
- Automatizaciones (n8n)
- Agentes IA
- Aplicaciones futuras

Toda funcionalidad del sistema deberá poder ejecutarse mediante la API.

---

# Arquitectura

API REST.

Formato JSON.

Autenticación mediante JWT.

Versionado mediante:

/api/v1/

---

# Principios

La API deberá ser:

Consistente.

Escalable.

Segura.

Documentada.

Versionable.

---

# Recursos principales

Productos.

Categorías.

Clientes.

Leads.

Pedidos.

Producción.

Entregas.

Usuarios.

CRM.

Configuración.

Archivos multimedia.

---

# Métodos

GET

POST

PUT

PATCH

DELETE

---

# Endpoints iniciales

/api/v1/products

/api/v1/categories

/api/v1/leads

/api/v1/clients

/api/v1/orders

/api/v1/production

/api/v1/deliveries

/api/v1/users

/api/v1/auth

/api/v1/settings

---

# Seguridad

JWT.

HTTPS obligatorio.

Control de permisos por Roles.

Registro de auditoría.

Rate Limit.

---

# Integraciones

La API deberá permitir integraciones con:

n8n.

WhatsApp.

Facebook Lead Ads.

Instagram.

TikTok.

Google Sheets (temporalmente).

OpenRouter.

Agentes IA.

---

# Criterios de aceptación

Toda funcionalidad del sistema deberá estar disponible mediante la API oficial.