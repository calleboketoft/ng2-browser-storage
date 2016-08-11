import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'

import { provideStore } from '@ngrx/store'
import { exampleDbConfig } from './example-db.config'
import {
  cbsReducer,
  initializeCbs,
  getInitialCbsState,
  CbsModule
} from '../../co-browser-storage'

initializeCbs(exampleDbConfig)

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CbsModule],
  bootstrap: [AppComponent],
  providers: [
    provideStore({
      cbsReducer
    }, {
      cbsReducer: getInitialCbsState()
    })
  ]
})
export class AppModule { }
