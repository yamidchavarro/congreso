import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() public options;
  constructor() { }

  ngOnInit(): void {
    if (this.options.nameComponent == 'register'){
      console.log('entro');
    }
  }
}
