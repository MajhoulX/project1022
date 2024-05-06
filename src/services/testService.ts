import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class TestService {
    constructor() {
      this.rnd = Math.random();
    }
  
    private rnd: number;
  
    getRand(): number {
      return this.rnd;
    }
  }