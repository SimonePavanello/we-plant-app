import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

/*
  Generated class for the ConfigProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConfigProvider {

  public serverUrl = "https://www.api.weplant.nino.cloud"
  public nodeUrl = "http://www.weplant.nino.cloud:3000"
  public qrCodePrefix = "https://www.weplant.nino.cloud/#/intro?plant-id="

  userToken: string;
  initalDate: string = "2000-01-01T06:00:00+02:00";
  project = "WE-PLANT";

  constructor(public http: HttpClient) {
  }

}
