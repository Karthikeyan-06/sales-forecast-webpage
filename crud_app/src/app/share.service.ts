import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  constructor() { }

  private siblingMsg = new Subject<string>();

  public getMessage(): Observable<string> {
    return this.siblingMsg.asObservable();
  }

  public updateMessage(message: string): void {
    this.siblingMsg.next(message);
  }
  
}
