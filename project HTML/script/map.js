let center = [55.75846806898367, 37.60108849999989];

function init() {
  // Создание карты.
  let map = new ymaps.Map('map', {
    center: center,
    zoom: 14
  });

  // Создание геообъекта с типом точка (метка).
  let myGeoObject = new ymaps.GeoObject({
    geometry: {
      type: "Point", // тип геометрии - точка
      coordinates: center // координаты точки
    }
  });

  let placemark = new ymaps.Placemark(center, {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/svg/placemark.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [-10, -10]
  });

  map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
  map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

  // Размещение геообъекта на карте.
  map.geoObjects.add(placemark);
}

ymaps.ready(init);
