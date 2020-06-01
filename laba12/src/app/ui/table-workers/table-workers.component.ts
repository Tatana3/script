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
  @Output() deleteWorker = new EventEmitter<number>();
  myWorkerType = MyWorkerType;
  editWorker = -1;
  name;
  surname;
  type = 0;



  constructor(
    
    ) {}

  ngOnInit(): void {

  }

  onDeleteWorker(id: number) {
    this.deleteWorker.emit(id);
  }

  onEdit(id){
    this.editWorker = id;
    this.name = this.workers[this.editWorker-1].name;
    this.surname = this.workers[this.editWorker-1].surname;
    
    console.log(this.name, this.surname, this.workers[this.editWorker-1]);
  }
  
  onEditWorker(){
    if(this.name==null||this.name==""||this.surname==null||this.surname==""){
      return;
      }
      else{
        let worker = this.workers[this.editWorker-1];
        worker.name = this.name;
        worker.surname = this.surname;
        worker.type = this.type;
        this.editWorker = -1;
      }
  }
 
}
