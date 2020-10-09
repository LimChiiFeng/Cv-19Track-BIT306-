import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({providedIn: 'root'})
export class UsersService {
    users: User[]=[
        {username:'Manager01',password:'Manager01',name:'Ren',type:'Officer',position:'Manager',patientType:null,symptoms:null,centreID:null},
        // {username:'Manager02',password:'Manager02',name:'Mei',type:'Officer',position:'Manager',patientType:null,symptoms:null,centreID:null},
        // {username:'Manager03',password:'Manager03',name:'Kiana',type:'Officer',position:'Manager',patientType:null,symptoms:null,centreID:null},
        {username: 'Tester01', password:'Tester01', name: 'Ali',type:'Officer',position:'Tester',patientType:null,symptoms:null,centreID:null},
        // {username: 'Tester03', password:'Tester03', name: 'Ahmad',type:'Officer',position:'Tester',patientType:null,symptoms:null,centreID:null},
        // {username: 'Tester04', password:'Tester04', name: 'Kyen',type:'Officer',position:'Tester',patientType:null,symptoms:null,centreID:null},
        // {username: 'Tester05', password:'Tester02', name: 'Ali',type:'Officer',position:'Tester',patientType:null,symptoms:null,centreID:null},
        // {username: 'Tester06', password:'Tester03', name: 'Ahmad',type:'Officer',position:'Tester',patientType:null,symptoms:null,centreID:null},
        // {username: 'Tester07', password:'Tester04', name: 'Kyen',type:'Officer',position:'Tester',patientType:null,symptoms:null,centreID:null},

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

    addTester(username:string, password:string, name:string) {
        const user: User = {username,password,name,type:'Officer',position:'Tester',patientType:null,symptoms:null,centreID:null};
        this.users.push(user);
    }
}