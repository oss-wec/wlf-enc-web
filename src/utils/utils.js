export function sentenceCase (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function geolocate () {
  return new Promise((resolve, reject) => {
    if (!('geolocation' in window.navigator)) {
      reject('no browser support')
    } else {
      window.navigator.geolocation.getCurrentPosition(
        position => {
          resolve({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            accuracy: position.coords.accuracy,
            alt: position.coords.altitude,
            altAccuracy: position.coords.altitudeAccuracy
          })
        },
        () => {
          reject('no position access')
        },
        {
          enableHighAccuracy: true,
          timeout: 5000
        }
      )
    }
  })
}
