import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import {MyPreset} from './preset';
import { provideHttpClient } from '@angular/common/http';
import { NgxSpinnerModule  } from 'ngx-spinner';

export const appConfig: ApplicationConfig = {
  providers: [
      provideZoneChangeDetection({ eventCoalescing: true }),
      provideRouter(routes),
      provideHttpClient(),
      provideClientHydration(withEventReplay()),
        provideAnimationsAsync(),
        importProvidersFrom(NgxSpinnerModule.forRoot({ type: 'ball-atom' })),
        providePrimeNG({
            theme: {
                preset: MyPreset
            }
        })
    
    ]
};
