import { Injectable } from '@angular/core';
import { BService } from '@wsh/common/src/lib/feature-b';

@Injectable({
  providedIn: 'root'
})
export class AService {

  constructor(private b: BService) { }
}
