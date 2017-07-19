import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { PortalService } from './portal.service';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.sass']
})
export class PortalComponent implements OnInit {

  public inscription: Subscription;
  public companyId:string = null;

  public company: any = {
    name: null,
    about: null,
    logo: null,
    movilProfile: null
  }

  public code: string = '';

  public activeCode: boolean = false;

  public session: any = {
    id: null,
    token: null,
    userId: null,
    deviceId: null,
    created: null,
    modified: null,
    namePrivacity: null,
  }

  constructor(
    private _activedRoute: ActivatedRoute,
    private _portalService: PortalService
  ){}

  ngOnInit() {
    this.listenToEvents();
  }

/*-----------    Inicio funciones propias -------------*/

  listenToEvents(){
		this.inscription = this._activedRoute.params.subscribe(
			(params:any) => {
				this.companyId = params['company_id'];
        console.log('El id es: ', this.companyId);
        this.getCompanyData();
			}
    );
  }

  getCompanyData(){
    if(this.companyId){
      this._portalService.getDataCompany(this.companyId).subscribe(
        data => {
          let dataCompany = data.ws_response.user.data_company.company;
          this.company.name = dataCompany.company_name;
          this.company.about = dataCompany.company_about;
          this.company.logo = dataCompany.company_logo_url;
          this.company.movilProfile = dataCompany.company_picture_movil_url;
        }
      );
    }
  }

  validateCode(){
    if(this.code == '' || !this.code){
      alert('Debes ingresar un codigo');
    }else{
      this._portalService.validateCode(this.code).subscribe(
        data => {
          let result = data.ws_response.data.session;
          if(result){
            this.session.id = result.session_id;
            this.session.token = result.session_token;
            this.session.userId = result.session_user_id;
            this.session.deviceId = result.session_device_id;
            this.session.created = result.session_created;
            this.session.modified = result.session_modified;
            this.session.namePrivacity = result.user_name_privacity;
            this.activeCode = true;
          }else{
            alert('Codigo no valido');
          }
        }
      );
    }
  }
/*-----------    Fin funciones propias -------------*/

}
