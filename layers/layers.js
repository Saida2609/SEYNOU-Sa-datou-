var wms_layers = [];

var lyr_Basemap_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Basemap<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Basemap_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-170169.652796, 1380908.327268, -168468.928917, 1381806.462350]
        })
    });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_2 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Batis_3 = new ol.format.GeoJSON();
var features_Batis_3 = format_Batis_3.readFeatures(json_Batis_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batis_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batis_3.addFeatures(features_Batis_3);
var lyr_Batis_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batis_3, 
                style: style_Batis_3,
                popuplayertitle: 'Batis',
                interactive: true,
                title: '<img src="styles/legend/Batis_3.png" /> Batis'
            });
var format_Zonepastorale_4 = new ol.format.GeoJSON();
var features_Zonepastorale_4 = format_Zonepastorale_4.readFeatures(json_Zonepastorale_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonepastorale_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonepastorale_4.addFeatures(features_Zonepastorale_4);
var lyr_Zonepastorale_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonepastorale_4, 
                style: style_Zonepastorale_4,
                popuplayertitle: 'Zone pastorale',
                interactive: true,
                title: '<img src="styles/legend/Zonepastorale_4.png" /> Zone pastorale'
            });
var format_Voirie_5 = new ol.format.GeoJSON();
var features_Voirie_5 = format_Voirie_5.readFeatures(json_Voirie_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Voirie_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Voirie_5.addFeatures(features_Voirie_5);
var lyr_Voirie_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Voirie_5, 
                style: style_Voirie_5,
                popuplayertitle: 'Voirie',
                interactive: true,
                title: '<img src="styles/legend/Voirie_5.png" /> Voirie'
            });
var format_Pistesdaccs_6 = new ol.format.GeoJSON();
var features_Pistesdaccs_6 = format_Pistesdaccs_6.readFeatures(json_Pistesdaccs_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pistesdaccs_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pistesdaccs_6.addFeatures(features_Pistesdaccs_6);
var lyr_Pistesdaccs_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pistesdaccs_6, 
                style: style_Pistesdaccs_6,
                popuplayertitle: 'Pistes d\'accès',
                interactive: true,
                title: '<img src="styles/legend/Pistesdaccs_6.png" /> Pistes d\'accès'
            });
var format_Insfrastructurespastorales_7 = new ol.format.GeoJSON();
var features_Insfrastructurespastorales_7 = format_Insfrastructurespastorales_7.readFeatures(json_Insfrastructurespastorales_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Insfrastructurespastorales_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Insfrastructurespastorales_7.addFeatures(features_Insfrastructurespastorales_7);
var lyr_Insfrastructurespastorales_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Insfrastructurespastorales_7, 
                style: style_Insfrastructurespastorales_7,
                popuplayertitle: 'Insfrastructures pastorales',
                interactive: true,
    title: 'Insfrastructures pastorales<br />\
    <img src="styles/legend/Insfrastructurespastorales_7_0.png" /> <br />' });

