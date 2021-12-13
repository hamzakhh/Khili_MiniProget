import { Component, OnInit } from '@angular/core';
import { Voyage } from '../voyage/voyage';
import { VoyageService } from '../voyageServer/voyage.service';

@Component({
  selector: 'app-acuuiel',
  templateUrl: './acuuiel.component.html',
  styleUrls: ['./acuuiel.component.css']
})
export class AcuuielComponent implements OnInit {

  tab:Voyage[]=[];
  constructor(private serv:VoyageService) { }


  
  ngOnInit()  {
    this.serv.getProduits().subscribe (data => this.tab = data);

  }


}
