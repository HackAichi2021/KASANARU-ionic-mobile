import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-navigation-map',
  templateUrl: './navigation-map.component.html',
  styleUrls: ['./navigation-map.component.scss'],
})
export class NavigationMapComponent implements OnInit {
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;

  options: google.maps.MapOptions = {
    disableDefaultUI: true
  };
  // マッチング相手の位置情報をdestinationPositionに入れる
  destinationPosition: google.maps.LatLngLiteral
  currentPosition: google.maps.LatLngLiteral

  constructor() { }

  ngOnInit() {
    this.setCurrentPosition()
  }

  setCurrentPosition() {
    // 現在位置を取得
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(position => {
        this.currentPosition = { lat: position.coords.latitude, lng: position.coords.longitude }
        this.map.googleMap.setCenter(this.currentPosition)
      })
    }
  }

  update() {
    this.navigation(this.map.googleMap)
  }

  navigation(map: google.maps.Map) {
    var directionsService = new google.maps.DirectionsService()
    var directionsRenderer = new google.maps.DirectionsRenderer()
    directionsRenderer.setMap(map)
    directionsRenderer.setOptions({ suppressMarkers: true })

    var request: google.maps.DirectionsRequest = {
      origin: this.currentPosition,
      destination: this.destinationPosition,
      travelMode: google.maps.TravelMode.WALKING
    };
    directionsService.route(request, function (result, status) {
      if (status == 'OK') {
        directionsRenderer.setDirections(result);
      }
    })
  }
}