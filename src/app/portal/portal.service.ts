import { Injectable } from '@angular/core';
import 'rxjs/Rx';

import { AppService } from './../app.service';

@Injectable()
export class PortalService {

  constructor(
    private _appService: AppService
  ) { }

  getDataCompany(id){
    let url: string = '111/vrs/2/uid/1/token/991187a718bdc2f5075f65feffbf03c9b5694142435dfb23f378f0c3fb9c4bf2/data_company/1/company_id/';
    url += id;
    console.log('La url que voy a enviar es: ', url);
    return this._appService.httpget(url);
  }

  validateCode(code){
    let url: string = '178/vrs/2/uid/1/token/991187a718bdc2f5075f65feffbf03c9b5694142435dfb23f378f0c3fb9c4bf2/data_validacion_code/1/code/';
    url += code;
    console.log('La url de validar codigo es: ', url);
    return this._appService.httpget(url);
  }

}
