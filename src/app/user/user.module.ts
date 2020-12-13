import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AddressListComponent } from './address-list/address-list.component';
import { AddressAddComponent } from './address-add/address-add.component';
import { AddressEditComponent } from './address-edit/address-edit.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { AddressService } from './address.service';


@NgModule({
  declarations: [AddressListComponent, AddressAddComponent, AddressEditComponent, ProfileComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ],
  providers:[
    AddressService
  ]
})
export class UserModule { }