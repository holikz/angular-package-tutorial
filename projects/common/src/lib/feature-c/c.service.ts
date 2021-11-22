import { Injectable } from '@angular/core';
//import { format } from 'date-fns';

import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class CService {

  //public date = format(new Date(), 'yyyy-mm-dd');

  public date = moment()

  constructor() { }
}
