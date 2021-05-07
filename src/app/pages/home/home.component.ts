import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  fotos = [ 944, 1011, 984,
            914, 1014, 983,
            954, 1015, 982,
            974, 1016, 981,
            994, 107, 987
          ].map((n) => `https://picsum.photos/id/${n}/100/100`);

  constructor() { }

  ngOnInit(): void {
  }

}
