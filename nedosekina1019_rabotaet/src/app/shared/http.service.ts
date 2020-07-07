import { Injectable } from '@angular/core';
import { API } from './API';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService extends API{

  header: HttpHeaders
  url="products";//ссылка на таблицу данных

  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.header=new HttpHeaders();
    this.header.set('Content-type','application/json')
  }

  async getProducts(){
    return this.get(this.url,this.header).toPromise() //получение данных, обещание(ошибка или данные)
  }

  async postProducts(data){
    return this.post(this.url,data,this.header).toPromise()
  }

  async deleteProduct(id){
    return this.delete(`${this.url}/${id}`,this.header).toPromise()
  }

  async getProductById(id){
    return this.get(`${this.url}/${id}`, this.header).toPromise()
  }

  async putProducts(id, data){
    return this.put(`${this.url}/${id}`,data,this.header).toPromise()
  }
}

