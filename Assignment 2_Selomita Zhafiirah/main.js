var canvas = document.getElementById("myCanvas");
var gl = canvas.getContext("webgl");




var verticesA1 = [
  //depan
  -0.750000, 0.900000, 0,         0.974, 0.99, 0.00,
  -0.830000, 0.300000, 0,         0.974, 0.99, 0.00,
  -0.900000, 0.300000, 0,         0.974, 0.99, 0.00,
  
  //bawah
  -0.830000, 0.300000, 0,         0.974, 0.79, 0.00,
  -0.900000, 0.300000, 0,         0.974, 0.79, 0.00,
  -0.900000, 0.300000, -0.5,         0.974, 0.79, 0.00,
  -0.830000, 0.300000, -0.5,         0.974, 0.79, 0.00,

  //kiri
  -0.750000, 0.900000, 0,         0.974, 0.79, 0.00,
  -0.900000, 0.300000, 0,         0.974, 0.79, 0.00,
  -0.900000, 0.300000, -0.5,      0.974, 0.79, 0.00,
  -0.750000, 0.900000, -0.5,      0.974, 0.79, 0.00,

  //belakang
  -0.750000, 0.900000, -0.5,              0.974, 0.99, 0.00,
  -0.830000, 0.300000, -0.5,              0.974, 0.99, 0.00,
  -0.900000, 0.300000, -0.5,              0.974, 0.99, 0.00,
  
];

var indicesA1 = [
  0, 1, 2,
  3, 4, 5,  3, 5, 6,
  7, 8, 9,  7, 9, 10,
  11, 12, 13  
];

var verticesA2 = [
  //depan
  -0.825000, 0.300000, 0,         0.974, 0.99, 0.00,
  -0.745000, 0.900000, 0,         0.974, 0.99, 0.00,
  -0.677000, 0.900000, 0,         0.974, 0.99, 0.00,

  //kanan
  -0.677000, 0.900000, 0,         0.974, 0.9, 0.00,
  -0.825000, 0.300000, 0,         0.974, 0.79, 0.00,
  -0.825000, 0.300000, -0.5,              0.974, 0.79, 0.00,
  -0.677000, 0.900000, -0.5,              0.974, 0.79, 0.00,

  //belakang
  -0.825000, 0.300000, -0.5,              0.974, 0.99, 0.00,
  -0.745000, 0.900000, -0.5,              0.974, 0.99, 0.00,
  -0.677000, 0.900000, -0.5,              0.974, 0.99, 0.00,

];

var indicesA2 = [
  0, 1, 2,
  3, 4, 5,  3, 5, 6,
  7, 8, 9
];

var verticesA3 = [
  //depan
  -0.672000, 0.900000, 0,         0.974, 0.99, 0.00,
  -0.602000, 0.300000, 0,         0.974, 0.99, 0.00,
  -0.672000, 0.300000, 0,         0.974, 0.99, 0.00,

  //kiri
  -0.672000, 0.900000, 0,         0.974, 0.79, 0.00,
  -0.672000, 0.300000, 0,         0.974, 0.79, 0.00,
  -0.672000, 0.300000, -0.5,              0.974, 0.79, 0.00,
  -0.672000, 0.900000, -0.5,              0.974, 0.79, 0.00,

  //kanan
  -0.672000, 0.900000, 0,         0.974, 0.79, 0.00,
  -0.602000, 0.300000, 0,         0.974, 0.79, 0.00,
  -0.602000, 0.300000, -0.5,              0.974, 0.79, 0.00,
  -0.672000, 0.900000, -0.5,              0.974, 0.79, 0.00,

  //belakang
  -0.672000, 0.900000, -0.5,              0.974, 0.99, 0.00,
  -0.602000, 0.300000, -0.5,              0.974, 0.99, 0.00,
  -0.672000, 0.300000, -0.5,              0.974, 0.99, 0.00,
  
];

var indicesA3 = [
  0, 1, 2,
  3, 4, 5,  3, 5, 6,
  7, 8, 9,  7, 9, 10,
  11, 12, 13
];

var verticesA4 = [
  //depan
  -0.758000, 0.550000, 0,         0.974, 0.99, 0.00,
  -0.677000, 0.880000, 0,         0.974, 0.99, 0.00,
  -0.677000, 0.550000, 0,         0.974, 0.99, 0.00,

  //bawah
  -0.677000, 0.550000, 0,         0.974, 0.79, 0.00,
  -0.758000, 0.550000, 0,         0.974, 0.79, 0.00,
  -0.758000, 0.550000, -0.5,              0.974, 0.79, 0.00,
  -0.677000, 0.550000, -0.5,              0.974, 0.79, 0.00,

  //belakang
  -0.758000, 0.550000, -0.5,              0.974, 0.99, 0.00,
  -0.677000, 0.880000, -0.5,              0.974, 0.99, 0.00,
  -0.677000, 0.550000, -0.5,              0.974, 0.99, 0.00,
];

