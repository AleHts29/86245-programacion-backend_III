# 🐛 Maratón de detección de vulnerabilidades — #FindTheBug

> **Unidad 5 · Clase 38 — Seguridad**
> Actividad práctica basada en el **OWASP Top 10 (2021)**

---

## 🎯 Objetivo

Vas a ponerte en los zapatos de un **analista de vulnerabilidades**.

Tenés **tres proyectos** (`proyecto1`, `proyecto2`, `proyecto3`) que resuelven **el mismo problema** — un sistema de registro/login de usuarios — pero van **escalando en complejidad**. Todos tienen vulnerabilidades **sembradas a propósito**.

Tu trabajo:

1. **Leer el código** de cada proyecto.
2. **Detectar** las vulnerabilidades.
3. **Clasificarlas** según la categoría del **OWASP Top 10** a la que pertenecen.
4. Proponer, cuando puedas, **cómo se corregiría**.

No hace falta ejecutar los proyectos: **esta es una actividad de revisión de código** (aunque podés levantarlos si querés experimentar).

---

## 🔎 ¿Cómo escalan los proyectos?

| Proyecto | Qué incluye |
|---|---|
| **proyecto1** | Ruteo, controladores, **registro de usuario** (en memoria) |
| **proyecto2** | + **Base de datos** (Mongo), **login de usuario** |
| **proyecto3** | + **Login con JWT**, **vista de perfil**, **manejo de sesión**, **variables de entorno**, **permisos** |

A mayor proyecto, mayor superficie de ataque → más vulnerabilidades y más sutiles.

---

## ⏱️ Dinámica y tiempos

| Ronda | Proyecto | Duración |
|---|---|---|
| #FindTheBug (1) | `proyecto1` | 10 min (5 individual + 5 grupal) |
| #FindTheBug (2) | `proyecto2` | 15 min (10 individual + 5 grupal) |
| #FindTheBug (3) | `proyecto3` | 15–20 min (10 individual + 5–10 grupal) |

1. **Fase individual:** cada quien busca y anota las vulnerabilidades que encuentre en la [PLANTILLA-ANALISIS.md](./PLANTILLA-ANALISIS.md).
2. **Fase grupal:** ponemos en común lo encontrado y el profesor cierra con el análisis completo.

---

## 📋 El OWASP Top 10 (2021) — tu chuleta

Usá esta tabla para **clasificar** cada hallazgo:

| Código | Categoría | En criollo: aplica cuando… |
|---|---|---|
| **A01** | Broken Access Control | Se accede a un recurso/acción sin la autorización debida (forzar una URL/ID, token vencido que sigue andando, escalar privilegios). |
| **A02** | Cryptographic Failures | Mal manejo de criptografía (password en texto plano, algoritmo obsoleto, secreto débil o hardcodeado, exponer el hash). |
| **A03** | Injection | Entrada del usuario sin validar que rompe una consulta (SQL/NoSQL injection, `req.body` procesado directo, query dinámico sin validación). |
| **A04** | Insecure Design | Malas decisiones de diseño (password visible en el form, permitir `stock = -100`, no aplicar patrones, mass assignment). |
| **A05** | Security Misconfiguration | Descuido de configuración (credenciales/puerto hardcodeado, Mongo abierto a `0.0.0.0/0`, mostrar el stack trace al usuario, `.env` versionado). |
| **A06** | Vulnerable and Outdated Components | Dependencias viejas con vulnerabilidades conocidas, módulos sin mantener o sin usar. |
| **A07** | Identification and Authentication Failures | Fallas en el login (sin protección contra fuerza bruta, password sin hashear, user enumeration, sesión mal manejada). |
| **A08** | Software and Data Integrity Failures | Uso de dependencias/integraciones de fuentes no confiables o sin verificar integridad; CI/CD comprometido. |
| **A09** | Logging and Monitoring Failures | Logs genéricos que no sirven, logs demasiado explícitos (stack trace filtrado), o falta de monitoreo. |
| **A10** | Server-Side Request Forgery (SSRF) | El server accede a una URL provista por el usuario sin validarla. |

> 📎 Referencia oficial: <https://owasp.org/Top10/>

---

## ✅ Reglas del juego

- Anotá **dónde** está la vulnerabilidad (archivo + línea aproximada), **qué** categoría OWASP es y **por qué**.
- Una misma línea puede tener **más de una** vulnerabilidad.
- No todas las 10 categorías están presentes en cada proyecto — parte del reto es no "forzar" clasificaciones.
- Vale la pena mirar **todo**: routers, controllers, DAOs, `app.js`, `package.json`, vistas (`.handlebars`), JS del front y archivos de config.

---

## 📁 Archivos de esta actividad

- **[PLANTILLA-ANALISIS.md](./PLANTILLA-ANALISIS.md)** → dónde vas a anotar tus hallazgos (uso del alumno).
- **[SOLUCIONARIO-PROFESOR.md](./SOLUCIONARIO-PROFESOR.md)** → respuestas y análisis completo (⚠️ para el profesor — no mirar antes de intentarlo 😉).
- `proyecto1/`, `proyecto2/`, `proyecto3/` → el código a auditar.

---

## 🚀 Cómo levantar un proyecto (opcional)

```bash
cd proyecto1        # o proyecto2 / proyecto3
npm install
npm run dev         # requiere nodemon; si no, usá npm start
```

- **proyecto2 y proyecto3** necesitan una conexión a MongoDB.
  - `proyecto2`: reemplazá `'URL de mongo'` en `src/app.js`.
  - `proyecto3`: completá `MONGO_URL` en el archivo `.env`.

> Recordá: el foco de hoy es **leer y analizar**, no tanto ejecutar.

¡A cazar bugs! 🔦
