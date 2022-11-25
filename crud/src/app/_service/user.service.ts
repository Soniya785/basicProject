import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DatabaseServiceService } from './database.service';
import { UserData } from './users.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API_BASE_PATH: string = 'http://localhost:4200/api/'

  constructor(private _httpService: HttpClient, private _dataBaseService: DatabaseServiceService) { }

  getUsers() {
    return this._httpService.get(this.API_BASE_PATH + "users")
  }

  getUser(userId: number) {
    return this._httpService.get(`${this.API_BASE_PATH}users/${userId}`)

  }

  deleteUser(userId: number) {
    return this._httpService.delete(`${this.API_BASE_PATH}users/${userId}`)
  }

  addUser(user: UserData) {
    return this._httpService.post(`${this.API_BASE_PATH}users`, user)
  }

  updateUser(user: UserData) {
    return this._httpService.put(`${this.API_BASE_PATH}users/${user.id}`, user)
  }
}