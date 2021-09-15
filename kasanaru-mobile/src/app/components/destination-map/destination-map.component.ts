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
    this.nearbySearch()
  }

  reverseGeocode() {
    this.mapService
      .geocode({ location: this.markerPosition })
      .then(result => {
        // this.distLocation = result
      })
      .catch((e) => {
        console.log(e);
      });
  }

  nearbySearch(): void {
    const placeService = new google.maps.places.PlacesService(
      this.map.data.getMap()
    );
    const request: google.maps.places.PlaceSearchRequest = {
      location: this.markerPosition,
      radius: 100
    };
    this.mapService
      .nearbySearch(placeService, request)
      .then(results => {
        this.distLocation = this.typeCheck(results)
      })
      .catch((e) => {
        console.log(e);
      });
  }

  typeCheck(results: google.maps.places.PlaceResult[]) {
    const stations = results.filter(result => result.types.includes('transit_station'))
    if (stations.length > 0) {
      return stations[0].name
    } else {
      return results[1].name
    }
  }
}
