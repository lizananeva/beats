let myMap;

const init = () => {
  myMap = new ymaps.Map("map", {
    center: [55.751577, 37.607399],
    zoom: 14,
    controls: ["zoomControl"]
  });

  const coords = [
    [55.758815, 37.582666],
    [55.742857, 37.580785],
    [55.750036, 37.605956],
    [55.756698, 37.626335]
  ];

  const myCollection = new ymaps.GeoObjectCollection({}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/icons/marker.svg',
    iconImageSize: [58, 73],
    iconImageOffset: [-25, -70],
    draggable: false
  });

  coords.forEach(coord => {
    myCollection.add(new ymaps.Placemark(coord));
  });

  myMap.geoObjects.add(myCollection);
  myMap.behaviors.disable('scrollZoom');
}

ymaps.ready(init);
