var wms_layers = [];


        var lyr_OpenStreeMap_0 = new ol.layer.Tile({
            'title': 'OpenStreeMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_nouvel_antampon_3km_1 = new ol.format.GeoJSON();
var features_nouvel_antampon_3km_1 = format_nouvel_antampon_3km_1.readFeatures(json_nouvel_antampon_3km_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nouvel_antampon_3km_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nouvel_antampon_3km_1.addFeatures(features_nouvel_antampon_3km_1);
var lyr_nouvel_antampon_3km_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nouvel_antampon_3km_1, 
                style: style_nouvel_antampon_3km_1,
                popuplayertitle: "nouvel_an — tampon_3km",
                interactive: false,
                title: '<img src="styles/legend/nouvel_antampon_3km_1.png" />3km autour des 2H de distance'
            });
var format_nouvel_andistance_2 = new ol.format.GeoJSON();
var features_nouvel_andistance_2 = format_nouvel_andistance_2.readFeatures(json_nouvel_andistance_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nouvel_andistance_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nouvel_andistance_2.addFeatures(features_nouvel_andistance_2);
var lyr_nouvel_andistance_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nouvel_andistance_2, 
                style: style_nouvel_andistance_2,
                popuplayertitle: "nouvel_an — distance",
                interactive: false,
                title: '<img src="styles/legend/nouvel_andistance_2.png" />2H de distance'
            });
var format_dpart_3 = new ol.format.GeoJSON();
var features_dpart_3 = format_dpart_3.readFeatures(json_dpart_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dpart_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dpart_3.addFeatures(features_dpart_3);
var lyr_dpart_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_dpart_3, 
                style: style_dpart_3,
                popuplayertitle: "départ",
                interactive: false,
                title: '<img src="styles/legend/dpart_3.png" /> départ'
            });

var format_nouvel_anrefuges_3km_5 = new ol.format.GeoJSON();
var features_nouvel_anrefuges_3km_5 = format_nouvel_anrefuges_3km_5.readFeatures(json_nouvel_anrefuges_3km_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nouvel_anrefuges_3km_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nouvel_anrefuges_3km_5.addFeatures(features_nouvel_anrefuges_3km_5);
var lyr_nouvel_anrefuges_3km_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nouvel_anrefuges_3km_5, 
                style: style_nouvel_anrefuges_3km_5,
                popuplayertitle: "Refuges dans le périmètre de recherche",
                interactive: true,
                title: '<img src="styles/legend/nouvel_anrefuges_3km_5.png" />Refuges dans le périmètre de recherche'
            });

lyr_OpenStreeMap_0.setVisible(true);lyr_nouvel_antampon_3km_1.setVisible(true);lyr_nouvel_andistance_2.setVisible(true);lyr_dpart_3.setVisible(true);lyr_nouvel_anrefuges_3km_5.setVisible(true);
var layersList = [lyr_OpenStreeMap_0,lyr_nouvel_antampon_3km_1,lyr_nouvel_andistance_2,lyr_dpart_3,lyr_nouvel_anrefuges_3km_5];
lyr_nouvel_antampon_3km_1.set('fieldAliases', {'fid': 'fid', 'description': 'description', 'marker-symbol': 'marker-symbol', 'marker-size': 'marker-size', 'stroke': 'stroke', 'stroke-opacity': 'stroke-opacity', 'stroke-width': 'stroke-width', 'fill': 'fill', 'fill-opacity': 'fill-opacity', });
lyr_nouvel_andistance_2.set('fieldAliases', {'fid': 'fid', 'description': 'description', 'marker-symbol': 'marker-symbol', 'marker-size': 'marker-size', 'stroke': 'stroke', 'stroke-opacity': 'stroke-opacity', 'stroke-width': 'stroke-width', 'fill': 'fill', 'fill-opacity': 'fill-opacity', });
lyr_dpart_3.set('fieldAliases', {'fid': 'fid', });
lyr_nouvel_anrefuges_3km_5.set('fieldAliases', {'nom': 'nom', 'massif': 'massif', 'type': 'type', 'altitude': 'altitude', 'nb_places': 'nb_places', 'acces': 'acces', 'remarques': 'remarques', 'refuge_hiver': 'refuge_hiver', 'hiver': 'hiver', });
lyr_nouvel_antampon_3km_1.set('fieldImages', {'fid': 'TextEdit', 'description': 'TextEdit', 'marker-symbol': 'TextEdit', 'marker-size': 'TextEdit', 'stroke': 'TextEdit', 'stroke-opacity': 'Range', 'stroke-width': 'Range', 'fill': 'TextEdit', 'fill-opacity': 'TextEdit', });
lyr_nouvel_andistance_2.set('fieldImages', {'fid': 'TextEdit', 'description': 'TextEdit', 'marker-symbol': 'TextEdit', 'marker-size': 'TextEdit', 'stroke': 'TextEdit', 'stroke-opacity': 'Range', 'stroke-width': 'Range', 'fill': 'TextEdit', 'fill-opacity': 'TextEdit', });
lyr_dpart_3.set('fieldImages', {'fid': 'TextEdit', });
lyr_nouvel_anrefuges_3km_5.set('fieldImages', {'nom': 'TextEdit', 'massif': 'TextEdit', 'type': 'TextEdit', 'altitude': 'TextEdit', 'nb_places': 'TextEdit', 'acces': 'TextEdit', 'remarques': 'TextEdit', 'refuge_hiver': 'TextEdit', 'hiver': 'TextEdit', });
lyr_nouvel_antampon_3km_1.set('fieldLabels', {'fid': 'no label', 'description': 'no label', 'marker-symbol': 'no label', 'marker-size': 'no label', 'stroke': 'no label', 'stroke-opacity': 'no label', 'stroke-width': 'no label', 'fill': 'no label', 'fill-opacity': 'no label', });
lyr_nouvel_andistance_2.set('fieldLabels', {'fid': 'no label', 'description': 'no label', 'marker-symbol': 'no label', 'marker-size': 'no label', 'stroke': 'no label', 'stroke-opacity': 'no label', 'stroke-width': 'no label', 'fill': 'no label', 'fill-opacity': 'no label', });
lyr_dpart_3.set('fieldLabels', {'fid': 'no label', });
lyr_nouvel_anrefuges_3km_5.set('fieldLabels', {'nom': 'Nom du refuge :', 'massif': 'no label', 'type': 'no label', 'altitude': 'no label', 'nb_places': 'no label', 'acces': 'no label', 'remarques': 'no label', 'refuge_hiver': 'no label', 'hiver': 'no label', });
lyr_nouvel_anrefuges_3km_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});