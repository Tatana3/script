export interface MyWorker {
  id?: number;
  name: string;
  surname: string;
  phone: string;
  type: number;
}

export enum MyWorkerType {
  programmer,
  designer,
  copywriter,
  manager,
}

export let MyWorkersDatabase: MyWorker[] = [
  { id: 1, name: 'Иван', surname: 'Иванов', phone:"9210000001", type: 0 },
  { id: 2, name: 'Петр', surname: 'Петров', phone:"9210000002", type: 1 },
  { id: 3, name: 'Сидор', surname: 'Сидоров', phone:"9210000003", type: 2 },
  { id: 4, name: 'Василий', surname: 'Васильев', phone:"9210000004", type: 3 },
];
