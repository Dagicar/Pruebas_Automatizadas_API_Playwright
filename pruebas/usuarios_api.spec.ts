import { test, expect } from '@playwright/test';

test.describe('Pruebas de API - Gestión de Usuarios', () => {

  const URL_BASE = 'https://jsonplaceholder.typicode.com/users';

  test('Debería obtener la lista de usuarios correctamente (GET)', async ({ request }) => {
    // 1. Enviar petición GET
    const respuesta = await request.get(URL_BASE);

    // 2. Validar código de estado 200 OK
    expect(respuesta.status()).toBe(200);

    // 3. Convertir cuerpo a JSON y validar estructura
    const cuerpo = await respuesta.json();
    expect(Array.isArray(cuerpo)).toBeTruthy();
    expect(cuerpo.length).toBeGreaterThan(0);
    expect(cuerpo[0]).toHaveProperty('id');
    expect(cuerpo[0]).toHaveProperty('name');
  });

  test('Debería crear un nuevo usuario exitosamente (POST)', async ({ request }) => {
    // Datos del nuevo usuario
    const nuevoUsuario = {
      name: 'Gian',
      username: 'gianqa',
      email: 'gian@ejemplo.com'
    };

    // 1. Enviar petición POST
    const respuesta = await request.post(URL_BASE, {
      data: nuevoUsuario
    });

    // 2. Validar código de estado 201 Creado
    expect(respuesta.status()).toBe(201);

    // 3. Validar respuesta del servidor
    const cuerpo = await respuesta.json();
    expect(cuerpo.name).toBe(nuevoUsuario.name);
    expect(cuerpo.email).toBe(nuevoUsuario.email);
    expect(cuerpo).toHaveProperty('id');
  });

  test('Debería actualizar totalmente un usuario existente (PUT)', async ({ request }) => {
    // Datos actualizados para el usuario con ID 1
    const usuarioActualizado = {
      id: 1,
      name: 'Gian Modificado',
      username: 'gianqa_v2',
      email: 'gian_nuevo@ejemplo.com'
    };

    // 1. Enviar petición PUT al usuario 1
    const respuesta = await request.put(`${URL_BASE}/1`, {
      data: usuarioActualizado
    });

    // 2. Validar código de estado 200 OK
    expect(respuesta.status()).toBe(200);

    // 3. Validar que los datos cambiaron
    const cuerpo = await respuesta.json();
    expect(cuerpo.name).toBe(usuarioActualizado.name);
    expect(cuerpo.email).toBe(usuarioActualizado.email);
  });

  test('Debería eliminar un usuario correctamente (DELETE)', async ({ request }) => {
    // 1. Enviar petición DELETE para el usuario con ID 1
    const respuesta = await request.delete(`${URL_BASE}/1`);

    // 2. Validar código de estado 200 OK (o 204 No Content según la API)
    expect(respuesta.status()).toBe(200);
  });

});