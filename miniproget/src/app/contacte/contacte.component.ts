import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Contacte } from '../contactClasse/contacte';
import { ContactService } from '../contactServer/contact.service';

@Component({
  selector: 'app-contacte',
  templateUrl: './contacte.component.html',
  styleUrls: ['./contacte.component.css']
})
export class ContacteComponent implements OnInit {
  tab:Contacte[]=[];
  ContactForm: FormGroup = new FormGroup( { } );
  constructor(private sev:ContactService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.ContactForm=this.fb.group({
      id :[0],
      nom :[''],
      email:[''],
     message:[''],
    })
    this.sev.getMessage().subscribe (dat => this.tab = dat);
  }
  EnvoyerMessage(){
    
      this.sev.addMessagee(this.ContactForm.value).subscribe(dat =>{ console.log(dat);
      this.tab.push(dat)
    })

 }
  
}
