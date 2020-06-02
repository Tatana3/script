import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MyWorker, MyWorkerType } from 'src/app/shared/worker.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-table-workers',
  templateUrl: './table-workers.component.html',
  styleUrls: ['./table-workers.component.css'],
})
export class TableWorkersComponent implements OnInit {
  @Input() title: string;
  @Input() workers: MyWorker[] = [];
  myWorkerType = MyWorkerType;
  editWorker = -1;
  name;
  surname;
  phone;
  type = 0;
  

  @Output() deleteWorker = new EventEmitter<number>();

  constructor(
    
    ) {}

  ngOnInit(): void {

  }

  onDeleteWorker(id: number) {
    this.deleteWorker.emit(id);
  }

  onEdit(id){
    let w = this.workers.find(worker => worker.id === id);
    this.editWorker = w.id;
    this.name = w.name;
    this.surname = w.surname;
    this.phone = w.phone;
    //console.log(this.name, this.surname, this.workers[this.editWorker-1]);
  }
  
  onEditWorker(id){
    if(this.name==null||this.name==""||this.surname==null||this.surname==""){
      return;
      }
      else{
        let w = this.workers.find(worker => worker.id === id);
        let worker = w;
        worker.name = this.name;
        worker.surname = this.surname;
        worker.phone = this.phone;
        worker.type = this.type;
        this.editWorker = -1;
      }
  }
 
}
