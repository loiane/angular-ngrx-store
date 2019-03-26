import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {
  MatToolbarModule,
  MatCardModule,
  MatInputModule,
  MatListModule,
  MatButtonModule,
  MatIconModule,
  MatCheckboxModule,
  MatProgressSpinnerModule
} from '@angular/material';

@NgModule({
  exports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatProgressSpinnerModule
  ]
})
export class SharedModule {}
