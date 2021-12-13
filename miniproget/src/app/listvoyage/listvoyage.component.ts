import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Voyage } from '../voyage/voyage';
import { VoyageService } from '../voyageServer/voyage.service';

@Component({
  selector: 'app-listvoyage',
  templateUrl: './listvoyage.component.html',
  styleUrls: ['./listvoyage.component.css']
})
export class ListvoyageComponent implements OnInit {
 tab:Voyage[]=[];

  constructor(private serv:VoyageService,private route:Router) { }
  ngOnInit()  {
    this.serv.getProduits().subscribe (data => this.tab = data);
  }
 

}