var indicesA4 = [
  0, 1, 2,
  3, 4, 5,  3, 5, 6,
  7, 8, 9
];

var verticesH1 = [
  //depan
  -0.400000, 0.900000, 0,         0.974, 0.99, 0.00,
  -0.350000, 0.600000, 0,         0.974, 0.99, 0.00,
  -0.400000, 0.300000, 0,         0.974, 0.99, 0.00,

  //kiri
  -0.400000, 0.900000, 0,         0.974, 0.79, 0.00,
  -0.400000, 0.300000, 0,         0.974, 0.79, 0.00,
  -0.400000, 0.300000, -0.5,              0.974, 0.79, 0.00,
  -0.400000, 0.900000, -0.5,              0.974, 0.79, 0.00,

  //kanan atas
  -0.400000, 0.900000, 0,         0.974, 0.79, 0.00,
  -0.350000, 0.600000, 0,         0.974, 0.79, 0.00,
  -0.350000, 0.600000, -0.5,              0.974, 0.79, 0.00,
  -0.400000, 0.900000, -0.5,              0.974, 0.79, 0.00,

  //kanan bawah
  -0.350000, 0.600000, 0,         0.974, 0.79, 0.00,
  -0.400000, 0.300000, 0,         0.974, 0.79, 0.00,
  -0.400000, 0.300000, -0.5,              0.974, 0.79, 0.00,
  -0.350000, 0.600000, -0.5,              0.974, 0.79, 0.00,

  //belakang
  -0.400000, 0.900000, -0.5,              0.974, 0.99, 0.00,
  -0.350000, 0.600000, -0.5,              0.974, 0.99, 0.00,
  -0.400000, 0.300000, -0.5,              0.974, 0.99, 0.00,
];

var indicesH1 = [
  0, 1, 2,
  3, 4, 5,  3, 5, 6,
  7, 8, 9,  7, 9, 10,
  11, 12, 13,  11, 13, 14,
  15, 16, 17
];

var verticesH2 = [
  //depan
  -0.360000, 0.700000, 0,         0.974, 0.99, 0.00,
  -0.250000, 0.700000, 0,         0.974, 0.99, 0.00,
  -0.342000, 0.600000, 0,         0.974, 0.99, 0.00,

  //atas
  -0.250000, 0.700000, 0,         0.974, 0.79, 0.00,
  -0.360000, 0.700000, 0,         0.974, 0.79, 0.00,
  -0.360000, 0.700000, -0.5,              0.974, 0.79, 0.00,
  -0.250000, 0.700000, -0.5,              0.974, 0.79, 0.00,


  //kanan bawah
  -0.250000, 0.700000, 0,         0.974, 0.79, 0.00,
  -0.342000, 0.600000, 0,         0.974, 0.79, 0.00,
  -0.342000, 0.600000, -0.5,              0.974, 0.79, 0.00,
  -0.250000, 0.700000, -0.5,              0.974, 0.79, 0.00,

  //belakang
  -0.360000, 0.700000, -0.5,              0.974, 0.99, 0.00,
  -0.250000, 0.700000, -0.5,              0.974, 0.99, 0.00,
  -0.342000, 0.600000, -0.5,              0.974, 0.99, 0.00,
];

var indicesH2 = [
  0, 1, 2,
  3, 4, 5,  3, 5, 6,
  7, 8, 9,  7, 9, 10,
  11, 12, 13
];

var verticesH3 = [
  //depan
  -0.210000, 0.900000, 0,         0.974, 0.99, 0.00,
  -0.210000, 0.300000, 0,         0.974, 0.99, 0.00,
  -0.260000, 0.600000, 0,         0.974, 0.99, 0.00,

  //kiri atas
  -0.210000, 0.900000, 0,         0.974, 0.9, 0.00,
  -0.260000, 0.600000, 0,         0.974, 0.79, 0.00,
  -0.260000, 0.600000, -0.5,              0.974, 0.79, 0.00,
  -0.210000, 0.900000, -0.5,              0.974, 0.79, 0.00,

  //kiri bawah
  -0.260000, 0.600000, 0,         0.974, 0.79, 0.00,
  -0.210000, 0.300000, 0,         0.974, 0.79, 0.00,
  -0.210000, 0.300000, -0.5,              0.974, 0.79, 0.00,
  -0.260000, 0.600000, -0.5,              0.974, 0.79, 0.00,


  //kanan
  -0.210000, 0.900000, 0,         0.974, 0.79, 0.00,
  -0.210000, 0.300000, 0,         0.974, 0.79, 0.00,
  -0.210000, 0.300000, -0.5,              0.974, 0.79, 0.00,
  -0.210000, 0.900000, -0.5,              0.974, 0.79, 0.00,

  //belakang
  -0.210000, 0.900000, -0.5,              0.974, 0.99, 0.00,
  -0.210000, 0.300000, -0.5,              0.974, 0.99, 0.00,
  -0.260000, 0.600000, -0.5,              0.974, 0.99, 0.00
];

