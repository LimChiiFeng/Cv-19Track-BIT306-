import { Injectable } from '@angular/core';
import { Tester } from './tester.model';

@Injectable({providedIn: 'root'})
export class TestersService {
    testers: Tester [] = [
        {username: 'Tester 1', password:'Tester 1', name: 'Violet',position:'Tester'},
        {username: 'Tester 2', password:'Tester 2', name: 'Ali',position:'Tester'},
        {username: 'Tester 3', password:'Tester 3', name: 'Ahmad',position:'Tester'},
        {username: 'Tester 4', password:'Tester 4', name: 'Kyen',position:'Tester'},
        {username: 'Tester 5', password:'Tester 5', name: 'Kakuya',position:'Tester'},
        {username: 'Tester 6', password:'Tester 6', name: 'Mei Lin',position:'Tester'},
    ];

    getTesters(){
        return this.testers;
    }

    addTester(username:String, password:String, name:String){
        const tester: Tester = {username, password, name, position:"Tester"};
        this.testers.push(tester);
        console.log(this.testers);
        console.log('Record Success!');
    }
    
}