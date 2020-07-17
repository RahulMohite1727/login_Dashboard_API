import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatButtonModule, MatFormFieldModule, MatTableModule, MatToolbarModule, MatCardModule, MatMenuModule, MatDialogModule, MatSortModule, MatProgressSpinnerModule, MatPaginatorModule, MatCheckboxModule, MatRippleModule, MatStepperModule, MatExpansionModule, MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonToggleModule, MatChipsModule, MatDividerModule, MatGridListModule, MatListModule, MatProgressBarModule, MatRadioModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatTabsModule, MatTooltipModule, MatTreeModule, MatSnackBar, } from '@angular/material';


import { LoginComponent } from './login/login.component';
import { ServiceWorkerModule, SwUpdate, SwPush } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { httpInterceptorProviders } from './Http-Interceptor';
import { AuthGuard } from './login/auth.guard';



@NgModule({
  exports: [
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSortModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatRippleModule,
    MatPaginatorModule,
    MatStepperModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatProgressBarModule,
    MatRadioModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTabsModule,
    MatTooltipModule,
    MatTreeModule,
    MatExpansionModule,
  ],

})
export class MaterialModule { }

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: true }),
    BrowserAnimationsModule,
  ],
  providers: [AuthGuard,
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(update: SwUpdate, push: SwPush, snackbar: MatSnackBar) {
    update.available.subscribe(update => {
      console.log('update available')
      const snack = snackbar.open('update available', 'Reload');
      snack
        .onAction()
        .subscribe(() => {
          window.location.reload();
        })
    });
    push.messages.subscribe(msg => {
      console.log("msg ", msg);
      snackbar.open(JSON.stringify(msg))
    })
    const key = 'BORd8emxisiLLNXxyUk9edEV-l2WR8CIMyPMltEHIp_HembC4FVivCNpPAyNH_Y9zsr7Pcb0TGf8k-LR1WbnJrw'
    push.requestSubscription({ serverPublicKey: key })
      .then(pushSubscription => {
        console.log("pushSubscription ", pushSubscription.toJSON());
      })
  }
}
