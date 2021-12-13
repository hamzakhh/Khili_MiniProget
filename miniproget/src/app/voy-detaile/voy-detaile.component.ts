import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Voyage } from '../voyage';
import { VoyageService } from '../voyageServer/voyage.service';

@Component({
  selector: 'app-voy-detaile',
  templateUrl: './voy-detaile.component.html',
  styleUrls: ['./voy-detaile.component.css']
})
export class VoyDetaileComponent implements OnInit {
  tab:Voyage ;

  id ='';
  do:any;
  constructor(private activatedRoute:ActivatedRoute,private ser:VoyageService) { 
  this.activatedRoute.params.subscribe(quer=>{
    this.id=quer.id;
  })
  this.ser.getProduit(this.id).subscribe(rep=>{
    this.do=rep;
  })
}
  ngOnInit(): void {
  
  }
}

