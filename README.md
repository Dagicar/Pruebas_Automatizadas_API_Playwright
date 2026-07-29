# Pruebas Automatizadas de API con Playwright

En este repositorio implementé un **conjunto de pruebas automatizadas** para servicios backend (REST APIs) utilizando **Playwright** con **TypeScript**, aplicando patrones de diseño y buenas prácticas de automatización.

---

## 🛠️ Tecnologías y Patrones Aplicados

* **Playwright (`APIRequestContext`):** Ejecución de peticiones HTTP y validación de respuestas.
* **TypeScript:** Código limpio, mantenible y con tipado estático.
* **Patrón API Service:** Separación de la lógica de peticiones de los archivos de prueba.
* **Data-Driven Testing:** Separación de payloads en archivos JSON dinámicos.
* **Validación de Esquemas JSON (Ajv):** Aseguramiento de la estructura e integridad de las respuestas de la API.
* **GitHub Actions:** Pipeline de CI/CD para la ejecución automática de las pruebas.

---

## 🧪 Casos de Prueba Implementados

1. **Obtener usuarios (`GET`):** Validación de respuesta exitosa `200 OK` y verificación del listado.
2. **Crear usuario (`POST`):** Creación de registro desde un payload `.json` con validación `201 Created`.
3. **Actualizar usuario (`PUT`):** Modificación completa de un usuario existente.
4. **Eliminar usuario (`DELETE`):** Confirmación de eliminación correcta del recurso.
5. **Validación de Esquema JSON:** Comprobación estricta del contrato de respuesta utilizando contratos de tipos.
---

##  Cómo ejecutar las pruebas en tu máquina

Si deseas correr la suite localmente, sigue estos pasos:

1. Clona el repositorio e instala las dependencias:
   ```bash
   git clone https://github.com/Dagicar/Pruebas_Automatizadas_API_Playwright.git
   cd Pruebas_Automatizadas_API_Playwright
   npm install
    ```
2. Ejecuta las pruebas de API:
   ```bash
    npx playwright test
   ```
3. Visualiza el reporte de resultados:
   ```bash
    npx playwright show-report
   ```