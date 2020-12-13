import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private url = 'http://localhost:4100/address'

  constructor(
    private http: HttpClient) { }
  
  getAddresses() {
 
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    }
    return this.http.get(this.url, httpOptions)
  }

  deleteAddress(id: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    }
    return this.http.delete(this.url + '/' + id, httpOptions)
  }

  addAddress(title: string, line1: string, line2: string, city: string, state: string, zipCode: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    }

    const body = {
      title: title,
      line1: line1,
      line2: line2,
      city: city,
      state: state,
      zipCode: zipCode
    }

    return this.http.post(this.url, body, httpOptions)
  }

  editAddress(id:number,title: string, line1: string, line2: string, city: string, state: string, zipCode: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    }

    const body = {
      title: title,
      line1: line1,
      line2: line2,
      city: city,
      state: state,
      zipCode: zipCode
    }

    return this.http.put(this.url+"/"+id, body, httpOptions)
  }
}