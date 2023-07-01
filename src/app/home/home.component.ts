import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  showTable: boolean = false;
  clientId: string = '8179d27b0dc985ca3a43';
  redirectUri: string = encodeURIComponent('http://localhost:8090/callback');
  githubUrl: string = `https://github.com/login/oauth/authorize?client_id=${this.clientId}&redirect_uri=${this.redirectUri}&scope=read:user`;


  onSearch() {
    this.showTable = true;
  }

  onRegisterGitHub() {
    window.open("http://localhost:8090/login");
  }
}
