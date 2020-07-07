import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/http.service';

@Component({
  selector: 'app-spisok',
  templateUrl: './spisok.component.html',
  styleUrls: ['./spisok.component.css']
})
export class SpisokComponent implements OnInit {

  products: any=[{}];
  
  byKategori: string="";
  byKolich: string="";

  constructor(
    public http:HttpService
  ) { }
  
  async ngOnInit(){
    this.products = await this.http.getProducts();
    console.log(this.products)
  }

  //удаление
  async onDelete(id){
    await this.http.deleteProduct(id);
    this.products = await this.http.getProducts();
  }
  
}
