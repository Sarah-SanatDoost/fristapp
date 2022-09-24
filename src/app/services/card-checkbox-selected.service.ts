import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardCheckboxSelectedService {

  constructor() { }

  checkboxSelected: number[] = []
}
