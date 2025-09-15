import { Type } from '@angular/core';

export interface BioSection {
  id: string;                // slug único
  title: string;             // título visible del dropdown
  component: Type<any>;      // componente que renderiza el contenido
  bandClass?: string;        // banda de color full-width antes del dropdown (opcional)
  opened?: boolean;          // si quieres abrir alguno por defecto
}
