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
                title: '<img src="styles/legend/nouvel_antampon_3km_1.png" /> nouvel_an — tampon_3km'
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
                title: '<img src="styles/legend/nouvel_andistance_2.png" /> nouvel_an — distance'
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
var format_nouvel_anrefuges_skitour_3km_4 = new ol.format.GeoJSON();
var features_nouvel_anrefuges_skitour_3km_4 = format_nouvel_anrefuges_skitour_3km_4.readFeatures(json_nouvel_anrefuges_skitour_3km_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nouvel_anrefuges_skitour_3km_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nouvel_anrefuges_skitour_3km_4.addFeatures(features_nouvel_anrefuges_skitour_3km_4);
var lyr_nouvel_anrefuges_skitour_3km_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nouvel_anrefuges_skitour_3km_4, 
                style: style_nouvel_anrefuges_skitour_3km_4,
                popuplayertitle: "nouvel_an — refuges_skitour_3km",
                interactive: true,
                title: '<img src="styles/legend/nouvel_anrefuges_skitour_3km_4.png" /> nouvel_an — refuges_skitour_3km'
            });
var format_nouvel_anrefuges_info_3km_5 = new ol.format.GeoJSON();
var features_nouvel_anrefuges_info_3km_5 = format_nouvel_anrefuges_info_3km_5.readFeatures(json_nouvel_anrefuges_info_3km_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nouvel_anrefuges_info_3km_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nouvel_anrefuges_info_3km_5.addFeatures(features_nouvel_anrefuges_info_3km_5);
var lyr_nouvel_anrefuges_info_3km_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nouvel_anrefuges_info_3km_5, 
                style: style_nouvel_anrefuges_info_3km_5,
                popuplayertitle: "nouvel_an — refuges_info_3km",
                interactive: true,
                title: '<img src="styles/legend/nouvel_anrefuges_info_3km_5.png" /> nouvel_an — refuges_info_3km'
            });

lyr_OpenStreeMap_0.setVisible(true);lyr_nouvel_antampon_3km_1.setVisible(true);lyr_nouvel_andistance_2.setVisible(true);lyr_dpart_3.setVisible(true);lyr_nouvel_anrefuges_skitour_3km_4.setVisible(true);lyr_nouvel_anrefuges_info_3km_5.setVisible(true);
var layersList = [lyr_OpenStreeMap_0,lyr_nouvel_antampon_3km_1,lyr_nouvel_andistance_2,lyr_dpart_3,lyr_nouvel_anrefuges_skitour_3km_4,lyr_nouvel_anrefuges_info_3km_5];
lyr_nouvel_antampon_3km_1.set('fieldAliases', {'fid': 'fid', 'description': 'description', 'marker-symbol': 'marker-symbol', 'marker-size': 'marker-size', 'stroke': 'stroke', 'stroke-opacity': 'stroke-opacity', 'stroke-width': 'stroke-width', 'fill': 'fill', 'fill-opacity': 'fill-opacity', });
lyr_nouvel_andistance_2.set('fieldAliases', {'fid': 'fid', 'description': 'description', 'marker-symbol': 'marker-symbol', 'marker-size': 'marker-size', 'stroke': 'stroke', 'stroke-opacity': 'stroke-opacity', 'stroke-width': 'stroke-width', 'fill': 'fill', 'fill-opacity': 'fill-opacity', });
lyr_dpart_3.set('fieldAliases', {'fid': 'fid', });
lyr_nouvel_anrefuges_skitour_3km_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nom': 'nom', 'massif': 'massif', 'type': 'type', 'altitude': 'altitude', 'nb_places': 'nb_places', 'acces': 'acces', 'remarques': 'remarques', 'refuge_hiver': 'refuge_hiver', 'hiver': 'hiver', 'lien': 'lien', });
lyr_nouvel_anrefuges_info_3km_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nom': 'nom', 'type': 'type', 'altitude': 'altitude', 'nb_places': 'nb_places', 'lien': 'lien', });
lyr_nouvel_antampon_3km_1.set('fieldImages', {'fid': 'TextEdit', 'description': 'TextEdit', 'marker-symbol': 'TextEdit', 'marker-size': 'TextEdit', 'stroke': 'TextEdit', 'stroke-opacity': 'Range', 'stroke-width': 'Range', 'fill': 'TextEdit', 'fill-opacity': 'TextEdit', });
lyr_nouvel_andistance_2.set('fieldImages', {'fid': 'TextEdit', 'description': 'TextEdit', 'marker-symbol': 'TextEdit', 'marker-size': 'TextEdit', 'stroke': 'TextEdit', 'stroke-opacity': 'Range', 'stroke-width': 'Range', 'fill': 'TextEdit', 'fill-opacity': 'TextEdit', });
lyr_dpart_3.set('fieldImages', {'fid': 'TextEdit', });
lyr_nouvel_anrefuges_skitour_3km_4.set('fieldImages', {'fid': 'TextEdit', 'id': '', 'nom': 'TextEdit', 'massif': 'TextEdit', 'type': 'TextEdit', 'altitude': 'TextEdit', 'nb_places': 'TextEdit', 'acces': 'TextEdit', 'remarques': 'TextEdit', 'refuge_hiver': 'TextEdit', 'hiver': 'TextEdit', 'lien': '', });
lyr_nouvel_anrefuges_info_3km_5.set('fieldImages', {'fid': '', 'id': '', 'nom': '', 'type': '', 'altitude': '', 'nb_places': '', 'lien': '', });
lyr_nouvel_antampon_3km_1.set('fieldLabels', {'fid': 'no label', 'description': 'no label', 'marker-symbol': 'no label', 'marker-size': 'no label', 'stroke': 'no label', 'stroke-opacity': 'no label', 'stroke-width': 'no label', 'fill': 'no label', 'fill-opacity': 'no label', });
lyr_nouvel_andistance_2.set('fieldLabels', {'fid': 'no label', 'description': 'no label', 'marker-symbol': 'no label', 'marker-size': 'no label', 'stroke': 'no label', 'stroke-opacity': 'no label', 'stroke-width': 'no label', 'fill': 'no label', 'fill-opacity': 'no label', });
lyr_dpart_3.set('fieldLabels', {'fid': 'no label', });
lyr_nouvel_anrefuges_skitour_3km_4.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'nom': 'header label - always visible', 'massif': 'header label - always visible', 'type': 'header label - always visible', 'altitude': 'header label - always visible', 'nb_places': 'header label - always visible', 'acces': 'header label - always visible', 'remarques': 'header label - always visible', 'refuge_hiver': 'header label - always visible', 'hiver': 'header label - always visible', 'lien': 'header label - always visible', });
lyr_nouvel_anrefuges_info_3km_5.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'nom': 'header label - always visible', 'type': 'header label - always visible', 'altitude': 'header label - always visible', 'nb_places': 'header label - always visible', 'lien': 'header label - always visible', });
lyr_nouvel_anrefuges_info_3km_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});