// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class StorageService {

//   constructor() { }
// }
import { Injectable } from "@angular/core";
// import "rxjs/add/operator/share";
import { Observable } from "rxjs";

export abstract class StorageService {
  public abstract get(): Storage;
}

// tslint:disable-next-line:max-classes-per-file
@Injectable()
export class LocalStorageServie extends StorageService {
  public get(): Storage {
    return localStorage;
  }
}
