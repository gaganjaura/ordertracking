import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Configuration } from '../app/app.constants';

@Injectable()
export class DataService {
    
    private actionUrl: string;
    private apiModelName = new Subject<string>();
    
    constructor(private http: HttpClient, private configuration: Configuration) {       
        this.apiModelName.subscribe(model => {             
            this.actionUrl = this.configuration.ServerWithApiUrl + model + '/'; 
        });         
    }

    public setModel(apiModelName : string){
        this.apiModelName.next(apiModelName);     
    }

    public getAll<T>(): Observable<T> {
        return this.http.get<T>(this.actionUrl);
    }

    public getById<T>(id: string): Observable<T> {
        return this.http.get<T>(this.actionUrl + id);
    }

    public getByQueryString<T>(queryString: string): Observable<T> {
        let apiUrl = this.actionUrl + queryString;
        return this.http.get<T>(apiUrl);
    }

    public add<T>(item: any): Observable<T> {
        //const toAdd = JSON.stringify({ ItemName: itemName });

        return this.http.post<T>(this.actionUrl, JSON.stringify(item));
    }

    public update<T>(id: number, itemToUpdate: any): Observable<T> {
        return this.http
            .put<T>(this.actionUrl + id, JSON.stringify(itemToUpdate));
    }

    public delete<T>(id: number): Observable<T> {
        return this.http.delete<T>(this.actionUrl + id);
    }
}