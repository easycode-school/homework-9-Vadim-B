import { Component, OnInit } from '@angular/core';
import { User } from './../../interfaces/user';

@Component({
  selector: 'app-home-work',
  templateUrl: './home-work.component.html',
  styleUrls: ['./home-work.component.css']
})
export class HomeWorkComponent implements OnInit {
  public arrExmpl: User[] = [
    {
      name: 'Vadim',
      age: 30,
      rating: 70
    },
    {
      name: 'Olga',
      age: 25,
      rating: 75
    },
    {
      name: 'Ivan',
      age: 33,
      rating: 80
    },
    {
      name: 'Pedro',
      age: 39,
      rating: 60
    }
  ];

  public field;
  public trend;

  public dateExmpl = new Date(2019, 1, 21, 10, 0).getTime();

  constructor() { }

  ngOnInit() { }

}
