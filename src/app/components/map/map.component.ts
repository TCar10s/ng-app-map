import { Component, OnInit } from '@angular/core';
import { Marker } from 'src/app/classes/marker.class';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MapaEditComponent } from './map-edit/mapa-edit.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  title: string;
  lat: number;
  lng: number;

  markers: Marker[];

  constructor(private _snackBar: MatSnackBar, public dialog: MatDialog) {
    this.title = 'My first AGM project';
    this.lat = 51.678418;
    this.lng = 7.809007;
    this.markers = [];
  }

  ngOnInit(): void {
    if (localStorage.getItem('markers')) {
      this.markers = JSON.parse(localStorage.getItem('markers'));
    }
  }

  addMarker = ({ coords: { lat, lng } }): void => {
    const newMarker = new Marker(lat, lng);
    this.markers.push(newMarker);

    this.saveStorage();
    this._snackBar.open('Marcador agregado', 'Cerrar', { duration: 3000 });
  };

  // Save coordinates in localStorage
  saveStorage = (): void => {
    localStorage.setItem('markers', JSON.stringify(this.markers));
  };

  deleteMarker = (index: number): void => {
    this.markers.splice(index, 1);
    this.saveStorage();
  };

  editMarker = (marker: Marker): void => {
    const dialogRef = this.dialog.open(MapaEditComponent, {
      width: '250px',
      data: { title: marker.title, description: marker.description },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(this.markers);

      if (!result) return;

      marker.title = result.title;
      marker.description = result.description;

      console.log(this.markers);

      this.saveStorage();
      this._snackBar.open('Marcador actualizado', 'Cerrar', {
        duration: 3000,
      });
    });
  };
}
