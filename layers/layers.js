var wms_layers = [];


        var lyr_DarkMatter_0 = new ol.layer.Tile({
            'title': 'Dark Matter',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
            })
        });
var format_ADM_PADANG_1 = new ol.format.GeoJSON();
var features_ADM_PADANG_1 = format_ADM_PADANG_1.readFeatures(json_ADM_PADANG_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADM_PADANG_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADM_PADANG_1.addFeatures(features_ADM_PADANG_1);
var lyr_ADM_PADANG_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADM_PADANG_1, 
                style: style_ADM_PADANG_1,
                popuplayertitle: 'ADM_PADANG',
                interactive: false,
                title: '<img src="styles/legend/ADM_PADANG_1.png" /> ADM_PADANG'
            });
var format_Keterjangkauan_2 = new ol.format.GeoJSON();
var features_Keterjangkauan_2 = format_Keterjangkauan_2.readFeatures(json_Keterjangkauan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Keterjangkauan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Keterjangkauan_2.addFeatures(features_Keterjangkauan_2);
var lyr_Keterjangkauan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Keterjangkauan_2, 
                style: style_Keterjangkauan_2,
                popuplayertitle: 'Keterjangkauan',
                interactive: false,
    title: 'Keterjangkauan<br />\
    <img src="styles/legend/Keterjangkauan_2_0.png" /> Cukup dekat<br />\
    <img src="styles/legend/Keterjangkauan_2_1.png" /> Masih terjangkau<br />\
    <img src="styles/legend/Keterjangkauan_2_2.png" /> Sangat dekat<br />\
    <img src="styles/legend/Keterjangkauan_2_3.png" /> Tidak terlayani<br />' });
var format_buffer_est_3 = new ol.format.GeoJSON();
var features_buffer_est_3 = format_buffer_est_3.readFeatures(json_buffer_est_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buffer_est_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buffer_est_3.addFeatures(features_buffer_est_3);
var lyr_buffer_est_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buffer_est_3, 
                style: style_buffer_est_3,
                popuplayertitle: 'buffer_est',
                interactive: true,
    title: 'buffer_est<br />\
    <img src="styles/legend/buffer_est_3_0.png" /> 100.00000000000<br />\
    <img src="styles/legend/buffer_est_3_1.png" /> 250.00000000000<br />\
    <img src="styles/legend/buffer_est_3_2.png" /> 500.00000000000<br />' });
var format_JALAN_PADANG_4 = new ol.format.GeoJSON();
var features_JALAN_PADANG_4 = format_JALAN_PADANG_4.readFeatures(json_JALAN_PADANG_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_PADANG_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_PADANG_4.addFeatures(features_JALAN_PADANG_4);
var lyr_JALAN_PADANG_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_PADANG_4, 
                style: style_JALAN_PADANG_4,
                popuplayertitle: 'JALAN_PADANG',
                interactive: false,
    title: 'JALAN_PADANG<br />\
    <img src="styles/legend/JALAN_PADANG_4_0.png" /> Jalan Arteri<br />\
    <img src="styles/legend/JALAN_PADANG_4_1.png" /> Jalan Lain<br />\
    <img src="styles/legend/JALAN_PADANG_4_2.png" /> Jalan Lokal<br />\
    <img src="styles/legend/JALAN_PADANG_4_3.png" /> Jalan Setapak<br />' });
var format_TPSEstimasi_Populasi_5 = new ol.format.GeoJSON();
var features_TPSEstimasi_Populasi_5 = format_TPSEstimasi_Populasi_5.readFeatures(json_TPSEstimasi_Populasi_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TPSEstimasi_Populasi_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TPSEstimasi_Populasi_5.addFeatures(features_TPSEstimasi_Populasi_5);
var lyr_TPSEstimasi_Populasi_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TPSEstimasi_Populasi_5, 
                style: style_TPSEstimasi_Populasi_5,
                popuplayertitle: 'TPS-Estimasi_Populasi',
                interactive: false,
                title: '<img src="styles/legend/TPSEstimasi_Populasi_5.png" /> TPS-Estimasi_Populasi'
            });
var format_TPSJenis_6 = new ol.format.GeoJSON();
var features_TPSJenis_6 = format_TPSJenis_6.readFeatures(json_TPSJenis_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TPSJenis_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TPSJenis_6.addFeatures(features_TPSJenis_6);
var lyr_TPSJenis_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TPSJenis_6, 
                style: style_TPSJenis_6,
                popuplayertitle: 'TPS-Jenis',
                interactive: false,
    title: 'TPS-Jenis<br />\
    <img src="styles/legend/TPSJenis_6_0.png" /> PEMUKIMAN MASYARAKAT<br />\
    <img src="styles/legend/TPSJenis_6_1.png" /> TERSEDIA JAM 16:00 - 05:00 WIB<br />\
    <img src="styles/legend/TPSJenis_6_2.png" /> WAJIB RETRIBUSI<br />' });

