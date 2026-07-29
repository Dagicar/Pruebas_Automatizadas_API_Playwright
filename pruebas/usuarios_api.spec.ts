import { test, expect } from '@playwright/test';
import { ServicioUsuarios } from '../servicios/servicio_usuarios';
import datosNuevoUsuario from '../datos/usuario_nuevo.json';

test.describe('Pruebas de API - Gestión de Usuarios', () => {

  test('Debería obtener la lista de usuarios correctamente (GET)', async ({ request }) => {
    const servicio = new ServicioUsuarios(request);
    const respuesta = await servicio.obtenerUsuarios();

    expect(respuesta.status()).toBe(200);

    const cuerpo = await respuesta.json();
    expect(Array.isArray(cuerpo)).toBeTruthy();
    expect(cuerpo.length).toBeGreaterThan(0);
  });

  test('Debería crear un nuevo usuario desde JSON (POST)', async ({ request }) => {
    const servicio = new ServicioUsuarios(request);
    const respuesta = await servicio.crearUsuario(datosNuevoUsuario);

    expect(respuesta.status()).toBe(201);

    const cuerpo = await respuesta.json();
    expect(cuerpo.name).toBe(datosNuevoUsuario.name);
    expect(cuerpo.email).toBe(datosNuevoUsuario.email);
    expect(cuerpo).toHaveProperty('id');
  });

  test('Debería actualizar totalmente un usuario existente (PUT)', async ({ request }) => {
    const servicio = new ServicioUsuarios(request);
    const datosActualizados = {
      ...datosNuevoUsuario,
      name: 'Gian Yovera Actualizado'
    };

    const respuesta = await servicio.actualizarUsuario(1, datosActualizados);

    expect(respuesta.status()).toBe(200);

    const cuerpo = await respuesta.json();
    expect(cuerpo.name).toBe(datosActualizados.name);
  });

  test('Debería eliminar un usuario correctamente (DELETE)', async ({ request }) => {
    const servicio = new ServicioUsuarios(request);
    const respuesta = await servicio.eliminarUsuario(1);

    expect(respuesta.status()).toBe(200);
  });

});