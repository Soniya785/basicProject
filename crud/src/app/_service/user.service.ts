import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DatabaseServiceService } from './database.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API_BASE_PATH : string = 'http://localhost:4200/api/'

  constructor(private _httpService : HttpClient, private _dataBaseService : DatabaseServiceService) { }

  getUsers()
{
  return this._httpService.get(this.API_BASE_PATH + "users")
}
}