var indicesH3 = [
  0, 1, 2,
  3, 4, 5,  3, 5, 6,
  7, 8, 9,  7, 9, 10,
  11, 12, 13,  11, 13, 14,
  15, 16, 17

];

var verticesH4 = [
  //depan
  -0.245500, 0.700000, 0,         0.974, 0.99, 0.00,
  -0.265000, 0.600000, 0,         0.974, 0.99, 0.00,
  -0.332550, 0.600000, 0,         0.974, 0.99, 0.00,

  //bawah kiri
  -0.265000, 0.600000, 0,         0.974, 0.79, 0.00,
  -0.332550, 0.600000, 0,         0.974, 0.79, 0.00,
  -0.332550, 0.600000, -0.5,              0.974, 0.79, 0.00,
  -0.265000, 0.600000, -0.5,              0.974, 0.79, 0.00,

  //bawah kanan
  -0.245500, 0.700000, 0,         0.974, 0.79, 0.00,
  -0.265000, 0.600000, 0,         0.974, 0.79, 0.00,
  -0.265000, 0.600000, -0.5,              0.974, 0.79, 0.00,
  -0.245500, 0.700000, -0.5,              0.974, 0.79, 0.00,


  //belakang
  -0.245500, 0.700000, -0.5,              0.974, 0.99, 0.00,
  -0.265000, 0.600000, -0.5,              0.974, 0.99, 0.00,
  -0.332550, 0.600000, -0.5,              0.974, 0.99, 0.00,
];

var indicesH4 = [
  0, 1, 2,
  3, 4, 5,  3, 5, 6,
  7, 8, 9,  7, 9, 10,
  11, 12, 13

];

var vertices2 = [
  -0.820000, -0.230000, 0,                0.974, 0.99, 0.00,
  -0.820000, -0.230000, -0.5,             0.974, 0.99, 0.00,
  -0.900000, -0.230000, -0.5,             0.974, 0.99, 0.00,
  -0.900000, -0.230000, 0,                0.974, 0.99, 0.00,
  -0.850000, -0.000000, 0,                0.974, 0.99, 0.00,
  -0.850000, -0.000000, -0.5,             0.974, 0.99, 0.00,
  -0.700000, -0.000000, -0.5,             0.974, 0.99, 0.00,
  -0.700000, -0.000000, 0,                0.974, 0.99, 0.00,
  -0.650000, -0.200000, 0,                0.974, 0.99, 0.00,
  -0.650000, -0.200000, -0.5,             0.974, 0.99, 0.00,
  -0.650000, -0.350000, -0.5,             0.974, 0.99, 0.00,
  -0.650000, -0.350000, 0,                0.974, 0.99, 0.00,
  -0.777000, -0.600000, 0,                0.974, 0.99, 0.00,
  -0.777000, -0.600000, -0.5,             0.974, 0.99, 0.00,
  -0.650000, -0.600000, -0.5,             0.974, 0.99, 0.00,
  -0.650000, -0.600000, 0,                0.974, 0.99, 0.00,
  -0.650000, -0.750000, 0,                0.974, 0.99, 0.00,
  -0.650000, -0.750000, -0.5,             0.974, 0.99, 0.00,
  -0.900000, -0.750000, -0.5,             0.974, 0.99, 0.00,
  -0.900000, -0.750000, 0,                0.974, 0.99, 0.00,
  -0.900000, -0.600000, 0,                0.974, 0.99, 0.00,
  -0.900000, -0.600000, -0.5,             0.974, 0.99, 0.00,
  -0.740000, -0.350000, -0.5,             0.974, 0.99, 0.00,
  -0.740000, -0.350000, 0,                0.974, 0.99, 0.00,
  -0.740000, -0.230000, 0,                0.974, 0.99, 0.00,
  -0.740000, -0.230000, -0.5,             0.974, 0.99, 0.00,
  -0.760000, -0.150000, -0.5,             0.974, 0.99, 0.00,
  -0.760000, -0.150000, 0,                0.974, 0.99, 0.00,
  -0.800000, -0.150000, 0,                0.974, 0.99, 0.00,
  -0.800000, -0.150000, -0.5,             0.974, 0.99, 0.00,

  -0.820000, -0.230000, -0.5,             0.974, 0.99, 0.00,
  -0.820000, -0.230000, 0,                0.974, 0.99, 0.00,
  -0.900000, -0.230000, 0,                0.974, 0.99, 0.00,
  -0.900000, -0.230000, -0.5,             0.974, 0.99, 0.00,
  -0.850000, -0.000000, -0.5,             0.974, 0.99, 0.00,
  -0.850000, -0.000000, 0,                0.974, 0.99, 0.00,
  -0.700000, -0.000000, 0,                0.974, 0.99, 0.00,
  -0.700000, -0.000000, -0.5,             0.974, 0.99, 0.00,
  -0.650000, -0.200000, -0.5,             0.974, 0.99, 0.00,
  -0.650000, -0.200000, 0,                0.974, 0.99, 0.00,
  -0.650000, -0.350000, 0,                0.974, 0.99, 0.00,
  -0.650000, -0.350000, -0.5,             0.974, 0.99, 0.00,
  -0.777000, -0.600000, -0.5,             0.974, 0.99, 0.00,
  -0.777000, -0.600000, 0,                0.974, 0.99, 0.00,
  -0.650000, -0.600000, 0,                0.974, 0.99, 0.00,
  -0.650000, -0.600000, -0.5,             0.974, 0.99, 0.00,
  -0.650000, -0.750000, -0.5,             0.974, 0.99, 0.00,
  -0.650000, -0.750000, 0,                0.974, 0.99, 0.00,
  -0.900000, -0.750000, 0,                0.974, 0.99, 0.00,
  -0.900000, -0.750000, -0.5,             0.974, 0.99, 0.00,
  -0.900000, -0.600000, -0.5,             0.974, 0.99, 0.00,
  -0.900000, -0.600000, 0,                0.974, 0.99, 0.00,
  -0.740000, -0.350000, 0,                0.974, 0.99, 0.00,
  -0.740000, -0.350000, -0.5,             0.974, 0.99, 0.00,
  -0.740000, -0.230000, -0.5,             0.974, 0.99, 0.00,
  -0.740000, -0.230000, 0,                0.974, 0.99, 0.00,
  -0.760000, -0.150000, 0,                0.974, 0.99, 0.00,
  -0.760000, -0.150000, -0.5,             0.974, 0.99, 0.00,
  -0.800000, -0.150000, -0.5,             0.974, 0.99, 0.00,
  -0.800000, -0.150000, 0,                0.974, 0.99, 0.00
];

