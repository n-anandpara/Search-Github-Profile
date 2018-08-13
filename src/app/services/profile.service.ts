import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
private username:string;
private clientid = '775600372f4b5754b531';
private clientsecret = 'db779a7b3c7bbd06658ca3c5b5b590f967a013f8';

  constructor(private http:Http) {
    console.log("service is now ready!");
    this.username = "";
   }

getProfileInfo(){
  return this.http.get("https://api.github.com/users/" + this.username + "?clientid=" + this.clientid + "&clientsecret=" + this.clientsecret ).map(res => res.json());
}

getProfileRepos(){
  return this.http.get("https://api.github.com/users/" + this.username + "/repos?clientid=" + this.clientid + "&clientsecret=" + this.clientsecret ).map(res => res.json());
}

updateProfile(username:string){
  this.username = username;
}

}
