export class Marker {
  public lat: number;
  public lng: number;

  public title: string = 'Sin titulo';
  public description: string = 'Sin descripcion';

  constructor(lat: number, lng: number) {
    this.lat = lat;
    this.lng = lng;
  }
}
