import { Injectable } from '@angular/core';
import { API } from './API';
import { HttpHeaders, HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WorkersService extends API{
  find(arg0: (worker: any) => boolean) {
    throw new Error("Method not implemented.");
  }

  header: HttpHeaders;
  url = "workers";
  
  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.header = new HttpHeaders();
    this.header.set('Content-type','application/json')
  }

  async getWorker(){
    return this.get (this.url, this.header).toPromise();
  }

  async postWorker(data) {
    return this.post (this.url, data, this.header).toPromise();
  }

  async putWorker(id: number, data) {
    return this.put (`${this.url}/${id}`, data, this.header).toPromise();
  }

  async deleteWorker(id: number) {
    return this.delete (`${this.url}/${id}`, this.header).toPromise();
  }
}

