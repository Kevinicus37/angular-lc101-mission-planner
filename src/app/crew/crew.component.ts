import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  inCrew: boolean = false;
  crew: object[] = [];
  selectedMember : object;

  candidates: object[] = [
    {name: "Sally Ride", photo: 'https://handlers.education.launchcode.org/static/images/sally-ride.jpg'},
    {name: "Mae Jemison", photo: 'https://handlers.education.launchcode.org/static/images/mae-jemison.jpg'},
    {name: "Ellen Ochoa", photo: 'https://handlers.education.launchcode.org/static/images/ellen-ochoa.jpg'},
    {name: "Frederick Gregory", photo: 'https://handlers.education.launchcode.org/static/images/frederick-gregory.jpg'},
    {name: "Guion Bluford", photo: 'https://handlers.education.launchcode.org/static/images/guion-bluford.jpg'},
    {name: "Kjell Lindgren", photo: 'https://handlers.education.launchcode.org/static/images/kjell-lindgren.jpg'},
    {name: "Jeanette Epps", photo: 'https://handlers.education.launchcode.org/static/images/jeanette-epps.jpg'}
  ];

  constructor() { }

  ngOnInit() { }

  addToCrew(candidate : object){
    let existing : boolean = false;
    existing = (this.crew.includes(candidate));
    if (!existing && this.crew.length < 3){
      this.crew.push(candidate);
    } else if (existing) {
      this.removeFromCrew(candidate);
    }
    
  }

  removeFromCrew(member : object){
    let ind : number = this.crew.indexOf(member);
    if (ind > -1){
      this.crew.splice(ind, 1);
    } 
  }
  
  displayPicture(member: object){
    this.selectedMember = member;
  }

  takeDownImage(){
    this.selectedMember = null;
  }
}
