import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Contacte } from '../contactClasse/contacte';
const UR='http://localhost:3000/message';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  ContactService:any;
  constructor(private http:HttpClient) { }

  ///get
  getMessage():Observable<Contacte[]>{
    return this.http.get<Contacte[]>(UR);
    }
    ///Ajouter
    addMessagee(v:Contacte):Observable<Contacte>{
      return this.http.post<Contacte>(UR,v);
    }
    
}
