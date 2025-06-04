import { TestBed } from '@angular/core/testing';
import {GetData} from './get-data.service';


describe('Getdata', () => {
  let service: GetData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
