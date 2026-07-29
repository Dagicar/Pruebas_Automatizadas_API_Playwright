# Pruebas Automatizadas de API con Playwright

En este repositorio desarrollé una suite de pruebas automatizadas para servicios backend (REST APIs) utilizando **Playwright** con **TypeScript**. 

El objetivo del proyecto fue implementar un flujo completo de pruebas de integración para endpoints HTTP (CRUD), asegurando la calidad de las respuestas y la estructura de los datos enviando peticiones directamente desde código sin necesidad de interfaz gráfica.

---

##  Tecnologías utilizadas

* **Playwright (APIRequestContext):** Para la ejecución y aserciones de peticiones HTTP.
* **TypeScript:** Para escribir un código estructurado, limpio y con tipado seguro.
* **GitHub Actions:** Integración continua (CI/CD) para la ejecución automática de la suite en cada push.

---

##  Pruebas implementadas (CRUD)

La suite valida las operaciones principales sobre el recurso de usuarios:

1. **Obtener usuarios (`GET`):** Validación de estado HTTP `200 OK` y verificación del esquema de la lista de usuarios.
2. **Crear usuario (`POST`):** Confirmación de creación exitosa con estado HTTP `201 Created` y validación del ID generado.
3. **Actualizar usuario (`PUT`):** Modificación total de registros y comprobación de datos actualizados.
4. **Eliminar usuario (`DELETE`):** Validación de la eliminación correcta del recurso con estado HTTP `200 OK`.

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