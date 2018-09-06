import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';

const apiURL: string = 'http://localhost:9865/api/users';


@Injectable()
export class UserService {
user : any;
  constructor(
    private http: HttpClient
  ) { }

  createUser(value){
    return this.http.post(apiURL, value);      
   }

  
  getUser(id?){
    let url = apiURL;
    if(id){
      url = `${url}/${id}`
    }
    return this.http.get(url);
  }

  getUserById(id){
    return this.getUser(id);
  }

  deleteUser(id){
    const url = `${apiURL}/${id}`;    
    return this.http.delete(url);
  }

  updateUser(id, data){
    const url = `${apiURL}/${id}`;
    return this.http.put(url, data);    
  }

}
