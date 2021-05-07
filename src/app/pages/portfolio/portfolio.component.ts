import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  // jobs = [944, 1011].map((n) => `https://picsum.photos/id/944/350/350`);
  jobs= [
    {
      section: "galeria",
      description: "Galeria",
      img:"https://picsum.photos/id/944/350/350",
    },{
      section: "proyectos",
      description: "Proyectos fotograficos",
      img:"https://picsum.photos/id/625/350/350",
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
