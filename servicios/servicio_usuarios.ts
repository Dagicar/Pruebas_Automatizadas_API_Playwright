import { APIRequestContext } from '@playwright/test';

export class ServicioUsuarios {
  private request: APIRequestContext;
  private urlBase: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async obtenerUsuarios() {
    return await this.request.get(this.urlBase);
  }

  async crearUsuario(datosUsuario: object) {
    return await this.request.post(this.urlBase, {
      data: datosUsuario
    });
  }

  async actualizarUsuario(id: number, datosUsuario: object) {
    return await this.request.put(`${this.urlBase}/${id}`, {
      data: datosUsuario
    });
  }

  async eliminarUsuario(id: number) {
    return await this.request.delete(`${this.urlBase}/${id}`);
  }
}