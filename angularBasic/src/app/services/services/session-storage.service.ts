import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor() {}

  //save data into session storage
  setItem(key: string, value: any) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  //get/retrive data from session storage
  getItem(key: string) {
    const getItemKey = sessionStorage.getItem(key);
    console.log('item', getItemKey);
    return getItemKey ? JSON.parse(getItemKey) : null;
  }

  //clear single key/value data from session storage
  clearData(key: string) {
    sessionStorage.removeItem(key);
  }

  //clear all data in session storage
  clearAll() {
    sessionStorage.clear();
  }
}
