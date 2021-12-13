import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { VoyageService } from '../voyageServer/voyage.service';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit {
  alert:boolean=false;
  ModForm= new FormGroup({
    libelle: new FormControl(''),
    image: new FormControl(''),
    prix: new FormControl(0),
    promotion: new FormControl(true),
    date: new FormControl(''),
    
  })

  constructor(private mode:VoyageService,private act:ActivatedRoute) { }

  ngOnInit(): void {
    this.mode.getProduit(this.act.snapshot.params.id).subscribe((resul)=>{
      console.log(resul )
      this.ModForm= new FormGroup({
        libelle: new FormControl(resul['libelle']),
        image: new FormControl(resul['image']),
        prix: new FormControl(resul['prix']),
        promotion: new FormControl(resul['promotion']),
        date: new FormControl(resul['date']),
        
      })
     

    } )
  }
  Onmodifier(){
        this.mode.updatVoyagee(this.act.snapshot.params.id,this.ModForm.value).subscribe((res)=>{
        console.log(res,"modifier succesfull")
   })
        }
}
