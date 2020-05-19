import { Injectable } from '@angular/core';//получение и передача данных
import { API } from './API';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService extends API{
  header: HttpHeaders;
  url="persons";//ссылка на таблицу данных

  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.header=new HttpHeaders();
    this.header.set('Content-type','application/json')
  }

  async getPersons(){
    return this.get(this.url,this.header).toPromise() //получение данных, обещание(ошибка или данные)
  }

  async postPerson(data){
    return this.post(this.url,data,this.header).toPromise()
  }

  async deletePerson(id){
    return this.delete(`${this.url}/${id}`,this.header).toPromise()
  }

  async getPersonById(id){
    return this.get(`${this.url}/${id}`, this.header).toPromise()
  }

  async putPersons(id, data){
    return this.put(`${this.url}/${id}`,data,this.header).toPromise()
  }
}