lyr_Basemap_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_OSMStandard_2.setVisible(true);lyr_Batis_3.setVisible(true);lyr_Zonepastorale_4.setVisible(true);lyr_Voirie_5.setVisible(true);lyr_Pistesdaccs_6.setVisible(true);lyr_Insfrastructurespastorales_7.setVisible(true);
var layersList = [lyr_Basemap_0,lyr_GoogleHybrid_1,lyr_OSMStandard_2,lyr_Batis_3,lyr_Zonepastorale_4,lyr_Voirie_5,lyr_Pistesdaccs_6,lyr_Insfrastructurespastorales_7];
lyr_Batis_3.set('fieldAliases', {'osm_id': 'osm_id', 'osm_way_id': 'osm_way_id', 'name': 'name', 'type': 'type', 'aeroway': 'aeroway', 'amenity': 'amenity', 'admin_leve': 'admin_leve', 'barrier': 'barrier', 'boundary': 'boundary', 'building': 'building', 'craft': 'craft', 'geological': 'geological', 'historic': 'historic', 'land_area': 'land_area', 'landuse': 'landuse', 'leisure': 'leisure', 'man_made': 'man_made', 'military': 'military', 'natural': 'natural', 'office': 'office', 'place': 'place', 'shop': 'shop', 'sport': 'sport', 'tourism': 'tourism', 'other_tags': 'other_tags', });
lyr_Zonepastorale_4.set('fieldAliases', {'id': 'id', 'Villages': 'Villages limitrophes  ', 'N Balises': 'Nombre de balises', 'Périmètr': 'Périmètre', 'Superficie': 'Superficie (Ha)', });
lyr_Voirie_5.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'railway': 'railway', 'z_order': 'z_order', 'other_tags': 'other_tags', });
lyr_Pistesdaccs_6.set('fieldAliases', {'id': 'id', 'Longueur': 'Longueur piste', 'N Balises': 'Nombre Balises  ', });
lyr_Insfrastructurespastorales_7.set('fieldAliases', {'id': 'id', 'An réalis': 'Année de réalisation', 'Fonctionna': 'Fonctionnalité', 'Part Réal': 'Partenaires  ', 'Exis COGES': 'Existence COGES', 'Débit/Vol': 'Débit/Volumes  ', 'Coord X': 'Coord X', 'Coord Y': 'Coord Y', 'Photo': 'Photo', 'Région': 'Région', 'Provinces': 'Provinces', 'Communes': 'Communes', 'Types d\'in': 'Types d\'infrastructure  ', });
lyr_Batis_3.set('fieldImages', {'osm_id': 'TextEdit', 'osm_way_id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'aeroway': 'TextEdit', 'amenity': 'TextEdit', 'admin_leve': 'TextEdit', 'barrier': 'TextEdit', 'boundary': 'TextEdit', 'building': 'TextEdit', 'craft': 'TextEdit', 'geological': 'TextEdit', 'historic': 'TextEdit', 'land_area': 'TextEdit', 'landuse': 'TextEdit', 'leisure': 'TextEdit', 'man_made': 'TextEdit', 'military': 'TextEdit', 'natural': 'TextEdit', 'office': 'TextEdit', 'place': 'TextEdit', 'shop': 'TextEdit', 'sport': 'TextEdit', 'tourism': 'TextEdit', 'other_tags': 'TextEdit', });
lyr_Zonepastorale_4.set('fieldImages', {'id': 'TextEdit', 'Villages': 'ValueMap', 'N Balises': 'TextEdit', 'Périmètr': 'TextEdit', 'Superficie': 'TextEdit', });
lyr_Voirie_5.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'highway': 'TextEdit', 'waterway': 'TextEdit', 'aerialway': 'TextEdit', 'barrier': 'TextEdit', 'man_made': 'TextEdit', 'railway': 'TextEdit', 'z_order': 'TextEdit', 'other_tags': 'TextEdit', });
lyr_Pistesdaccs_6.set('fieldImages', {'id': 'TextEdit', 'Longueur': 'TextEdit', 'N Balises': 'TextEdit', });
lyr_Insfrastructurespastorales_7.set('fieldImages', {'id': 'TextEdit', 'An réalis': 'DateTime', 'Fonctionna': 'ValueMap', 'Part Réal': 'TextEdit', 'Exis COGES': 'ValueMap', 'Débit/Vol': 'TextEdit', 'Coord X': 'TextEdit', 'Coord Y': 'TextEdit', 'Photo': 'ExternalResource', 'Région': 'TextEdit', 'Provinces': 'TextEdit', 'Communes': 'ValueMap', 'Types d\'in': 'ValueMap', });
lyr_Batis_3.set('fieldLabels', {'osm_id': 'no label', 'osm_way_id': 'no label', 'name': 'no label', 'type': 'no label', 'aeroway': 'no label', 'amenity': 'no label', 'admin_leve': 'no label', 'barrier': 'no label', 'boundary': 'no label', 'building': 'no label', 'craft': 'no label', 'geological': 'no label', 'historic': 'no label', 'land_area': 'no label', 'landuse': 'no label', 'leisure': 'no label', 'man_made': 'no label', 'military': 'no label', 'natural': 'no label', 'office': 'no label', 'place': 'no label', 'shop': 'no label', 'sport': 'no label', 'tourism': 'no label', 'other_tags': 'no label', });
lyr_Zonepastorale_4.set('fieldLabels', {'id': 'no label', 'Villages': 'inline label - visible with data', 'N Balises': 'inline label - visible with data', 'Périmètr': 'inline label - visible with data', 'Superficie': 'inline label - visible with data', });
lyr_Voirie_5.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'highway': 'no label', 'waterway': 'no label', 'aerialway': 'no label', 'barrier': 'no label', 'man_made': 'no label', 'railway': 'no label', 'z_order': 'no label', 'other_tags': 'no label', });
lyr_Pistesdaccs_6.set('fieldLabels', {'id': 'no label', 'Longueur': 'inline label - visible with data', 'N Balises': 'inline label - visible with data', });
lyr_Insfrastructurespastorales_7.set('fieldLabels', {'id': 'no label', 'An réalis': 'inline label - visible with data', 'Fonctionna': 'inline label - visible with data', 'Part Réal': 'inline label - visible with data', 'Exis COGES': 'inline label - visible with data', 'Débit/Vol': 'inline label - visible with data', 'Coord X': 'inline label - visible with data', 'Coord Y': 'inline label - visible with data', 'Photo': 'inline label - visible with data', 'Région': 'inline label - visible with data', 'Provinces': 'inline label - visible with data', 'Communes': 'inline label - visible with data', 'Types d\'in': 'inline label - visible with data', });
lyr_Insfrastructurespastorales_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});