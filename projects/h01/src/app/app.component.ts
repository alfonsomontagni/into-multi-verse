import { Component } from '@angular/core';
import { ConfigService } from './core/config/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My App h01';
  apiUrl: string;
  environment: string;

  constructor(private configService: ConfigService) { }

  ngOnInit() {
    const config = this.configService.getConfig();
    this.apiUrl = config.apiUrl;
    this.environment = config.environment;
  }
}
