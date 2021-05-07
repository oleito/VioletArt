import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {
  proyectos = [
    {
      section: "galeria",
      description: "Galeria",
      img: "https://picsum.photos/id/944/350/350",
    }, {
      section: "proyectos",
      description: "Proyectos fotograficos",
      img: "https://picsum.photos/id/625/350/350",
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
