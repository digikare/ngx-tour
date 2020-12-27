import { Injectable } from '@angular/core';
import { TourService } from '@digikare/ngx-tour-core';

import { INgbStepOption } from './step-option.interface';

@Injectable({
    providedIn: 'root',
  })
export class NgbTourService extends TourService<INgbStepOption> {}
