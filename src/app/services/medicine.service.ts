import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Medicine from '../models/medicine.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MedicineService {
  private _url = 'http://localhost:3000/medicines';
  constructor(private http: HttpClient) {}

  public fetchMedicineById(id: Medicine): Observable<Medicine> {
    return this.http.get<Medicine>(`${this._url}/${id}`);
  }

  public fetchMedicineByIdNumber(idNumber: number): Observable<Medicine> {
    return this.http.get<Medicine>(`${this._url}/${idNumber}`);
  }
}