var indices2 = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
  17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46,
  47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59
];

var vertices0a = [
  -0.430000, -0.250000, 0,                0.974, 0.99, 0.00,
  -0.430000, -0.250000, -0.5,             0.974, 0.99, 0.00,
  -0.350000, 0.000000, -0.5,              0.974, 0.99, 0.00,
  -0.350000, 0.000000, 0,                 0.974, 0.99, 0.00,
  -0.250000, 0.000000, 0,                 0.974, 0.99, 0.00,
  -0.250000, 0.000000, -0.5,              0.974, 0.99, 0.00,
  -0.170000, -0.250000, -0.5,             0.974, 0.99, 0.00,
  -0.170000, -0.250000, 0,                0.974, 0.99, 0.00,
  -0.170000, -0.500000, 0,                0.974, 0.99, 0.00,
  -0.170000, -0.500000, -0.5,             0.974, 0.99, 0.00,
  -0.250000, -0.750000, -0.5,             0.974, 0.99, 0.00,
  -0.250000, -0.750000, 0,                0.974, 0.99, 0.00,
  -0.350000, -0.750000, 0,                0.974, 0.99, 0.00,
  -0.350000, -0.750000, -0.5,             0.974, 0.99, 0.00,
  -0.430000, -0.500000, -0.5,             0.974, 0.99, 0.00,
  -0.430000, -0.500000, 0,                0.974, 0.99, 0.00,

  -0.430000, -0.250000, 0,                0.974, 0.99, 0.00,
  -0.350000, 0.000000, 0,                 0.974, 0.99, 0.00,
  -0.350000, 0.000000, -0.5,              0.974, 0.99, 0.00,
  -0.250000, 0.000000, -0.5,              0.974, 0.99, 0.00,
  -0.250000, 0.000000, 0,                 0.974, 0.99, 0.00,
  -0.170000, -0.250000, 0,                0.974, 0.99, 0.00,
  -0.170000, -0.250000, -0.5,             0.974, 0.99, 0.00,
  -0.170000, -0.500000, -0.5,             0.974, 0.99, 0.00,
  -0.170000, -0.500000, 0,                0.974, 0.99, 0.00,
  -0.250000, -0.750000, 0,                0.974, 0.99, 0.00,
  -0.250000, -0.750000, -0.5,             0.974, 0.99, 0.00,
  -0.350000, -0.750000, -0.5,             0.974, 0.99, 0.00,
  -0.350000, -0.750000, 0,                0.974, 0.99, 0.00,
  -0.430000, -0.500000, 0,                0.974, 0.99, 0.00,
  -0.430000, -0.500000, -0.5,             0.974, 0.99, 0.00,
  -0.430000, -0.250000, -0.5,             0.974, 0.99, 0.00,
];

