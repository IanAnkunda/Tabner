import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  users = null;
  searchedKeyword: string;  
  filterMetadata: any = { count: 0 };

  constructor(private userService: UserService) { }


  ngOnInit(): void {
    this.userService.getUsers()
        .pipe(first())
        .subscribe(users => this.users = users);
}


get getfilterMetadata(): any{
  return this.userService.filterMetadata.count;
}


set setFilterMetadata( value: any){
  this.userService.filterMetadata.count = value;
  console.log("set")
}


}
