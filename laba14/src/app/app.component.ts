import { Component, OnInit} from '@angular/core';
import {
  MyWorker,
  MyWorkersDatabase,
  MyWorkerType,
} from './shared/worker.model';
import { isNullOrUndefined } from 'util';
import { WorkersService } from './shared/workers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})




export class AppComponent implements OnInit{
  title = 'Список сотрудников';
  workers: any;
  myWorkerType = MyWorkerType;

  constructor(private workerService: WorkersService) {

  }

  async ngOnInit() {
    
    this.getData();
  }

  getByType(type: number) {
    return this.workers.filter((worker) => worker.type === type);
  }

  async onDeleteById(event:number) {
    try {
      
      await this.workerService.deleteWorker(event);   
      } catch (err) {
        console.error(err);
      } finally {
        this.getData(); 
      }
  }

  async onAddWorker(event: MyWorker) {
    try {
      console.log(event);
      await this.workerService.postWorker(event);
    } catch (err) {
      console.error(err);
    } finally {
      this.getData();
    }
  }

  async getData() {

    try {

      this.workers = await this.workerService.getWorker();

    } catch (err) {
      console.error(err);
    }
  }
}