var vertices0b = [
  -0.360000, -0.250000, 0,                0.974, 0.99, 0.00,
  -0.360000, -0.250000, -0.5,             0.974, 0.99, 0.00,
  -0.325000, -0.120000, -0.5,             0.974, 0.99, 0.00,
  -0.325000, -0.120000, 0,                0.974, 0.99, 0.00,
  -0.275000, -0.120000, 0,                0.974, 0.99, 0.00,
  -0.275000, -0.120000, -0.5,             0.974, 0.99, 0.00,
  -0.240000, -0.250000, -0.5,             0.974, 0.99, 0.00,
  -0.240000, -0.250000, 0,                0.974, 0.99, 0.00,
  -0.240000, -0.500000, 0,                0.974, 0.99, 0.00,
  -0.240000, -0.500000, -0.5,             0.974, 0.99, 0.00,
  -0.275000, -0.630000, -0.5,             0.974, 0.99, 0.00,
  -0.275000, -0.630000, 0,                0.974, 0.99, 0.00,
  -0.325000, -0.630000, 0,                0.974, 0.99, 0.00,
  -0.325000, -0.630000, -0.5,             0.974, 0.99, 0.00,
  -0.360000, -0.500000, -0.5,             0.974, 0.99, 0.00,
  -0.360000, -0.500000, 0,                0.974, 0.99, 0.00,
  -0.360000, -0.250000, 0,                0.974, 0.99, 0.00,
 

  -0.325000, -0.120000, 0,                0.974, 0.99, 0.00,
  -0.325000, -0.120000, -0.5,             0.974, 0.99, 0.00,
  -0.275000, -0.120000, -0.5,             0.974, 0.99, 0.00,
  -0.275000, -0.120000, 0,                0.974, 0.99, 0.00,
  -0.240000, -0.250000, 0,                0.974, 0.99, 0.00,
  -0.240000, -0.250000, -0.5,             0.974, 0.99, 0.00,
  -0.240000, -0.500000, -0.5,             0.974, 0.99, 0.00,
  -0.240000, -0.500000, 0,                0.974, 0.99, 0.00,
  -0.275000, -0.630000, 0,                0.974, 0.99, 0.00,
  -0.275000, -0.630000, -0.5,             0.974, 0.99, 0.00,
  -0.325000, -0.630000, -0.5,             0.974, 0.99, 0.00,
  -0.325000, -0.630000, 0,                0.974, 0.99, 0.00,
  -0.360000, -0.500000, 0,                0.974, 0.99, 0.00,
  -0.360000, -0.500000, -0.5,             0.974, 0.99, 0.00,
  -0.360000, -0.250000, -0.5,             0.974, 0.99, 0.00,
];
var indices0 = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
  17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
];


var verticesCube = [
  // Face A       // Red      // Surface orientation
  -1, -1, -1,     1, 0, 0,    0, 0, -1,   // Index:  0    
   1, -1, -1,     1, 0, 0,    0, 0, -1,   // Index:  1
   1,  1, -1,     1, 0, 0,    0, 0, -1,   // Index:  2
  -1,  1, -1,     1, 0, 0,    0, 0, -1,   // Index:  3
  // Face B       // Yellow
  -1, -1,  1,     1, 1, 0,    0, 0, 1,    // Index:  4
   1, -1,  1,     1, 1, 0,    0, 0, 1,    // Index:  5
   1,  1,  1,     1, 1, 0,    0, 0, 1,    // Index:  6
  -1,  1,  1,     1, 1, 0,    0, 0, 1,    // Index:  7
  // Face C       // Green
  -1, -1, -1,     0, 1, 0,    -1, 0, 0,   // Index:  8
  -1,  1, -1,     0, 1, 0,    -1, 0, 0,   // Index:  9
  -1,  1,  1,     0, 1, 0,    -1, 0, 0,   // Index: 10
  -1, -1,  1,     0, 1, 0,    -1, 0, 0,   // Index: 11
  // Face D       // Blue
   1, -1, -1,     0, 0, 1,    1, 0, 0,    // Index: 12
   1,  1, -1,     0, 0, 1,    1, 0, 0,    // Index: 13
   1,  1,  1,     0, 0, 1,    1, 0, 0,    // Index: 14
   1, -1,  1,     0, 0, 1,    1, 0, 0,    // Index: 15
  // Face E       // Orange
  -1, -1, -1,     1, 0.5, 0,  0, -1, 0,   // Index: 16
  -1, -1,  1,     1, 0.5, 0,  0, -1, 0,   // Index: 17
   1, -1,  1,     1, 0.5, 0,  0, -1, 0,   // Index: 18
   1, -1, -1,     1, 0.5, 0,  0, -1, 0,   // Index: 19
  // Face F       // White
  -1,  1, -1,     1, 1, 1,    0, 1, 0,    // Index: 20
  -1,  1,  1,     1, 1, 1,    0, 1, 0,    // Index: 21
   1,  1,  1,     1, 1, 1,    0, 1, 0,    // Index: 22
   1,  1, -1,     
];

var indicesCube = [
    0, 1, 2,     0, 2, 3,     // Face A
    4, 5, 6,     4, 6, 7,     // Face B
    8, 9, 10,    8, 10, 11,   // Face C
    12, 13, 14,  12, 14, 15,  // Face D
    16, 17, 18,  16, 18, 19,  // Face E
    20, 21, 22,  20, 22, 23   // Face F     
];


