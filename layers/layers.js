ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32718").setExtent([671830.861416, 5920232.088054, 678902.668460, 5927499.557743]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_barriosseleccionados_1 = new ol.format.GeoJSON();
var features_barriosseleccionados_1 = format_barriosseleccionados_1.readFeatures(json_barriosseleccionados_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_barriosseleccionados_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_barriosseleccionados_1.addFeatures(features_barriosseleccionados_1);
var lyr_barriosseleccionados_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_barriosseleccionados_1, 
                style: style_barriosseleccionados_1,
                popuplayertitle: 'barrios seleccionados',
                interactive: true,
                title: '<img src="styles/legend/barriosseleccionados_1.png" /> barrios seleccionados'
            });
var format_puntosturisticos_2 = new ol.format.GeoJSON();
var features_puntosturisticos_2 = format_puntosturisticos_2.readFeatures(json_puntosturisticos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_puntosturisticos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puntosturisticos_2.addFeatures(features_puntosturisticos_2);
cluster_puntosturisticos_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_puntosturisticos_2
});
var lyr_puntosturisticos_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_puntosturisticos_2, 
                style: style_puntosturisticos_2,
                popuplayertitle: 'puntos turisticos',
                interactive: true,
    title: 'puntos turisticos<br />\
    <img src="styles/legend/puntosturisticos_2_0.png" /> <br />\
    <img src="styles/legend/puntosturisticos_2_1.png" /> Casa de la Cultura<br />\
    <img src="styles/legend/puntosturisticos_2_2.png" /> Casa de Salud<br />\
    <img src="styles/legend/puntosturisticos_2_3.png" /> Cerro Amarillo<br />\
    <img src="styles/legend/puntosturisticos_2_4.png" /> Cerro La Virgen<br />\
    <img src="styles/legend/puntosturisticos_2_5.png" /> Chiflón del Diablo<br />\
    <img src="styles/legend/puntosturisticos_2_6.png" /> Estadio Municipal Alcaldesa Ester Roa Rebolledo<br />\
    <img src="styles/legend/puntosturisticos_2_7.png" /> Laguna Lo Mendez<br />\
    <img src="styles/legend/puntosturisticos_2_8.png" /> Nonguén Zoo Concepción<br />\
    <img src="styles/legend/puntosturisticos_2_9.png" /> Parque las tres pascualas<br />\
    <img src="styles/legend/puntosturisticos_2_10.png" /> Pinacotca UdeC<br />\
    <img src="styles/legend/puntosturisticos_2_11.png" /> Plaza Condell<br />\
    <img src="styles/legend/puntosturisticos_2_12.png" /> Plaza de Armas Lota<br />\
    <img src="styles/legend/puntosturisticos_2_13.png" /> Plaza de Armas Penco<br />\
    <img src="styles/legend/puntosturisticos_2_14.png" /> Plaza de Armas Talcahuano<br />\
    <img src="styles/legend/puntosturisticos_2_15.png" /> Plaza de Armas Tomé<br />\
    <img src="styles/legend/puntosturisticos_2_16.png" /> Plaza España<br />\
    <img src="styles/legend/puntosturisticos_2_17.png" /> Plaza Independencia<br />\
    <img src="styles/legend/puntosturisticos_2_18.png" /> Plaza Perú<br />\
    <img src="styles/legend/puntosturisticos_2_19.png" /> Teatro Enrique Molina Garmendia<br />\
    <img src="styles/legend/puntosturisticos_2_20.png" /> Templo de Concepción<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_barriosseleccionados_1.setVisible(true);lyr_puntosturisticos_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_barriosseleccionados_1,lyr_puntosturisticos_2];
lyr_barriosseleccionados_1.set('fieldAliases', {'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'Nombre': 'Nombre', });
lyr_puntosturisticos_2.set('fieldAliases', {'Nombre': 'Nombre', 'Tipo': 'Tipo', 'comuna': 'comuna', 'barrio': 'barrio', 'Info.': 'Info.', });
lyr_barriosseleccionados_1.set('fieldImages', {'REGION': 'TextEdit', 'PROVINCIA': 'TextEdit', 'COMUNA': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_puntosturisticos_2.set('fieldImages', {'Nombre': 'TextEdit', 'Tipo': 'TextEdit', 'comuna': 'TextEdit', 'barrio': 'TextEdit', 'Info.': 'TextEdit', });
lyr_barriosseleccionados_1.set('fieldLabels', {'REGION': 'no label', 'PROVINCIA': 'no label', 'COMUNA': 'no label', 'Nombre': 'no label', });
lyr_puntosturisticos_2.set('fieldLabels', {'Nombre': 'inline label - always visible', 'Tipo': 'inline label - always visible', 'comuna': 'inline label - always visible', 'barrio': 'inline label - always visible', 'Info.': 'inline label - always visible', });
lyr_puntosturisticos_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});