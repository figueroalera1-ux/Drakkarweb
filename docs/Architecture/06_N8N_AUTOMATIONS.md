# N8N AUTOMATIONS

Versión: 1.0

---

# Objetivo

Definir todas las automatizaciones que ejecutará Tiendas Drakkar mediante n8n.

Este documento servirá como referencia para el desarrollo, mantenimiento y ampliación de los flujos automáticos.

---

# Filosofía

Toda automatización deberá reducir trabajo manual.

Nunca deberá eliminar el control humano sobre decisiones comerciales importantes.

Cada flujo deberá ser independiente, reutilizable y fácil de mantener.

---

# Principios

Cada Workflow deberá:

- Tener un único propósito.
- Registrar todas las acciones.
- Manejar errores.
- Poder reiniciarse.
- Ser auditable.
- Ser escalable.

---

# Integraciones

n8n podrá comunicarse con:

Sitio Web.

CMS.

CRM.

PostgreSQL.

Supabase.

WhatsApp.

Facebook Lead Ads.

Instagram.

TikTok.

Correo electrónico.

OpenRouter.

Agentes IA.

APIs externas.

---

# Workflows iniciales

WF-001 Captura de Leads.

WF-002 Asignación automática de asesor.

WF-003 Seguimiento automático.

WF-004 Recordatorios comerciales.

WF-005 Confirmación de pedido.

WF-006 Inicio de producción.

WF-007 Actualización de producción.

WF-008 Programación de entrega.

WF-009 Confirmación de entrega.

WF-010 Encuesta de satisfacción.

WF-011 Reportes diarios.

WF-012 Reportes semanales.

WF-013 Reportes mensuales.

WF-014 Alertas internas.

WF-015 Respaldo de información.

WF-016 Sincronización del catálogo.

WF-017 Notificaciones administrativas.

WF-018 Actualización del Dashboard.

WF-019 Procesamiento por IA.

WF-020 Registro de actividad.

---

# Estándar de Workflows

Cada Workflow deberá documentar:

Objetivo.

Disparador.

Entradas.

Validaciones.

Proceso.

Condiciones.

Salidas.

Errores.

Notificaciones.

Registro.

---

# Monitoreo

Todos los Workflows deberán registrar:

Hora de inicio.

Hora de finalización.

Duración.

Estado.

Errores.

Resultado.

---

# Criterios de aceptación

Cada automatización deberá poder ejecutarse de manera independiente, integrarse con el CRM y permitir futuras ampliaciones sin modificar los flujos existentes.