// Create and store data into vertex buffer
var vertex_buffer = gl.createBuffer ();
gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

// Create and store data into color buffer
var color_buffer = gl.createBuffer ();
gl.bindBuffer(gl.ARRAY_BUFFER, color_buffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

// Create and store data into index buffer
var index_buffer = gl.createBuffer ();
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, index_buffer);
gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

/*=================== Shaders =========================*/

var vertCode = 'attribute vec3 position;'+
   'uniform mat4 Pmatrix;'+
   'uniform mat4 Vmatrix;'+
   'uniform mat4 Mmatrix;'+
   'attribute vec3 color;'+//the color of the point
   'varying vec3 vColor;'+

   'void main(void) { '+//pre-built function
      'gl_Position = Pmatrix*Vmatrix*Mmatrix*vec4(position, 1.);'+
      'vColor = color;'+
   '}';

var fragCode = 'precision mediump float;'+
   'varying vec3 vColor;'+
   'void main(void) {'+
      'gl_FragColor = vec4(vColor, 1.);'+
   '}';

var vertShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertShader, vertCode);
gl.compileShader(vertShader);

var fragShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragShader, fragCode);
gl.compileShader(fragShader);

var shaderProgram = gl.createProgram();
gl.attachShader(shaderProgram, vertShader);
gl.attachShader(shaderProgram, fragShader);
gl.linkProgram(shaderProgram);

/* ====== Associating attributes to vertex shader =====*/
var Pmatrix = gl.getUniformLocation(shaderProgram, "Pmatrix");
var Vmatrix = gl.getUniformLocation(shaderProgram, "Vmatrix");
var Mmatrix = gl.getUniformLocation(shaderProgram, "Mmatrix");

gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
var position = gl.getAttribLocation(shaderProgram, "position");
gl.vertexAttribPointer(position, 3, gl.FLOAT, false,0,0) ;

// Position
gl.enableVertexAttribArray(position);
gl.bindBuffer(gl.ARRAY_BUFFER, color_buffer);
var color = gl.getAttribLocation(shaderProgram, "color");
gl.vertexAttribPointer(color, 3, gl.FLOAT, false,0,0) ;

// Color
gl.enableVertexAttribArray(color);
gl.useProgram(shaderProgram);

/*==================== MATRIX =====================*/

function get_projection(angle, a, zMin, zMax) {
   var ang = Math.tan((angle*.5)*Math.PI/180);//angle*.5
   return [
      0.5/ang, 0 , 0, 0,
      0, 0.5*a/ang, 0, 0,
      0, 0, -(zMax+zMin)/(zMax-zMin), -1,
      0, 0, (-2*zMax*zMin)/(zMax-zMin), 0 
   ];
}

var proj_matrix = get_projection(40, canvas.width/canvas.height, 1, 100);

var mov_matrix = [1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1];
var view_matrix = [1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1];

// translating z
view_matrix[14] = view_matrix[14]-6;//zoom

/*==================== Rotation ====================*/

function rotateZ(m, angle) {
   var c = Math.cos(angle);
   var s = Math.sin(angle);
   var mv0 = m[0], mv4 = m[4], mv8 = m[8];

   m[0] = c*m[0]-s*m[1];
   m[4] = c*m[4]-s*m[5];
   m[8] = c*m[8]-s*m[9];

   m[1]=c*m[1]+s*mv0;
   m[5]=c*m[5]+s*mv4;
   m[9]=c*m[9]+s*mv8;
}

function rotateX(m, angle) {
   var c = Math.cos(angle);
   var s = Math.sin(angle);
   var mv1 = m[1], mv5 = m[5], mv9 = m[9];

   m[1] = m[1]*c-m[2]*s;
   m[5] = m[5]*c-m[6]*s;
   m[9] = m[9]*c-m[10]*s;

   m[2] = m[2]*c+mv1*s;
   m[6] = m[6]*c+mv5*s;
   m[10] = m[10]*c+mv9*s;
}

function rotateY(m, angle) {
   var c = Math.cos(angle);
   var s = Math.sin(angle);
   var mv0 = m[0], mv4 = m[4], mv8 = m[8];

   m[0] = c*m[0]+s*m[2];
   m[4] = c*m[4]+s*m[6];
   m[8] = c*m[8]+s*m[10];

   m[2] = c*m[2]-s*mv0;
   m[6] = c*m[6]-s*mv4;
   m[10] = c*m[10]-s*mv8;
}

/*================= Drawing ===========================*/
var time_old = 0;

var animate = function(time) {

   var dt = time-time_old;
   rotateZ(mov_matrix, dt*0.005);//time
   rotateY(mov_matrix, dt*0.002);
   rotateX(mov_matrix, dt*0.003);
   time_old = time;

   gl.enable(gl.DEPTH_TEST);
   gl.depthFunc(gl.LEQUAL);
   gl.clearColor(0.5, 0.5, 0.5, 0.9);
   gl.clearDepth(1.0);

   gl.viewport(0.0, 0.0, canvas.width, canvas.height);
   gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
   gl.uniformMatrix4fv(Pmatrix, false, proj_matrix);
   gl.uniformMatrix4fv(Vmatrix, false, view_matrix);
   gl.uniformMatrix4fv(Mmatrix, false, mov_matrix);
   gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, index_buffer);
   gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);

   window.requestAnimationFrame(animate);
}
animate(0);

