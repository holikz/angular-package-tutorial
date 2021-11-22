import { Injectable } from '@angular/core';
import { CService } from '@wsh/common/src/lib/feature-c';

@Injectable({
  providedIn: 'root'
})
export class BService {

  constructor(private c: CService) { }
}
