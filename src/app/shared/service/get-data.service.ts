import { Injectable } from '@angular/core';
import {LibraryInfo} from '../models/library';
import {environment} from '~/src/environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetData {

  constructor(private http: HttpClient) {}

  getData(str: string): Observable<LibraryInfo[]> {
    const reqUrl = `https://apidata.mos.ru/v1/datasets/526/rows?$filter=Cells/FullName eq '${str}'&api_key=a049ed3a-446a-4bf7-8b29-a3acf0fc3e65`;
    const data2: Observable<LibraryInfo[]> = this.http.get<LibraryInfo[]>(reqUrl);
    return data2
    }
  }
