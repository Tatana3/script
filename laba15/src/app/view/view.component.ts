import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/http.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  persons: any=[{}];
  byFirstName: string="";
  byLastName: string="";

  constructor(
    public http:HttpService//использование функций из этого класса
  ) { 

  }

  async ngOnInit() {
    this.persons= await this.http.getPersons();
    console.log(this.persons)
  }

  async onDelete(id){
    await this.http.deletePerson(id)
    this.persons= await this.http.getPersons();
  }
}

