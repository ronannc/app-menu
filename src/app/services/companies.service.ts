import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from "rxjs";
import {catchError, tap} from 'rxjs/operators';
import {environment} from "../../environments/environment";

export interface Company {
  id: number;
  name: string;
  primary_color: string;
  description: string;
  url_logo: string;
  star_hours: string;
  finish_hours: string;
}

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
  
  constructor(private http: HttpClient) { }
  
  getCompanies(params: any): Observable<Company[]> {
    return this.http.get<Company[]>(environment.baseUrl + 'api/companies', {params})
    .pipe(
      tap(_ => console.log(`Companies fetched`)),
      catchError(this.handleError<Company[]>(`Get companies`))
    );
  }
  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
