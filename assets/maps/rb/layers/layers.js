var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_JumlahRumahBersalin_1 = new ol.format.GeoJSON();
var features_JumlahRumahBersalin_1 = format_JumlahRumahBersalin_1.readFeatures(json_JumlahRumahBersalin_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JumlahRumahBersalin_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JumlahRumahBersalin_1.addFeatures(features_JumlahRumahBersalin_1);
var lyr_JumlahRumahBersalin_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JumlahRumahBersalin_1, 
                style: style_JumlahRumahBersalin_1,
                interactive: true,
    title: 'Jumlah Rumah Bersalin<br />\
    <img src="styles/legend/JumlahRumahBersalin_1_0.png" /> Sangat Kurang (< 1)<br />\
    <img src="styles/legend/JumlahRumahBersalin_1_1.png" /> Kurang (< 4)<br />\
    <img src="styles/legend/JumlahRumahBersalin_1_2.png" /> Baik (< 11)<br />\
    <img src="styles/legend/JumlahRumahBersalin_1_3.png" /> Sangat Baik (< 21)<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_JumlahRumahBersalin_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_JumlahRumahBersalin_1];
lyr_JumlahRumahBersalin_1.set('fieldAliases', {'Kec': 'Kec', 'Kota/Kab': 'Kota/Kab', 'Prov': 'Prov', 'Rumah Saki': 'Rumah Saki', 'Rumah Bers': 'Rumah Bers', 'Klinik': 'Klinik', 'Sensus': 'Sensus', 'Dokter': 'Dokter', 'Dok Gigi': 'Dok Gigi', 'Bidan': 'Bidan', 'Medis Lain': 'Medis Lain', });
lyr_JumlahRumahBersalin_1.set('fieldImages', {'Kec': 'TextEdit', 'Kota/Kab': 'TextEdit', 'Prov': 'TextEdit', 'Rumah Saki': 'TextEdit', 'Rumah Bers': 'TextEdit', 'Klinik': 'TextEdit', 'Sensus': 'Range', 'Dokter': 'Range', 'Dok Gigi': 'Range', 'Bidan': 'Range', 'Medis Lain': 'Range', });
lyr_JumlahRumahBersalin_1.set('fieldLabels', {'Kec': 'inline label', 'Kota/Kab': 'inline label', 'Prov': 'inline label', 'Rumah Saki': 'inline label', 'Rumah Bers': 'inline label', 'Klinik': 'inline label', 'Sensus': 'inline label', 'Dokter': 'inline label', 'Dok Gigi': 'inline label', 'Bidan': 'inline label', 'Medis Lain': 'inline label', });
lyr_JumlahRumahBersalin_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});