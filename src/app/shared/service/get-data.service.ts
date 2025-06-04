import { Injectable } from '@angular/core';
import {LibraryInfo} from '../models/library';
import {environment} from '~/src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetData {

  constructor() { }
  async getData(str: string): Promise<LibraryInfo[]> {
    const reqUrl = `https://apidata.mos.ru/v1/datasets/526/rows?$filter=Cells/FullName eq '${str}'&api_key=${environment.apiKey}`;
    const req = await fetch(reqUrl);
    const data = await req.json();
    return data;
  }
}
