import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
onSubmit() {

this.link = `mailto:ragulak12301@gmail.com?subject=${this.name}&body=${this.message}`;
window.open(this.link,'_blank')


}

  name !: string;
  email !: string;
  message !: string;
  link !: string;
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
