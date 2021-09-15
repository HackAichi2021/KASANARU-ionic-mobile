import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import { MapService } from 'src/app/services/map.service';

@Component({
  selector: 'app-destination-map',
  templateUrl: './destination-map.component.html',
  styleUrls: ['./destination-map.component.scss'],
})
export class DestinationMapComponent implements OnInit {
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;

  options: google.maps.MapOptions = {
    disableDefaultUI: true
  };
  markerPosition: google.maps.LatLngLiteral
  distLocation: string = ''

  constructor(private mapService: MapService) { }

  ngOnInit() {
    this.setCurrentPosition();
  }

  setCurrentPosition() {
    // 現在位置を取得
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.map.googleMap.setCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      });
    }
  }

  setMarker(event: google.maps.MapMouseEvent) {
    this.markerPosition = event.latLng.toJSON();
  }
}
