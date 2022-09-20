import Dexie, { DexieOptions, Table } from 'dexie';
import { Todo } from 'interfaces/todo';


export class TodoDB extends Dexie {

  todo!: Table<Todo, number>; 

  constructor(options?: DexieOptions) {
    super('TodoDB', options);
    this.version(1).stores({
      todo: '++id, status',
    });
  }
}

export const db = new TodoDB();