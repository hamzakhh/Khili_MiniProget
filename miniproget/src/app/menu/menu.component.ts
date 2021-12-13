import { Component, OnInit } from '@angular/core';
import { Voyage } from '../voyage';
import { VoyageService } from '../voyageServer/voyage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  tab:Voyage[]=[];
  libelle:any;
  constructor(private sr:VoyageService) { }

  ngOnInit(): void {
    this.sr.getProduits().subscribe (data => this.tab = data);
  }
 
}