lyr_DarkMatter_0.setVisible(true);lyr_ADM_PADANG_1.setVisible(true);lyr_Keterjangkauan_2.setVisible(true);lyr_buffer_est_3.setVisible(true);lyr_JALAN_PADANG_4.setVisible(true);lyr_TPSEstimasi_Populasi_5.setVisible(true);lyr_TPSJenis_6.setVisible(true);
var layersList = [lyr_DarkMatter_0,lyr_ADM_PADANG_1,lyr_Keterjangkauan_2,lyr_buffer_est_3,lyr_JALAN_PADANG_4,lyr_TPSEstimasi_Populasi_5,lyr_TPSJenis_6];
lyr_ADM_PADANG_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_Keterjangkauan_2.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'Join_Count': 'Join_Count', 'TARGET_FID': 'TARGET_FID', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Luas': 'Luas', 'Total_Est': 'Total_Est', 'Name': 'Name', 'descriptio': 'descriptio', 'F12': 'F12', 'LATTITUDE': 'LATTITUDE', 'LONGITUDE': 'LONGITUDE', 'KECAMATAN': 'KECAMATAN', 'NO': 'NO', 'TITIK_PENE': 'TITIK_PENE', 'JUMLAH_KON': 'JUMLAH_KON', 'KETERANGAN': 'KETERANGAN', 'STATUS': 'STATUS', 'gx_media_l': 'gx_media_l', 'JUMLAH_K_1': 'JUMLAH_K_1', 'TITIK_PE_1': 'TITIK_PE_1', 'BUFF_DIST': 'BUFF_DIST', 'ORIG_FID': 'ORIG_FID', 'Shape_Area': 'Shape_Area', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Ar_1': 'Shape_Ar_1', 'Aksesibili': 'Aksesibili', });
lyr_buffer_est_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Join_Count': 'Join_Count', 'TARGET_FID': 'TARGET_FID', 'Name': 'Nama Tps', 'descriptio': 'descriptio', 'F12': 'F12', 'LATTITUDE': 'Lattitude', 'LONGITUDE': 'LONGITUDE', 'KECAMATAN': 'Kecamatan', 'NO': 'NO', 'TITIK_PENE': 'Titik Penenempatan Kontainer', 'JUMLAH_KON': 'Jumlah Kontainer', 'KETERANGAN': 'KETERANGAN', 'STATUS': 'status', 'gx_media_l': 'gx_media_l', 'JUMLAH_K_1': 'JUMLAH_K_1', 'TITIK_PE_1': 'TITIK_PE_1', 'BUFF_DIST': 'Jarak Keterjangkauan', 'ORIG_FID': 'ORIG_FID', 'OBJECTID_1': 'OBJECTID_1', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', 'Luas': 'Luas', 'Total_Est': 'Total Estimasi Yang Terlayani', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Ar_1': 'Shape_Ar_1', });
lyr_JALAN_PADANG_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Le_1': 'Shape_Le_1', });
lyr_TPSEstimasi_Populasi_5.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'Join_Count': 'Join_Count', 'TARGET_FID': 'TARGET_FID', 'OBJECTID': 'OBJECTID', 'Name': 'Name', 'descriptio': 'descriptio', 'LATTITUDE': 'LATTITUDE', 'LONGITUDE': 'LONGITUDE', 'KECAMATAN': 'KECAMATAN', 'TITIK_PENE': 'TITIK_PENE', 'JUMLAH_KON': 'JUMLAH_KON', 'KETERANGAN': 'KETERANGAN', 'STATUS': 'STATUS', 'gx_media_l': 'gx_media_l', 'TITIK_PE_1': 'TITIK_PE_1', 'OBJECTID_2': 'OBJECTID_2', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Luas': 'Luas', 'Total_Est': 'Total_Est', });
lyr_TPSJenis_6.set('fieldAliases', {'OBJECTID': 'Nama Tps', 'Name': 'Nama Tps', 'descriptio': 'descriptio', 'LATTITUDE': 'LATTITUDE', 'LONGITUDE': 'LONGITUDE', 'KECAMATAN': 'KECAMATAN', 'TITIK_PENE': 'TITIK_PENE', 'JUMLAH_KON': 'JUMLAH_KON', 'KETERANGAN': 'Jenis Kontainer', 'STATUS': 'STATUS', 'gx_media_l': 'gx_media_l', 'TITIK_PE_1': 'TITIK_PE_1', });
lyr_ADM_PADANG_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Keterjangkauan_2.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'Join_Count': 'TextEdit', 'TARGET_FID': 'TextEdit', 'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Luas': 'TextEdit', 'Total_Est': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'F12': 'TextEdit', 'LATTITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'KECAMATAN': 'TextEdit', 'NO': 'TextEdit', 'TITIK_PENE': 'TextEdit', 'JUMLAH_KON': 'TextEdit', 'KETERANGAN': 'TextEdit', 'STATUS': 'TextEdit', 'gx_media_l': 'TextEdit', 'JUMLAH_K_1': 'TextEdit', 'TITIK_PE_1': 'TextEdit', 'BUFF_DIST': 'TextEdit', 'ORIG_FID': 'TextEdit', 'Shape_Area': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Ar_1': 'TextEdit', 'Aksesibili': 'TextEdit', });
lyr_buffer_est_3.set('fieldImages', {'OBJECTID': 'Hidden', 'Join_Count': 'Hidden', 'TARGET_FID': 'Hidden', 'Name': 'TextEdit', 'descriptio': 'Hidden', 'F12': 'Hidden', 'LATTITUDE': 'TextEdit', 'LONGITUDE': 'Hidden', 'KECAMATAN': 'TextEdit', 'NO': 'Hidden', 'TITIK_PENE': 'TextEdit', 'JUMLAH_KON': 'TextEdit', 'KETERANGAN': 'Hidden', 'STATUS': 'TextEdit', 'gx_media_l': 'Hidden', 'JUMLAH_K_1': 'Hidden', 'TITIK_PE_1': 'Hidden', 'BUFF_DIST': 'TextEdit', 'ORIG_FID': 'Hidden', 'OBJECTID_1': 'Hidden', 'NAMOBJ': 'Hidden', 'FCODE': 'Hidden', 'REMARK': 'Hidden', 'SRS_ID': 'Hidden', 'LCODE': 'Hidden', 'METADATA': 'Hidden', 'SHAPE_Leng': 'Hidden', 'Shape_Le_1': 'Hidden', 'Shape_Area': 'Hidden', 'Luas': 'Hidden', 'Total_Est': 'Hidden', 'Shape_Le_2': 'Hidden', 'Shape_Ar_1': 'Hidden', });
lyr_JALAN_PADANG_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', });
lyr_TPSEstimasi_Populasi_5.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'Join_Count': 'TextEdit', 'TARGET_FID': 'TextEdit', 'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'LATTITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'KECAMATAN': 'TextEdit', 'TITIK_PENE': 'TextEdit', 'JUMLAH_KON': 'TextEdit', 'KETERANGAN': 'TextEdit', 'STATUS': 'TextEdit', 'gx_media_l': 'TextEdit', 'TITIK_PE_1': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Luas': 'TextEdit', 'Total_Est': 'TextEdit', });
lyr_TPSJenis_6.set('fieldImages', {'OBJECTID': 'Hidden', 'Name': 'TextEdit', 'descriptio': 'Hidden', 'LATTITUDE': 'Hidden', 'LONGITUDE': 'Hidden', 'KECAMATAN': 'Hidden', 'TITIK_PENE': 'Hidden', 'JUMLAH_KON': 'Hidden', 'KETERANGAN': 'TextEdit', 'STATUS': 'Hidden', 'gx_media_l': 'Hidden', 'TITIK_PE_1': 'Hidden', });
lyr_ADM_PADANG_1.set('fieldLabels', {'OBJECTID': 'no label', 'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_Keterjangkauan_2.set('fieldLabels', {'OBJECTID_1': 'no label', 'Join_Count': 'no label', 'TARGET_FID': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'Shape_Le_1': 'no label', 'Luas': 'no label', 'Total_Est': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'F12': 'no label', 'LATTITUDE': 'no label', 'LONGITUDE': 'no label', 'KECAMATAN': 'no label', 'NO': 'no label', 'TITIK_PENE': 'no label', 'JUMLAH_KON': 'no label', 'KETERANGAN': 'no label', 'STATUS': 'no label', 'gx_media_l': 'no label', 'JUMLAH_K_1': 'no label', 'TITIK_PE_1': 'no label', 'BUFF_DIST': 'no label', 'ORIG_FID': 'no label', 'Shape_Area': 'no label', 'Shape_Le_2': 'no label', 'Shape_Ar_1': 'no label', 'Aksesibili': 'no label', });
lyr_buffer_est_3.set('fieldLabels', {'Name': 'inline label - always visible', 'LATTITUDE': 'inline label - always visible', 'KECAMATAN': 'inline label - always visible', 'TITIK_PENE': 'inline label - always visible', 'JUMLAH_KON': 'inline label - always visible', 'STATUS': 'inline label - always visible', 'BUFF_DIST': 'inline label - always visible', });
lyr_JALAN_PADANG_4.set('fieldLabels', {'OBJECTID': 'no label', 'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'Shape_Le_1': 'no label', });
lyr_TPSEstimasi_Populasi_5.set('fieldLabels', {'OBJECTID_1': 'no label', 'Join_Count': 'no label', 'TARGET_FID': 'no label', 'OBJECTID': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'LATTITUDE': 'no label', 'LONGITUDE': 'no label', 'KECAMATAN': 'no label', 'TITIK_PENE': 'no label', 'JUMLAH_KON': 'no label', 'KETERANGAN': 'no label', 'STATUS': 'no label', 'gx_media_l': 'no label', 'TITIK_PE_1': 'no label', 'OBJECTID_2': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'Shape_Le_1': 'no label', 'Luas': 'no label', 'Total_Est': 'no label', });
lyr_TPSJenis_6.set('fieldLabels', {'Name': 'inline label - always visible', 'KETERANGAN': 'inline label - always visible', });
lyr_TPSJenis_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});