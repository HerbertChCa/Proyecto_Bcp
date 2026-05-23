# Plataforma de Iniciativas Comunitarias

## 📝 Descripción del Proyecto
Es una plataforma centralizada diseñada para gestionar iniciativas comunitarias. El sistema permite filtrar proyectos según los intereses y el tiempo disponible de cada usuario, ofreciendo además un perfil personal donde se acumulan las participaciones, certificados y habilidades obtenidas.

---

## 🔄 Flujo del Usuario y Requerimientos de Datos (Supabase)

A partir del flujo descrito en la imagen, se identifican las siguientes necesidades para la base de datos en Supabase:

### 1. Registro y Perfil de Usuario
* **Descripción:** El usuario crea un perfil personalizado acorde a sus intereses, disponibilidad de tiempo, carrera y ubicación.
* **Entidad en BD:** Tabla `perfiles` o `usuarios` (enlazada a `auth.users` de Supabase).

### 2. Gestión de Iniciativas
* **Descripción:** El participante puede crear una iniciativa nueva o buscar oportunidades existentes.
* **Entidad en BD:** Tabla `iniciativas` o `proyectos` (con campos para categorías, filtros de interés, tiempos requeridos y ubicación).

### 3. Inscripción y Capacitación
* **Descripción:** El participante elige la iniciativa que le convenga, accede al equipo participante y/o capacitaciones, y participa directamente.
* **Entidad en BD:** Tabla intermedia `participaciones` (conecta usuarios con iniciativas) y tabla `capacitaciones`.

### 4. Certificación y Logros
* **Descripción:** Al finalizar la participación, la entidad organizadora entrega certificados o credenciales. El participante puede publicar y compartir sus logros.
* **Entidad en BD:** Tabla `certificados` o `logros` (vinculada al perfil del usuario) y almacenamiento de archivos (Supabase Storage) para los documentos de las credenciales.

---

## 👥 Créditos / Autoría
* **Diseño y Concepto:** Frank Antonio Huayna Rodriguez
