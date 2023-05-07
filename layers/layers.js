ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:2056").setExtent([2702489.347757, 1112747.448242, 2706542.764428, 1114895.864911]);
var wms_layers = [];

var lyr_OMAPTicinoAreaFeatures_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://intelligeo.net/cgi-bin/qgis_mapserv.fcgi?version%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "omap_ti_areas",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "OMAP Ticino Area Features",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_OMAPTicinoAreaFeatures_0, 0]);
var lyr_OMAPTicinoLineFeatures_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://intelligeo.net/cgi-bin/qgis_mapserv.fcgi?version%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "omap_ti_lines",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "OMAP Ticino Line Features",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_OMAPTicinoLineFeatures_1, 0]);
var lyr_OMAPTicinoPointFeatures_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://intelligeo.net/cgi-bin/qgis_mapserv.fcgi?version%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "omap_ti_points",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "OMAP Ticino Point Features",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_OMAPTicinoPointFeatures_2, 0]);

lyr_OMAPTicinoAreaFeatures_0.setVisible(true);lyr_OMAPTicinoLineFeatures_1.setVisible(true);lyr_OMAPTicinoPointFeatures_2.setVisible(true);
var layersList = [lyr_OMAPTicinoAreaFeatures_0,lyr_OMAPTicinoLineFeatures_1,lyr_OMAPTicinoPointFeatures_2];