const objects = [
  {
    vertices: verticesA1,
    indices: indicesA1,
    length: indicesA1.length,
    type: gl.TRIANGLES,
  },
  {
    vertices: verticesA2,
    indices: indicesA2,
    length: indicesA2.length,
    type: gl.TRIANGLES,
  },
  {
    vertices: verticesA3,
    indices: indicesA3,
    length: indicesA3.length,
    type: gl.TRIANGLES,
  },
  {
    vertices: verticesA4,
    indices: indicesA4,
    length: indicesA4.length,
    type: gl.TRIANGLES,
  },
  {
    vertices: verticesH1,
    indices: indicesH1,
    length: indicesH1.length,
    type: gl.TRIANGLES,
  },
  {
      vertices: verticesH2,
      indices: indicesH2,
      length: indicesH2.length,
      type: gl.TRIANGLES,
    },
    {
      vertices: verticesH3,
      indices: indicesH3,
      length: indicesH3.length,
      type: gl.TRIANGLES,
    },
    {
      vertices: verticesH4,
      indices: indicesH4,
      length: indicesH4.length,
      type: gl.TRIANGLES,
    },
  {
    vertices: vertices2,
    indices: indices2,
    length: indices2.length,
    type: gl.LINE_LOOPS,
  },
  {
    vertices: vertices0a,
    indices: indices0,
    length: indices0.length,
    type: gl.LINE_LOOP,
  },
  {
    vertices: vertices0b,
    indices: indices0,
    length: indices0.length,
    type: gl.LINE_LOOP,
  },
  {vertices: verticesCube,
  indices: indicesCube,
  length: indicesCube.length,
  type: gl.TRIANGLES},
];

const vertexShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShader, `
precision mediump float;

attribute vec3 position;
attribute vec3 color;
varying vec3 vColor;

// uniform mat4 matrix;
uniform mat4 mWorld;
uniform mat4 mView;
uniform mat4 mProj;

void main() {
    vColor = color;
    // gl_Position = matrix * vec4(position, 1);
    gl_Position = mProj * mView * mWorld * vec4(position, 1);
}
`);
gl.compileShader(vertexShader);

const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShader, `
precision mediump float;

varying vec3 vColor;

void main() {
    gl_FragColor = vec4(vColor, 1);
}
`);
gl.compileShader(fragmentShader);
console.log(gl.getShaderInfoLog(fragmentShader));

const program = gl.createProgram();
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);

// varoaible lokal
var rotateX = 0;
var rotateY = 0;
var canvasWidth = 12
var horizontalSpeed = 0.120;
var horizontalDelta = 0.0;
var verticalDelta = 0.0;
var scaleDelta = 0.0;
var scaleSpeed = 0.05;

// View
var cameraX = 0.0;
var cameraZ = 7.5;
var view = glMatrix.mat4.create();

glMatrix.mat4.lookAt(
  view,
  [cameraX, 0.0, cameraZ],
  [cameraX, 0.0, 0],
  [0.0, 1.0, 0.0]
);

var perspective = glMatrix.mat4.create();
glMatrix.mat4.perspective(perspective, Math.PI/2.4, 1, 0.5, 50.0);

const draw = (vertices, indices, start=0, end, type=gl.LINE_LOOP) =>{ 
  const buffer = gl.createBuffer();
  const indexBuffer = gl.createBuffer();

  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
  const aPosition = gl.getAttribLocation(program, 'position');
  const aColor = gl.getAttribLocation(program, 'color');

  gl.vertexAttribPointer(aPosition, 3, gl.FLOAT, false, 
    6 * Float32Array.BYTES_PER_ELEMENT, 
    0 * Float32Array.BYTES_PER_ELEMENT
  );
  gl.enableVertexAttribArray(aPosition);
    
    gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, 
      6 * Float32Array.BYTES_PER_ELEMENT, 
      3 * Float32Array.BYTES_PER_ELEMENT 
      );
    gl.enableVertexAttribArray(aColor);
    
    gl.drawElements(type, indices.length, gl.UNSIGNED_SHORT, 0);
}

gl.linkProgram(program);
gl.useProgram(program);
gl.enable(gl.DEPTH_TEST);

