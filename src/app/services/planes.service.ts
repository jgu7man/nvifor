import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlanesService {

  public planSection: any
  constructor() { }

  getPlan(plan: string) {
    if (plan == 'emprendedor') {
      this.planSection = this.emprendedor
    } else if (plan == 'micro_empresa') {
      this.planSection = this.micro_empresa
    }
    return this.planSection
  }

  // DESCRIPCIÓN DE PLANES
  emprendedor = {
    nombre: 'Emprendedor',
    descripcion: 'Ideal para personas que requieren iniciar una actividad economica de forma independiente.',
    subplanes: [
      {
        nombre: 'Página web',
        precio: '10usd/Mes',
        diseno: [
          'Nombre comercial',
          'Tarjeta de presentación'
        ],
        desarrollo: [
          'Dominio URL',
          'Home',
          'Servicios',
          'Contactar'
        ],
        conexiones: [
          'Whatsapp',
          'Messenger'
        ],
        almacenamiento: '500Mb',
        tecnologia: [
          '.Net',
          'Angular 8'
        ]
      },
      {
        nombre: 'Ecommerce',
        precio: '15usd/Mes',
        diseno: [
          'Nombre comercial',
          'Tarjeta de presentación'
        ],
        desarrollo: [
          'Dominio URL',
          'Home',
          'Servicios',
          'Contactar',
          'Pedidos online'
        ],
        conexiones: [
          'Whatsapp',
          'Messenger'
        ],
        almacenamiento: '500Mb',
        tecnologia: [
          '.Net',
          'Angular 8'
        ]
      },
      {
        nombre: 'Aplicación móvil',
        precio: '15usd/Mes',
        diseno: [
          'Interfaz de usuario'
        ],
        desarrollo: [
          'Sistema operativo Híbrido',
          'Panel Clientes',
          'Panel Control',
        ],
        conexiones: [
          'Direct Play Store',
          'Chat Online'
        ],
        almacenamiento: '500Mb',
        tecnologia: [
          '.Net',
          'Ionic'
        ]
      }
    ]
  }

  micro_empresa = {
    nombre: 'Micro Empresa',
    descripcion: 'Ideal para microempresas activas que requieren fortalecer la imagen corporativa con sus clientes.',
    subplanes: [
      {
        nombre: 'Página web',
        precio: '20usd/Mes',
        diseno: [
          'Logo',
          'Tarjeta de presentación',
          'Hoja membretada'
        ],
        desarrollo: [
          'Dominio URL',
          'Home',
          'Servicios',
          'Contactar'
        ],
        conexiones: [
          'Correo corporativo',
          'Messenger',
          'Instagram'
        ],
        almacenamiento: '1Gb',
        tecnologia: [
          '.Net',
          'Angular 8'
        ]
      },
      {
        nombre: 'Ecommerce',
        precio: '30usd/Mes',
        diseno: [
          'Logo',
          'Tarjeta de presentación',
          'Hoja membretada'
        ],
        desarrollo: [
          'Dominio URL',
          'Home',
          'Servicios',
          'Contactar',
          'Pedidos online'
        ],
        conexiones: [
          'Correo corporativo',
          'Messenger',
          'Instagram'
        ],
        almacenamiento: '1Gb',
        tecnologia: [
          '.Net',
          'Angular 8'
        ]
      },
      {
        nombre: 'Aplicación móvil',
        precio: '30usd/Mes',
        diseno: [
          'Interfaz de usuario'
        ],
        desarrollo: [
          'Sistema operativo Híbrido',
          'Panel Clientes',
          'Panel Control',
          'MKT'
        ],
        conexiones: [
          'Direct Play Store',
          'Chat Online'
        ],
        almacenamiento: '1Gb',
        tecnologia: [
          '.Net',
          'Ionic'
        ]
      }
    ]
  }
}
