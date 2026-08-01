# DATABASE SCHEMA

Versión: 1.0

---

# Objetivo

Definir la estructura oficial de la base de datos de Tiendas Drakkar.

Este documento servirá como base para PostgreSQL, Supabase, Prisma y cualquier otro motor de base de datos utilizado por la plataforma.

---

# Filosofía

La base de datos deberá ser:

Normalizada.

Escalable.

Segura.

Auditable.

Fácil de mantener.

Preparada para automatizaciones.

---

# Motor de Base de Datos

PostgreSQL.

---

# Convenciones

Todas las tablas utilizarán:

- id (UUID)
- created_at
- updated_at

Cuando aplique también:

- deleted_at
- created_by
- updated_by

---

# Convención de nombres

Tablas:

Plural.

Ejemplo:

products

orders

clients

users

Leads

Columnas:

snake_case

Ejemplo:

created_at

updated_at

product_id

category_id

---

# Tablas principales

products

categories

product_variants

colors

product_images

clients

leads

orders

order_items

production_orders

deliveries

users

roles

permissions

crm_pipeline

crm_notes

tasks

hero_slides

faq

settings

media

activity_logs

automation_logs

---

# Relaciones principales

products

↓

product_variants

↓

colors

---

clients

↓

orders

↓

order_items

↓

production_orders

↓

deliveries

---

leads

↓

crm_pipeline

↓

clients

---

users

↓

roles

↓

permissions

---

# Reglas generales

Toda tabla tendrá llave primaria.

Toda relación utilizará llave foránea.

No existirán datos duplicados.

Las eliminaciones deberán ser lógicas cuando sea posible.

Todo cambio importante deberá registrarse en activity_logs.

---

# Escalabilidad

La estructura deberá permitir agregar nuevas tablas sin modificar las existentes.

Toda la base de datos deberá ser compatible con PostgreSQL y Supabase.