var simplemaps_countrymap_mapdata={
  main_settings: {
   //General settings
    width: "300", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    
    //State defaults
    state_description: "State description",
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
    //Location defaults
    location_description: "Location description",
    location_url: "",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#d5ddec",
    label_hover_color: "#d5ddec",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
    //Zoom settings
    zoom: "yes",
    manual_zoom: "yes",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    popups: "detect",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    COL1283: {
      name: "Amazonas"
    },
    COL1314: {
      name: "Antioquia"
    },
    COL1315: {
      name: "Boyacá"
    },
    COL1316: {
      name: "Córdoba"
    },
    COL1317: {
      name: "Santander"
    },
    COL1318: {
      name: "La Guajira"
    },
    COL1342: {
      name: "San Andrés y Providencia"
    },
    COL1397: {
      name: "Caldas"
    },
    COL1398: {
      name: "Cundinamarca"
    },
    COL1399: {
      name: "Bogota"
    },
    COL1400: {
      name: "Quindío"
    },
    COL1401: {
      name: "Risaralda"
    },
    COL1402: {
      name: "Tolima"
    },
    COL1403: {
      name: "Caquetá"
    },
    COL1404: {
      name: "Cauca"
    },
    COL1405: {
      name: "Huila"
    },
    COL1406: {
      name: "Nariño"
    },
    COL1407: {
      name: "Putumayo"
    },
    COL1408: {
      name: "Valle del Cauca"
    },
    COL1412: {
      name: "Atlántico"
    },
    COL1413: {
      name: "Bolívar"
    },
    COL1414: {
      name: "Cesar"
    },
    COL1415: {
      name: "Chocó"
    },
    COL1416: {
      name: "Magdalena"
    },
    COL1417: {
      name: "Sucre"
    },
    COL1420: {
      name: "Arauca"
    },
    COL1421: {
      name: "Norte de Santander"
    },
    COL1422: {
      name: "Casanare"
    },
    COL1423: {
      name: "Guaviare"
    },
    COL1424: {
      name: "Guainía"
    },
    COL1425: {
      name: "Meta"
    },
    COL1426: {
      name: "Vaupés"
    },
    COL1427: {
      name: "Vichada"
    }
  },
  locations: {},
  labels: {},
  legend: {
    entries: []
  },
  regions: {
    "0": {
      states: [
        "COL1314",
        "COL1315",
        "COL1317",
        "COL1397",
        "COL1398",
        "COL1400",
        "COL1401",
        "COL1402",
        "COL1404",
        "COL1405",
        "COL1406",
        "COL1408",
        "COL1421",
        "COL1399"
      ],
      name: "Region Andina",
      color: "#ac4419"
    },
    "1": {
      states: [
        "COL1283",
        "COL1403",
        "COL1407",
        "COL1423",
        "COL1424",
        "COL1426"
      ],
      name: "Region Amazónica",
      color: "#84a30a"
    },
    "2": {
      states: [
        "COL1316",
        "COL1318",
        "COL1412",
        "COL1413",
        "COL1414",
        "COL1416",
        "COL1417"
      ],
      name: "Region Caribe",
      color: "#ff6a6a"
    },
    "3": {
      states: [
        "COL1342"
      ],
      name: "Region insular"
    },
    "4": {
      states: [
        "COL1404",
        "COL1406",
        "COL1408",
        "COL1415"
      ],
      name: "Region Pacifica",
      color: "#fff900"
    },
    "5": {
      states: [
        "COL1420",
        "COL1422",
        "COL1425",
        "COL1427"
      ],
      name: "Region Orinoquia",
      color: "#2aff00"
    }
  }
};