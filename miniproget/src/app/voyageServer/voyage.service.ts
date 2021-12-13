import { Injectable } from '@angular/core';
import { Voyage } from '../voyage/voyage';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
const URL= 'http://localhost:3000/Voyages';
const burl='http://localhost:3000/login';

@Injectable({
  providedIn: 'root'
})
export class VoyageService {
 
 
  
   
  VoyageService: any;
  constructor(private http:HttpClient) { }
  
  ///Function get
  getProduits():Observable<Voyage[]>{
    return this.http.get<Voyage[]>(URL);
    } 

    ///Function detaille
  getProduit(id):Observable<Voyage[]>{
    return this.http.get<Voyage[]>("http://localhost:3000/Voyages/"+id);
    }

    ///Function Ajouter
    addVoyage(v:Voyage):Observable<Voyage>{
      return this.http.post<Voyage>(URL,v);
    }
    ///Function Modifier
    updatVoyagee(id:number,Vo:any){
      return this.http.put<any>(URL+"/"+id,Vo)}

      ///Function Ajouter
    deletVoyage(id:number){
      return this.http.delete(URL+"/"+id)
    }

//getlesVoyages(id:number){
//return this.lesVoy().find(id) ;
 
//}
g//etlesVoyag(categ:number){
   //this.getProduits().filter(e=> e.id == categ) ;


}