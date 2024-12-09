var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Toposskirandocamptocamp_1 = new ol.format.GeoJSON();
var features_Toposskirandocamptocamp_1 = format_Toposskirandocamptocamp_1.readFeatures(json_Toposskirandocamptocamp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Toposskirandocamptocamp_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Toposskirandocamptocamp_1.addFeatures(features_Toposskirandocamptocamp_1);
var lyr_Toposskirandocamptocamp_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Toposskirandocamptocamp_1, 
                style: style_Toposskirandocamptocamp_1,
                popuplayertitle: "Topos skirando camptocamp",
                interactive: true,
                title: '<img src="styles/legend/Toposskirandocamptocamp_1.png" /> Topos skirando camptocamp'
            });
var format_Toposskirandoskitour_2 = new ol.format.GeoJSON();
var features_Toposskirandoskitour_2 = format_Toposskirandoskitour_2.readFeatures(json_Toposskirandoskitour_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Toposskirandoskitour_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Toposskirandoskitour_2.addFeatures(features_Toposskirandoskitour_2);
var lyr_Toposskirandoskitour_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Toposskirandoskitour_2, 
                style: style_Toposskirandoskitour_2,
                popuplayertitle: "Topos skirando skitour",
                interactive: true,
                title: '<img src="styles/legend/Toposskirandoskitour_2.png" /> Topos skirando skitour'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Toposskirandocamptocamp_1.setVisible(true);lyr_Toposskirandoskitour_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Toposskirandocamptocamp_1,lyr_Toposskirandoskitour_2];
lyr_Toposskirandocamptocamp_1.set('fieldAliases', {'id': 'id', 'url': 'url', });
lyr_Toposskirandoskitour_2.set('fieldAliases', {'id': 'id', 'url': 'url', });
lyr_Toposskirandocamptocamp_1.set('fieldImages', {'id': 'Range', 'url': 'TextEdit', });
lyr_Toposskirandoskitour_2.set('fieldImages', {'id': 'Range', 'url': 'TextEdit', });
lyr_Toposskirandocamptocamp_1.set('fieldLabels', {'id': 'no label', 'url': 'no label', });
lyr_Toposskirandoskitour_2.set('fieldLabels', {'id': 'no label', 'url': 'no label', });
lyr_Toposskirandoskitour_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});