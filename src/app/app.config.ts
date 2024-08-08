import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"dphuc-d5fb6","appId":"1:873261999239:web:a63cd18f1f9cde7e34c422","storageBucket":"dphuc-d5fb6.appspot.com","apiKey":"AIzaSyDuhmCAwWRW09XeQpqbd3awF7iDJtgmcGg","authDomain":"dphuc-d5fb6.firebaseapp.com","messagingSenderId":"873261999239"})), provideAuth(() => getAuth())]
};
