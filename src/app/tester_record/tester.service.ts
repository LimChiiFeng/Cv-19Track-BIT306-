import { Injectable } from '@angular/core';
import { Tester } from './tester.model';

@Injectable({providedIn: 'root'})
export class TestersService {
    testers: Tester [] = [
        // {username: 'Tester 1', password:'Tester 1', name: 'Violet',position:'Tester'},
        // {username: 'Tester 2', password:'Tester 2', name: 'Ali',position:'Tester'},
        // {username: 'Tester 3', password:'Tester 3', name: 'Ahmad',position:'Tester'},
        // {username: 'Tester 4', password:'Tester 4', name: 'Kyen',position:'Tester'},
        // {username: 'Tester 5', password:'Tester 5', name: 'Kakuya',position:'Tester'},
        // {username: 'Tester 6', password:'Tester 6', name: 'Mei Lin',position:'Tester'},
        // {username: 'Tester 7', password:'Tester 7', name: 'Muhmad',position:'Tester'},
        // {username: 'Tester 8', password:'Tester 8', name: 'Jack',position:'Tester'},
        // {username: 'Tester 9', password:'Tester 9', name: 'Alice',position:'Tester'},
        // {username: 'Tester 10', password:'Tester 10', name: 'Elise',position:'Tester'},
        // {username: 'Tester 11', password:'Tester 11', name: 'LiSA',position:'Tester'},
        // {username: 'Tester 12', password:'Tester 12', name: 'Diablo',position:'Tester'},
        // {username: 'Tester 13', password:'Tester 13', name: 'Rein',position:'Tester'},

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