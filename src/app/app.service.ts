import { Injectable } from '@angular/core';
import { Http} from '@angular/http';

@Injectable()
export class AppService {

  public urlHttp = "http://tockall.com/ws/index.php/service/ws/vrs/2/ws_id/";
  public urlHttps = "https://tockall.com/ws/index.php/service/ws/vrs/2/ws_id/";

  constructor(
    private http: Http
    ) { }

  httpget(url){
    return this.http.get(this.urlHttp + url).map(
      (res) => res.json()
    );  
  }

}
