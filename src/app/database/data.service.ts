import { Injectable } from '@angular/core';
import { name } from '../button';
import { email } from '../button';
import { FormGroup } from '../button';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getFormGroup() {
    return email, name;
    }
}
