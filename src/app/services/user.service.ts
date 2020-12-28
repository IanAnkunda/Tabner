import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import {User} from '../_model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  filterMetadata: any = { count: 0 };

  constructor(private httpClient: HttpClient) { }


  url : string = "https://jsonplaceholder.typicode.com/users"
  getUsers()
  {
    return this.httpClient.get<User[]>(this.url);
  }

  getUser(userId) {
    return this.httpClient.get('url' + userId).pipe(
      catchError(this.errorHandl)
    );
  }

  

// Error handling
errorHandl(error) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
  } else if (error.error instanceof ProgressEvent) {
    // Get client-side error
    errorMessage = error.message;
  } else {
    // Get server-side error
    errorMessage = error.error;
    // `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  console.log('>>> erroe message: ', errorMessage);
  console.log('>>> erroe : ', error);
  return throwError(errorMessage);
}

}
