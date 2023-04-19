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

export interface ItemsMenu {
  id: number;
  category_item_menu_id: number;
  company_id: number;
  name: string;
  description: string;
  value: string;
  url_image: string;
}

export interface CompanyItem {
  id: number;
  name: string;
  company_id: number;
  items_menu: ItemsMenu[]
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
  
  getCompanyItems(id: string, search = ''): Observable<CompanyItem[]> {
    return this.http.get<CompanyItem[]>(environment.baseUrl + 'api/company/' + id + '/items-menu')
    .pipe(
      tap(_ => console.log(`Company items fetched`)),
      catchError(this.handleError<CompanyItem[]>(`Get company items`))
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
