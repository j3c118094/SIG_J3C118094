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
var format_JumlahRumahSakit_1 = new ol.format.GeoJSON();
var features_JumlahRumahSakit_1 = format_JumlahRumahSakit_1.readFeatures(json_JumlahRumahSakit_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JumlahRumahSakit_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JumlahRumahSakit_1.addFeatures(features_JumlahRumahSakit_1);
var lyr_JumlahRumahSakit_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JumlahRumahSakit_1, 
                style: style_JumlahRumahSakit_1,
                interactive: true,
    title: 'Jumlah Rumah Sakit<br />\
    <img src="styles/legend/JumlahRumahSakit_1_0.png" /> Memadai (< 17)<br />\
    <img src="styles/legend/JumlahRumahSakit_1_1.png" /> Cukup (< 34)<br />\
    <img src="styles/legend/JumlahRumahSakit_1_2.png" /> Baik (< 54)<br />\
    <img src="styles/legend/JumlahRumahSakit_1_3.png" /> Sangat Baik (< 101)<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_JumlahRumahSakit_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_JumlahRumahSakit_1];
lyr_JumlahRumahSakit_1.set('fieldAliases', {'Kec': 'Kec', 'Kota/Kab': 'Kota/Kab', 'Prov': 'Prov', 'Rumah Saki': 'Rumah Saki', 'Rumah Bers': 'Rumah Bers', 'Klinik': 'Klinik', 'Sensus': 'Sensus', 'Dokter': 'Dokter', 'Dok Gigi': 'Dok Gigi', 'Bidan': 'Bidan', 'Medis Lain': 'Medis Lain', });
lyr_JumlahRumahSakit_1.set('fieldImages', {'Kec': 'TextEdit', 'Kota/Kab': 'TextEdit', 'Prov': 'TextEdit', 'Rumah Saki': 'TextEdit', 'Rumah Bers': 'TextEdit', 'Klinik': 'TextEdit', 'Sensus': '', 'Dokter': '', 'Dok Gigi': '', 'Bidan': '', 'Medis Lain': '', });
lyr_JumlahRumahSakit_1.set('fieldLabels', {'Kec': 'inline label', 'Kota/Kab': 'inline label', 'Prov': 'inline label', 'Rumah Saki': 'inline label', 'Rumah Bers': 'inline label', 'Klinik': 'inline label', 'Sensus': 'inline label', 'Dokter': 'inline label', 'Dok Gigi': 'inline label', 'Bidan': 'inline label', 'Medis Lain': 'inline label', });
lyr_JumlahRumahSakit_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});