import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/data/services/api/users.service';
import { User } from './user-control.metadata';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-control',
  templateUrl: './user-control.component.html',
  styleUrls: ['./user-control.component.scss'],
})
export class UserControlComponent implements OnInit {
  public users!: User[];
  public newUser: User = {
    _id: '',
    nameUser: '',
    email: '',
    password: '',
    roles: {
      admin: false,
      cook: false,
      waiter: false,
    },
    image: '',
  };

  public arrayRole: string[] = [];
  public nameUser: string = '';
  public emailUser: string = '';
  public optionSelected: string = '';
  public optionSelectedRole: string = '';
  public nameUserUpdate: string = '';
  public emailUserUpdate: string = '';
  public passwordUserUpdate: string = '';
  public passwordUser: string = '';
  public selecte: any;
  public htmlStr: string = '';
  public enabledInput:boolean=true;
  closeResult = '';
  comment = '';
  setcomment = '';
  flag = false;
  public UserForm!: FormGroup;
  constructor(
    public userService: UsersService,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    public router: Router
  ) {}
  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((data: any) => {
      this.users = data;
    });
    this.arrayRole = ['Jefe de cocina', 'Mesero', 'Administrador'];
    this.optionSelected = 'Seleccione Rol';
  }

  capturar(user: any) {
    if (user.roles.admin == true) {
      this.optionSelectedRole = 'Administrador';
    }
    if (user.roles.cook == true) {
      this.optionSelectedRole = 'Jefe de cocina';
    }
    if (user.roles.waiter == true) {
      this.optionSelectedRole = 'Mesero';
    }
    this.nameUserUpdate = user.nameUser;
    this.emailUserUpdate = user.email;
  }
  updateUser(updateUser: any) {
    updateUser.nameUser = this.nameUserUpdate;
    updateUser.email = this.emailUserUpdate;

    switch (this.optionSelectedRole) {
      case 'Jefe de cocina':
        updateUser.roles = { admin: false, waiter: false, cook: true };
        updateUser.image = '../../assets/cook-avatar.png';
        break;
      case 'Mesero':
        updateUser.roles = { admin: false, waiter: true, cook: false };
        updateUser.image = '../../assets/mesero-avatar.png';
        break;
      case 'Administrador':
        updateUser.roles = { admin: true, waiter: false, cook: false };
        updateUser.image = '../../assets/admin-avatar.png';
        break;
    }
    if(this.passwordUserUpdate!=''){
      updateUser.password = this.passwordUserUpdate;
      this.userService.putUserApi(updateUser, updateUser._id).subscribe();
    }else{
      delete updateUser.password;
      this.userService.putUserApi(updateUser, updateUser._id).subscribe(()=>{
        this.userService.getAllUsers().subscribe((data: any) => {
          this.users = data;
        });
      });
    }
    this.flag = false;
    this.passwordUserUpdate='';
  }
  cancelUpdate(){
    this.flag = false;
    this.passwordUserUpdate='';
  }
  updatePassword(){
    this.enabledInput=false;

  }
  changeFlag(){
    this.flag =!this.flag;
  }

  addUser() {
    this.newUser={ _id: '',
    nameUser: '',
    email: '',
    password: '',
    roles: {
      admin: false,
      cook: false,
      waiter: false,
    },
    image: '',}
    this.newUser.nameUser = this.nameUser;
    this.newUser.email = this.emailUser;
    this.newUser.password = this.passwordUser;
    switch (this.optionSelected) {
      case 'Jefe de cocina':
        this.newUser.roles = { admin: false, waiter: false, cook: true };
        this.newUser.image = '../../assets/cook-avatar.png';
        break;
      case 'Mesero':
        this.newUser.roles = { admin: false, waiter: true, cook: false };
        this.newUser.image = '../../assets/mesero-avatar.png';
        break;
      case 'Administrador':
        this.newUser.roles = { admin: true, waiter: false, cook: false };
        this.newUser.image = '../../assets/admin-avatar.png';
        break;
    }
    this.userService.postUserApi(this.newUser).subscribe(()=>{
      this.userService.getAllUsers().subscribe((data: any) => {
        this.users = data;
      });
    });
    this.cleanUserForm();

  }
  deleteUser(idUser: string) {
    this.userService.deleteUserApi(idUser).subscribe(()=>{
      this.userService.getAllUsers().subscribe((data: any) => {
        this.users = data;
      });
    });
    const data = this.users.filter((item: any) => item._id !== idUser);
    this.users = data;

  }
  cleanUserForm() {
    this.nameUser = '';
    this.emailUser = '';
    this.passwordUser = '';
    this.optionSelected = 'Seleccione Rol';
  }
  open(content: any) {
    this.modalService
      .open(content, {
        ariaLabelledBy: 'modal-basic-title',
        windowClass: 'custom-class',
        scrollable: true
      })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
          this.setcomment = this.comment;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
