import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from "../modal/modal.component";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public options = {
    nameComponent: 'registrar'
  }

  constructor(private modalService: NgbModal) { }

  ngOnInit() { }

  public openModal(name): void {
    this.options.nameComponent = name;
    const modalRef = this.modalService.open(ModalComponent, { windowClass: 'modal-holder', centered: true });
    modalRef.componentInstance.options = this.options;
  }
}
