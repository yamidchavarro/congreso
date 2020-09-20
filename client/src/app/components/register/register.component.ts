import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterService } from "../../services/register.service";
import { ModalComponent } from "../modal/modal.component";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {
  public options = {
    nameComponent: 'register'
  }

  user = {
    name: '',
    last_name: '',
    document: '',
    type_docu_id: 0,
    position: '',
    email: '',
    city_id: 0,
    modality_id: 0,
    sena_center: '',
    email_center: '',
    name_project: '',
    main_theme_id: null,
    project_owner: '',
    summary: '',
    entity: '',
    university_center: '',
    modality_project_id: null,
    url_poster: '',
    create_at: new Date()
  };

  departament = [];
  modality = [];
  typeDocu = [];
  city = [];
  modalityProject: [];
  mainTheme: [];



  constructor(private registerService: RegisterService, private modalService: NgbModal) { }

  ngOnInit() {
    this.getData();
  }

  saveForm() {
    console.log(this.user)
    this.registerService.postData('register', this.user).subscribe((data) => {
      
      alert("Guardado con exito");
      const modalRef = this.modalService.dismissAll();
      
    }, (error) => {
      console.error(error);
    });
  }

  getData() {
    this.registerService.getData('typedocu').subscribe(data => {
      this.typeDocu = data;
    }, err => { console.error(err); });
    this.registerService.getData('modality').subscribe(data => {
      this.modality = data;
    }, err => { console.error(err); });
    this.registerService.getData('departament').subscribe(data => {
      this.departament = data;
    }, err => { console.error(err); });
    this.registerService.getData('modalityproject').subscribe(data => {
      this.modalityProject = data;
    }, err => { console.error(err); });
    this.registerService.getData('maintheme').subscribe(data => {
      this.mainTheme = data;
    }, err => { console.error(err); });

  }
  getCity(id) {
    var data = id.target.value;
    this.registerService.getData('city/' + data).subscribe(data => {
      this.city = data;
    }, err => { console.error(err); });
  }

}
