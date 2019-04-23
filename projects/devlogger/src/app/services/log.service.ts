import { Injectable } from '@angular/core';
import { Log } from '../models/Log';
@Injectable()
export class LogService {
  logs: Log[];
  constructor() {
    this.logs = [
      { id: '1', text: 'Generated Components', date: new Date("12/12/2018 12:45:23") },
      { id: '2', text: 'Added Bootstrap', date: new Date("01/12/2019 02:45:23") },
      { id: '3', text: 'Added logs Component', date: new Date("02/12/2019 04:25:23") }
    ]
  }

  getLogs(){
    return this.logs;
  }
}
