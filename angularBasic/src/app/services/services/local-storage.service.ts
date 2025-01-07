import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {}

  //save data into local storage
  setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  //get/retrive data from local storage
  getItem(key: string) {
    const getItemKey = localStorage.getItem(key);
    console.log('item', getItemKey);
    return getItemKey ? JSON.parse(getItemKey) : null;
  }

  //clear single key/value data from local storage
  clearData(key: string) {
    localStorage.removeItem(key);
  }

  //clear all data in local storage
  clearAll() {
    localStorage.clear();
  }
}
