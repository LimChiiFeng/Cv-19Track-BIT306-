import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({providedIn: 'root'})
export class UsersService {
    users: User[]=[
        {username:'Manager01',password:'Manager01',name:'Ren',type:'manager',position:'manager',patientType:null,symptoms:null,centreID:null}
    ];
    
    getUser(){
        return this.users;
    }

    checkUser(username:string){{
        var userObj: User;
        this.users.forEach(user=>{
            if(user.username== username){
                userObj = user;
            }
        })
        return userObj;
    }}
}