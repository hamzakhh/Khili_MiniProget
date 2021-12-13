import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  getVoyage: any;
  getlesVoyage(): import("./voyage/voyage").Voyage[] {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
