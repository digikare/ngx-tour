import { Injectable } from '@angular/core';
import { TourService } from '@digikare/ngx-tour-core';

import { INgxmStepOption } from './step-option.interface';

@Injectable()
export class NgxmTourService extends TourService<INgxmStepOption> {}
