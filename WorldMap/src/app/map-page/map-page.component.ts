import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-page',
  standalone: true,
  imports: [],
  templateUrl: './map-page.component.html',
  styleUrl: './map-page.component.css'
})
export class MapPageComponent implements OnInit{
  constructor() { }

  ngOnInit(): void {
    const object = document.getElementById('world-map') as HTMLObjectElement;
    object.onload = () => {
      const svgFile = object.contentDocument;
      const countries = svgFile?.querySelectorAll('path');

      countries?.forEach(country => {
        country.addEventListener('click', this.countryClick.bind(this));
      });
    };
  }

  countryClick(event:MouseEvent): void {
    const countryClicked = event.target as SVGPathElement;
    const countryID = countryClicked.id;
    alert(`Country clicked: ${countryID}`)
  }
}
