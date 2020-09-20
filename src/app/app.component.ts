import { Component } from '@angular/core';
import { Satellite } from './satellite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orbit-report';
  displayList: Satellite[];
  sourceList: Satellite[];
  
constructor() {
    this.sourceList = [];
    this.displayList = []
    let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';
 
    window.fetch(satellitesUrl).then(function(response) {
       response.json().then(function(data) {
          const {satellites} = data;
          for (let o of satellites){
            this.sourceList.push(
               new Satellite(
                  o.name,
                  o.type,
                  o.launchDate,
                  o.orbitType,
                  o.operational
               )               
            )            
         }
         this.displayList = this.sourceList.slice(0);
       }.bind(this));
    }.bind(this));
 }
 
}
