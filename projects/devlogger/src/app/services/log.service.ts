import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { Log } from '../models/Log';

@Injectable()
export class LogService {
  logs: Log[];

  private logSource = new BehaviorSubject<Log>({ id: null, text: null, date: null });
  selectedLog = this.logSource.asObservable();

  private stateSource = new BehaviorSubject<boolean>(true);
  stateClear = this.stateSource.asObservable();

  constructor() {
    // this.logs = [
    //   { id: '1', text: 'Generated Components', date: new Date("12/12/2018 12:45:23") },
    //   { id: '2', text: 'Added Bootstrap', date: new Date("01/12/2019 02:45:23") },
    //   { id: '3', text: 'Added logs Component', date: new Date("02/12/2019 04:25:23") }
    // ]
    this.logs = [];
  }

  getLogs(): Observable<Log[]> {
    if (localStorage.getItem('logs')) {
      this.logs = [];
    } else {
      this.logs = JSON.parse(localStorage.getItem('logs'))
    }
    return of(this.logs.sort((a, b) => {
      return b.date - a.date;
    }));
  }

  setFormLog(log: Log) {
    this.logSource.next(log);
  }

  addLog(log: Log) {
    this.logs.unshift(log);
    localStorage.setItem('logs', JSON.stringify(this.logs))
  }
  
  updateLog(log: Log) {
    this.logs.forEach((cur, index) => {
      if (log.id === cur.id) {
        this.logs.splice(index, 1);
      }
    })
    this.addLog(log);
    localStorage.setItem('logs', JSON.stringify(this.logs))
  }

  deleteLog(log: Log) {
    this.logs.forEach((cur, index) => {
      if (log.id === cur.id) {
        this.logs.splice(index, 1);
      }
    })
    localStorage.setItem('logs', JSON.stringify(this.logs))
  }

  clearState() {
    this.stateSource.next(true);
  }
}
