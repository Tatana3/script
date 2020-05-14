import { Component } from '@angular/core';
import { Sensor } from './shared/models/sensor.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  sensors: Sensor[] = [];   //массив датчиков

  constructor() {
    for (let i = 1; i < 11; i++) {
      this.sensors.push(new Sensor(i, "Датчик " + i));
    }
    console.log(this.sensors)//проверка
  }
  onDeleteSensor(index: number) {//функция удаления
    this.sensors.splice(index, 1);//удаление/кол-во
  }
  addSensor(name, status) {//добавления
    let newId;
    if(this.sensors.length==0){
      newId=1;
    }
    else{
      newId = this.sensors[this.sensors.length - 1].id + 1;//к последнему id добавляем 1
    }
    this.sensors.push(new Sensor(newId, name.value, status.checked))
  }
}