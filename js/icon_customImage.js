ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.936341, 30.321654],
            zoom: 16,
            controls: []
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Мишка :)',
            balloonContent: 'Мишка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../img/icon-map-pin.svg',
            // Размеры метки.
            iconImageSize: [67, 100],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-34, -100]
        });

    myMap.geoObjects.add(myPlacemark);
});
