import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Pharmacy from '../models/pharmacies.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PharmaciesService {
  private _url = 'http://localhost:3000/pharmacies';
  constructor(private http: HttpClient) {}

  public fetchPharmacies(): Observable<Pharmacy[]> {
    return this.http.get<Pharmacy[]>(this._url);
  }
}
