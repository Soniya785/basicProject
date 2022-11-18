import { InMemoryDbService } from 'angular-in-memory-web-api';
import { UserData } from './users.interface';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DatabaseServiceService implements InMemoryDbService {

  constructor() { }

  createDb() {
    let users: UserData[] = [
      { id: 1, title: 'Ms', fname: 'Soniya', lname: 'khiwal', dob: '02/01/1999', email: 'soniya@gmail.com', password: 12345, acceptTerm: true },
      { id: 2, title: 'Mrs', fname: 'Bhumi', lname: 'Nautiyal', dob: '05/02/1990', email: 'Bhumi@gmail.com', password: 123456, acceptTerm: true },
      { id: 3, title: 'Mr', fname: 'Shivam', lname: 'Updhayay', dob: '26/03/1995', email: 'Shivam@gmail.com', password: 1234675, acceptTerm: true },
      { id: 4, title: 'Mrs', fname: 'Dolly', lname: 'Tyagi', dob: '17/04/1995', email: 'Dolly@gmail.com', password: 123465, acceptTerm: true },
      { id: 5, title: 'ms', fname: 'Rupma', lname: 'Singh', dob: '07/05/1996', email: 'Rupma@gmail.com', password: 1237845, acceptTerm: true },

    ];
    return { users }
  }
  
}