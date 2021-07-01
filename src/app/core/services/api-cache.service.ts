import { HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash';

// Maximum cache duration is 10 minutes
const cacheDuration = 600000;

interface ICacheMap {
  event: HttpEvent<any>;
  lastRead: number;
}

@Injectable({
  providedIn: 'root'
})
export class ApiCacheService {
  public requests = new Map<string, ICacheMap>();

  get(urlWithParams: string, body?: any) {
    const request = this.requests.get(this.getSelector(urlWithParams, body));

    if (request) {
      this._removeExpiredRequests();

      request.lastRead = Date.now();
      this.requests.set(this.getSelector(urlWithParams, body), request);
      return request.event;
    }

    return null;
  }

  add(cachedData: any, urlWithParams: string, body?: any) {
    this.requests.set(this.getSelector(urlWithParams, body), {
      event: cloneDeep(cachedData),
      lastRead: Date.now()
    });

    this._removeExpiredRequests();
  }

  delete(urlWithParams: string, body?: any) {
    this.requests.delete(this.getSelector(urlWithParams, body));
  }

  // Clears whole cache
  deleteAll() {
    this.requests.clear();
  }

  getSelector(urlWithParams: string, body?: any) {
    return `Url: ${JSON.stringify(urlWithParams)}, Body: ${JSON.stringify(body || {})}`;
  }

  private _removeExpiredRequests() {
    const expired = Date.now() - cacheDuration;
    this.requests.forEach((request, key) => {
      if (request.lastRead < expired) {
        this.requests.delete(key);
      }
    });
  }
}
