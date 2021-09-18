import { Component, OnInit, OnChanges, ViewChild, Input } from '@angular/core';
import { Store } from 'src/app/store/store';

@Component({
  selector: 'app-navigation-map',
  templateUrl: './navigation-map.component.html',
  styleUrls: ['./navigation-map.component.scss'],
})
export class NavigationMapComponent implements OnInit {
  // @ViewChild(GoogleMap, { static: false }) map: GoogleMap;

  options: google.maps.MapOptions = {
    disableDefaultUI: true
  };
  // マッチング相手の位置情報をdestinationPositionに入れる
  destinationPosition: google.maps.LatLngLiteral
  currentPosition: google.maps.LatLngLiteral
  map: google.maps.Map

  constructor(private store: Store) {
    this.destinationPosition = this.store.getYourInfo().latlng
    this.currentPosition = this.store.getLocation()
  }

  ngOnInit() {
    this.map = new google.maps.Map(document.getElementById("map") as HTMLElement, this.options)
    this.navigation(this.map)
  }

  navigation(map: google.maps.Map) {
    console.log(this.destinationPosition)
    console.log(this.currentPosition)

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
    new google.maps.Marker({ position: this.destinationPosition, map });
  }
}