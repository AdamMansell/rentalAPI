import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ApiService {
  scope; 

  constructor(private http: HttpClient) {
    const url_string = window.location.href;
    const url = new URL(url_string);
    this.scope = url.searchParams.get("scope");
  }

  dashboard_getTheBearer() {
    var getSessionsUrl = window.location.origin + "/Auth/GetApiToken";
    var xhr = new XMLHttpRequest();
    xhr.open('GET', getSessionsUrl);
    xhr.onreadystatechange = handler;
    xhr.send();
    function handler() {
        if (this.readyState === this.DONE && this.status === 200) {
            if(this.response != null) {
                var token = JSON.parse(this.response).access_token;
                return this.getJSONData(token);

            }
            else {
                console.log('error contacting API for profile.');
            };
        }
    }
  }

  getJSONData(token) {
    // var getSessionsUrl = `https://hubb.blob.core.windows.net/${this.scope}-public/resources/test-event-config.js`;
    var getSessionsUrl = `https://hubb.blob.core.windows.net/5eafef04-966a-438d-86d0-935d390d9538-public/resources/test-event-config.js`;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', getSessionsUrl);
    xhr.onreadystatechange = handler;
    // xhr.setRequestHeader("Authorization", "bearer " + token);
    xhr.send();
    function handler() {
      if (this.readyState === this.DONE && this.status === 200) {
        if(this.response != null) {
          return JSON.parse(this.response);
        }
        else {
          console.log('error contacting API for profile.');
        };
      }
    }
  }

  /**
   * Returns the event config object.
   * TODO: This function should receive the event scope and look fo rht file in a remote server url which can be stored
   *       in a base url property of this class or an .env file.
   * 
   * @returns Object<EventConfig>
   */
  public getEventConfig(): Observable<{}> {
    return this.http.get<{}>('/assets/event-config.json', { responseType: 'json' })
  }
    
}
