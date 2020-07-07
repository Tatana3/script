import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../shared/http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  formEdit: FormGroup;
  product: any;
  id;
  disabled=false;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public http:HttpService
  ) { 

    this.activeRouter.params.subscribe(param=>{
      this.id=param.id
    })
  }

  async ngOnInit(){
    this.getProduct(this.id).then(()=>{
      this.formEdit = new FormGroup({
        name: new FormControl({value: this.product.name, disabled: this.disabled}, [Validators.required]),
        artic: new FormControl({value: this.product.artic, disabled: this.disabled}, [Validators.required,Validators.pattern("^[0-9]{2}-[0-9]{4}")]),
        price: new FormControl({value: this.product.price, disabled: this.disabled}, [Validators.required]),
        manufact: new FormControl({value: this.product.manufact, disabled: this.disabled}, [Validators.required]),
        type: new FormControl({value: this.product.type, disabled: this.disabled}, [Validators.required]),
        poids: new FormControl({value: this.product.poids, disabled: this.disabled}, [Validators.required]),
        kolich: new FormControl({value: this.product.kolich, disabled: this.disabled}, [Validators.required]),
      })
    })
  }

  async getProduct(id){
    try{
      this.product = await this.http.getProductById(id)
    }
    catch(e){
      console.log(e)
    }
  }

  async onEdit(){
    await this.http.putProducts(this.id,this.formEdit.value);
    this.router.navigate(["spisok"])//возвращение
  }

  async onDelete(id){
    await this.http.deleteProduct(id);
    this.product = await this.http.getProducts();
    await this.router.navigate(["spisok"])
  }
}
