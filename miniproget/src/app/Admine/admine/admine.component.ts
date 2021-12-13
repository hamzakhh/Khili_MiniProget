import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Voyage } from '../../voyage/voyage';
import { VoyageService } from 'src/app/voyageServer/voyage.service';

@Component({
  selector: 'app-admine',
  templateUrl: './admine.component.html',
  styleUrls: ['./admine.component.css']
})
export class AdmineComponent implements OnInit {
  tab:Voyage[]=[];

libelle:any;

  dataa={
    id:0,
    libelle:'',
    image:'',
    prix:0,
    date:'',
  }
voyageForm: FormGroup = new FormGroup( { } );
  
  constructor(private serv:VoyageService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.voyageForm=this.fb.group({
 
      libelle :[''],
      image:[''],
      prix:[],
      promotion:[false],
      date:[]
  
  
      })
      this.serv.getProduits().subscribe (data => this.tab = data);
    }
    ///Ajouter
    AjouteVoyage(){
      this.serv.addVoyage(this.voyageForm.value).subscribe(data =>{ console.log(data);
      this.tab.push(data)
    }
      )
  
    }
    ///suprime
    SupprimrVoyage(id:number){
      this.serv.deletVoyage(id).subscribe(() =>
      this.tab=this.tab.filter(v =>v.id !=id)
      )
  
    }
    ///modifier
    ModifierVoyage(id:any,libelle:string,image:string,prix:number,date:string ){
    this.dataa.id=id
    this.dataa.libelle=libelle
    this.dataa.image=image
    this.dataa.prix=prix
    this.dataa.date=date
    console.log(this.dataa)
   }

  ////rechercher 
  recherche(){
if(this.libelle =="") {
this.ngOnInit();
} else{
  this.tab=this.tab.filter(res=>{
    return res.libelle.toLocaleLowerCase().match(this.libelle.toLocaleLowerCase());
  })
}

  
  }
}