const animate2 = () =>{
    var model = glMatrix.mat4.create();

    if (horizontalDelta >= (canvasWidth/2) || horizontalDelta <= (-canvasWidth/2+1)) {
      horizontalSpeed = horizontalSpeed * -1;
    }

    horizontalDelta += horizontalSpeed;

    glMatrix.mat4.translate(model, model, [horizontalDelta, verticalDelta, 0.0]);
    
    var mWorld = gl.getUniformLocation(program, "mWorld");
    var mView = gl.getUniformLocation(program, "mView");
    var mProj = gl.getUniformLocation(program, "mProj");

    gl.uniformMatrix4fv(mWorld,false, model);
    gl.uniformMatrix4fv(mView, false, view);
    gl.uniformMatrix4fv(mProj, false, perspective);

    draw(objects[8].vertices, objects[8].indices, 0, objects[8].length, objects[8].type);
  }
  
  const animate0 = () =>{
    var model = glMatrix.mat4.create();

    if (scaleDelta >= 2 || scaleDelta <= -0.5) {
      scaleSpeed = scaleSpeed * -1;
    }

    scaleDelta += scaleSpeed;

    glMatrix.mat4.translate(model, model, [0, 0, scaleDelta]);
    
    var mWorld = gl.getUniformLocation(program, "mWorld");
    var mView = gl.getUniformLocation(program, "mView");
    var mProj = gl.getUniformLocation(program, "mProj"); 

    gl.uniformMatrix4fv(mWorld,false, model);
    gl.uniformMatrix4fv(mView, false, view);
    gl.uniformMatrix4fv(mProj, false, perspective);

    draw(objects[9].vertices, objects[9].indices, 0, objects[9].length, objects[9].type);
    draw(objects[10].vertices, objects[10].indices, 0, objects[10].length, objects[10].type);
    
  }

  const animateA = () =>{
    var model = glMatrix.mat4.create();

    glMatrix.mat4.rotateY(
      model, model, rotateY
    );

    var mWorld = gl.getUniformLocation(program, "mWorld");
    var mView = gl.getUniformLocation(program, "mView");
    var mProj = gl.getUniformLocation(program, "mProj"); 

    gl.uniformMatrix4fv(mWorld,false, model);
    gl.uniformMatrix4fv(mView, false, view);
    gl.uniformMatrix4fv(mProj, false, perspective);

    draw(objects[0].vertices, objects[0].indices, 0, objects[0].length, objects[0].type);
    draw(objects[1].vertices, objects[1].indices, 0, objects[1].length, objects[1].type);
    draw(objects[2].vertices, objects[2].indices, 0, objects[2].length, objects[3].type);
    draw(objects[3].vertices, objects[3].indices, 0, objects[3].length, objects[3].type);
  }

  const animateH = () =>{
    var model = glMatrix.mat4.create();

    glMatrix.mat4.rotateX(
      model, model, rotateX
    );

    var mWorld = gl.getUniformLocation(program, "mWorld");
    var mView = gl.getUniformLocation(program, "mView");
    var mProj = gl.getUniformLocation(program, "mProj");

    gl.uniformMatrix4fv(mWorld,false, model);
    gl.uniformMatrix4fv(mView, false, view);
    gl.uniformMatrix4fv(mProj, false, perspective);

    draw(objects[4].vertices, objects[4].indices, 0, objects[4].length, objects[4].type);
    draw(objects[5].vertices, objects[5].indices, 0, objects[5].length, objects[5].type);
    draw(objects[6].vertices, objects[6].indices, 0, objects[6].length, objects[6].type);
    draw(objects[7].vertices, objects[7].indices, 0, objects[7].length, objects[7].type);
  }

  const animateCube  = () =>{
    var model = glMatrix.mat4.create();

    glMatrix.mat4.rotateY(
      model, model, rotateY
    );

    var mWorld = gl.getUniformLocation(program, "mWorld");
    var mView = gl.getUniformLocation(program, "mView");
    var mProj = gl.getUniformLocation(program, "mProj"); 

    gl.uniformMatrix4fv(mWorld,false, model);
    gl.uniformMatrix4fv(mView, false, view);
    gl.uniformMatrix4fv(mProj, false, perspective);

    draw(objects[0].vertices, objects[0].indices, 0, objects[0].length, objects[0].type);
    draw(objects[1].vertices, objects[1].indices, 0, objects[1].length, objects[1].type);
    draw(objects[2].vertices, objects[2].indices, 0, objects[2].length, objects[3].type);
    draw(objects[3].vertices, objects[3].indices, 0, objects[3].length, objects[3].type);
  }
  

  function onKeydown(event) {
    if (event.keyCode == 65 || event.keyCode == 37) { // a / arrow kiri
      rotateY -= 0.2;
    } else if (event.keyCode == 68 || event.keyCode == 39) { // d / arrow kanan
      rotateY += 0.2;
    }

    if (event.keyCode == 87 || event.keyCode == 38) { // w / arrow atas
      rotateX -= 0.2;
    } else if (event.keyCode == 83 || event.keyCode == 40) { // s / arrow bawah
      rotateX += 0.2;
    }
  }
  document.addEventListener("keydown", onKeydown);

  const render = () => {  
    gl.clearColor(0.069, 0.168, 0.230, 0.7);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);  

    animateA();
    animateH();
    animate2();
    animate0();
    animateCube();
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
