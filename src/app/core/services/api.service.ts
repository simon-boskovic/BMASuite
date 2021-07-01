import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private _http: HttpClient) {}

  get<T>(urlPath: string, loadFromCache = true, params?: HttpParams): Observable<T> {
    return this._http.get<T>(urlPath.replace(/\s/g, ''), {
      headers: { loadFromCache: loadFromCache.toString() },
      params: params
    });
  }

  delete<T>(urlPath: string, loadFromCache = true, body: {} = null): Observable<T> {
    const options = { headers: { loadFromCache: loadFromCache.toString() } };
    if (body) {
      options['body'] = body;
    }
    return this._http.delete<T>(urlPath.replace(/\s/g, ''), options);
  }

  put<T>(urlPath: string, body: {} = {}, loadFromCache = true): Observable<T> {
    return this._http.put<T>(urlPath.replace(/\s/g, ''), body, {
      headers: { loadFromCache: loadFromCache.toString() }
    });
  }

  post<T>(urlPath: string, body: {} = {}, loadFromCache = true): Observable<T> {
    return this._http.post<T>(urlPath.replace(/\s/g, ''), body, {
      headers: { loadFromCache: loadFromCache.toString() }
    });
  }
}
