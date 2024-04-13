import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stat } from '../AdminCharts/dashboard.model'; // Assuming you have a Stat model
import { DeviceDetectorService } from 'ngx-device-detector';
import { map,switchMap  } from 'rxjs/operators'; // Import the map operator

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //http://localhost:8093/GestionUser/users/getPendingAccessRequests/{{role}}
  private apiUrls = 'http://localhost:8082/PIDataCatalog/users/count';
  private apiUrl = 'http://localhost:8082/PIDataCatalog/';
  private botToken = '6628546988:AAFH-2IELWO_ygQ3Imzk5gocWzQUskicT70'; // Replace with your bot token
  private chatId = '5727061798'; // Replace with your chat ID
  private apiKey = '5e5d208b-596e-4b4f-9960-a4a7d118ed12'; // Your API key

  constructor(private http: HttpClient, private deviceService: DeviceDetectorService) {}

  getStats(): Observable<Stat[]> {
    return this.http.get<Stat[]>(this.apiUrls);
  }

  sendMessage(): void {
    const osType = this.deviceService.os;
    const deviceType = this.deviceService.device;
    const browserInfo = this.deviceService.browser;
    const userAgentString = this.deviceService.userAgent;


    this.getPublicIpAddress().subscribe(
      (ip: string) => {
        const message = `
        ***New Successful Admin Login***\n
        OS: ${osType}\n
        Browser: ${browserInfo}\n
        User Agent: ${userAgentString}\n
        IP: ${ip}
        `;
        this.sendMessageToTelegram(message);
      },
      error => console.error('Error fetching IP information:', error)
    );
  }

  private getPublicIpAddress(): Observable<string> {
    return this.http.get('https://api.ipify.org/?format=json').pipe(
      map((response: any) => response.ip)
    );
  }

  private getIpInfo(): Observable<any> {
    return this.getPublicIpAddress().pipe(
      switchMap(ip => {
        const apiUrl = `https://api.seon.io/SeonRestService/ip-api/v1.1/${ip}`;
        const headers = new HttpHeaders().set('X-Api-Key', this.apiKey);
        return this.http.get(apiUrl, { headers: headers });
      })
    );
  }

  private sendMessageToTelegram(message: string): void {
    const url = `https://api.telegram.org/bot${this.botToken}/sendMessage`;
    const data = {
      chat_id: this.chatId,
      text: message
    };

    this.http.post(url, data)
      .subscribe(
        () => console.log('Message sent successfully'),
        error => console.error('Error sending message:', error)
      );
  }
}