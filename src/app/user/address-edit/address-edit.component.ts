import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-address-edit',
  templateUrl: './address-edit.component.html',
  styleUrls: ['./address-edit.component.css']
})
export class AddressEditComponent implements OnInit {

  line1 = ''
  line2 = ''
  city = ''
  state = ''
  title = ''
  zipCode = ''
  id=0

  constructor(
    private service: AddressService,
    private toastr: ToastrService,
    private modal:NgbActiveModal) { }

  ngOnInit(): void {
  }

  onCancel() {
    this.modal.dismiss('cancel')
  }

  onEdit() {
    if (this.title.length == 0) {
      this.toastr.warning('please enter title')
    } else if (this.line1.length == 0) {
      this.toastr.warning('please enter Line1')
    }else if (this.line2.length == 0) {
      this.toastr.warning('please enter Line2')
    }else if (this.city.length == 0) {
      this.toastr.warning('please enter city')
    }else if (this.state.length == 0) {
      this.toastr.warning('please enter state')
    } else if (this.zipCode.length == 0) {
      this.toastr.warning('please enter zipcode')
    }else {
      this.service
        .editAddress(this.id, this.title,this.line1,this.line2,this.city,this.state,this.zipCode)
        .subscribe(response => {
          this.modal.dismiss('ok')
        })
    }
  }
  }
