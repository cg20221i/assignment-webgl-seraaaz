function main() {
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("webgl");

    var vertices = [
        // Number 0
        -0.43, -0.25, 5,   1, 1, 1,    0, 0, 1,
        -0.35, 0.0, 5,   1, 1, 1,    0, 0, 1,
        -0.25, 0.0, 5,   1, 1, 1,    0, 0, 1,
        -0.17, -0.25, 5,   1, 1, 1,    0, 0, 1,
        -0.17, -0.5, 5,   1, 1, 1,    0, 0, 1,
        -0.25, -0.75, 5,   1, 1, 1,    0, 0, 1,
        -0.35, -0.75, 5,   1, 1, 1,    0, 0, 1,
        -0.43, -0.5, 5,   1, 1, 1,    0, 0, 1,
        -0.43, -0.5, 4,   1, 1, 1,    0, 0, 1,
        -0.35, -0.75, 4,   1, 1, 1,    0, 0, 1,
        -0.25, -0.75, 4,   1, 1, 1,    0, 0, 1,
        -0.17, -0.5, 4,   1, 1, 1,    0, 0, 1,
        -0.17, -0.25, 4,   1, 1, 1,    0, 0, 1,
        -0.25, 0.0, 4,   1, 1, 1,    0, 0, 1,
        -0.35, 0.0, 4,   1, 1, 1,    0, 0, 1,
        -0.43, -0.25, 4,   1, 1, 1,    0, 0, 1, //16

        // Number 7
        -0.36, -0.25, 5,      1, 0, 0,    0, 0, 1,
        -0.325, -0.12, 5,      1, 0, 0,    0, 0, 1,
        -0.275, -0.12, 5,      1, 0, 0,    0, 0, 1,
        -0.24, -0.25, 5,      1, 0, 0,    0, 0, 1,
        -0.24, -0.5, 5,      1, 0, 0,    0, 0, 1,
        -0.275, -0.63, 5,      1, 0, 0,    0, 0, 1,
        -0.325, -0.63, 5,      1, 0, 0,    0, 0, 1,
        -0.36, -0.5, 5,      1, 0, 0,    0, 0, 1,
        -0.36, -0.5, 4,      1, 0, 0,    0, 0, 1,
        -0.325, -0.63, 4,      1, 0, 0,    0, 0, 1,
        -0.275, -0.63, 4,      1, 0, 0,    0, 0, 1,
        -0.24, -0.5, 4,      1, 0, 0,    0, 0, 1,
        -0.24, -0.25, 4,      1, 0, 0,    0, 0, 1,
        -0.275, -0.12, 4,      1, 0, 0,    0, 0, 1,
        -0.325, -0.12, 4,      1, 0, 0,    0, 0, 1,
        -0.36, -0.25, 4,      1, 0, 0,    0, 0, 1, //32


        // A
        -0.9, 0.3, 5,      0, 0, 0.8,    0, 0, 1, 
        -0.83, 0.3, 5,      0, 0, 0.8,    0, 0, 1,
        -0.75, 0.9, 5,      0, 0, 0.8,    0, 0, 1,
        -0.75, 0.9, 4,      0, 0, 0.8,    0, 0, 1,
        -0.83, 0.3, 4,      0, 0, 0.8,    0, 0, 1,
        -0.9, 0.3, 4,      0, 0, 0.8,    0, 0, 1,

        -0.825, 0.3, 5,      0, 0, 0.8,    0, 0, 1,
        -0.745, 0.9, 5,      0, 0, 0.8,    0, 0, 1,
        -0.677, 0.9, 5,      0, 0, 0.8,    0, 0, 1,
        -0.677, 0.9, 4,      0, 0, 0.8,    0, 0, 1,
        -0.745, 0.9, 4,      0, 0, 0.8,    0, 0, 1,
        -0.825, 0.3, 4,      0, 0, 0.8,    0, 0, 1,
        
        -0.672, 0.9, 5,      0, 0, 0.8,    0, 0, 1,
        -0.672, 0.3, 5,      0, 0, 0.8,    0, 0, 1,
        -0.602, 0.3, 5,      0, 0, 0.8,    0, 0, 1,
        -0.602, 0.3, 4,      0, 0, 0.8,    0, 0, 1,
        -0.672, 0.3, 4,      0, 0, 0.8,    0, 0, 1,
        -0.672, 0.9, 4,      0, 0, 0.8,    0, 0, 1,

        -0.758, 0.55, 5,      0, 0, 0.8,    0, 0, 1,
        -0.677, 0.55, 5,      0, 0, 0.8,    0, 0, 1,
        -0.677, 0.88, 5,      0, 0, 0.8,    0, 0, 1,
        -0.677, 0.88, 4,      0, 0, 0.8,    0, 0, 1,
        -0.677, 0.55, 4,      0, 0, 0.8,    0, 0, 1,
        -0.758, 0.55, 4,      0, 0, 0.8,    0, 0, 1, //68


        // Top Surface
        -0.9, 0.3, 5,      0.2, 0.2, 1,    0, 0, 1, // 392
        -0.83, 0.3, 5,      0.2, 0.2, 1,    0, 0, 1,
        -0.75, 0.9, 5,      0.2, 0.2, 1,    0, 0, 1,

        -0.825, 0.3, 5,      0.2, 0.2, 1,    0, 0, 1, // 395
        -0.745, 0.9, 5,      0.2, 0.2, 1,    0, 0, 1,
        -0.677, 0.9, 5,      0.2, 0.2, 1,    0, 0, 1,

        -0.672, 0.9, 5,      0.2, 0.2, 1,    0, 0, 1,
        -0.672, 0.3, 5,      0.2, 0.2, 1,    0, 0, 1,
        -0.602, 0.3, 5,      0.2, 0.2, 1,    0, 0, 1,

        -0.758, 0.55, 5,      0.2, 0.2, 1,    0, 0, 1,
        -0.677, 0.55, 5,      0.2, 0.2, 1,    0, 0, 1,
        -0.677, 0.88, 5,      0.2, 0.2, 1,    0, 0, 1,

        // Bottom Surface

        -0.9, 0.3, 4,      0.2, 0.2, 1,    0, 0, 1,
        -0.83, 0.3, 4,      0.2, 0.2, 1,    0, 0, 1,
        -0.75, 0.9, 4,      0.2, 0.2, 1,    0, 0, 1,

        -0.825, 0.3, 4,      0.2, 0.2, 1,    0, 0, 1,
        -0.745, 0.9, 4,      0.2, 0.2, 1,    0, 0, 1,
        -0.677, 0.9, 4,      0.2, 0.2, 1,    0, 0, 1,

        -0.672, 0.9, 4,      0.2, 0.2, 1,    0, 0, 1,
        -0.672, 0.3, 4,      0.2, 0.2, 1,    0, 0, 1,
        -0.602, 0.3, 4,      0.2, 0.2, 1,    0, 0, 1,

        -0.758, 0.55, 4,      0.2, 0.2, 1,    0, 0, 1,
        -0.677, 0.55, 4,      0.2, 0.2, 1,    0, 0, 1,
        -0.677, 0.88, 4,      0.2, 0.2, 1,    0, 0, 1,


        // Letter H
        // Top
        -0.4, 0.9, 5,      0.2, 1, 0.2,    0, 0, 1, 
        -0.4, 0.3, 5,      0.2, 1, 0.2,    0, 0, 1, 
        -0.35, 0.6, 5,      0.2, 1, 0.2,    0, 0, 1, 
        -0.36, 0.7, 5,      0.2, 1, 0.2,    0, 0, 1, 
        -0.25, 0.7, 5,      0.2, 1, 0.2,    0, 0, 1, 
        -0.342, 0.6, 5,      0.2, 1, 0.2,    0, 0, 1, 
        -0.21, 0.9, 5,      0.2, 1, 0.2,    0, 0, 1, 
        -0.21, 0.3, 5,      0.2, 1, 0.2,    0, 0, 1, 
        -0.26, 0.6, 5,      0.2, 1, 0.2,    0, 0, 1, 
        -0.33255, 0.6, 5,      0.2, 1, 0.2,    0, 0, 1, 
        -0.265, 0.6, 5,      0.2, 1, 0.2,    0, 0, 1, 
        -0.2455, 0.7, 5,      0.2, 1, 0.2,    0, 0, 1, 
       
        //Bottom
        -0.4, 0.9, 4,      0.2, 1, 0.2,    0, 0, 1, 
        -0.4, 0.3, 4,      0.2, 1, 0.2,    0, 0, 1, 
        -0.35, 0.6, 4,      0.2, 1, 0.2,    0, 0, 1, 
        -0.36, 0.7, 4,      0.2, 1, 0.2,    0, 0, 1, 
        -0.25, 0.7, 4,      0.2, 1, 0.2,    0, 0, 1, 
        -0.342, 0.6, 4,      0.2, 1, 0.2,    0, 0, 1, 
        -0.21, 0.9, 4,      0.2, 1, 0.2,    0, 0, 1, 
        -0.21, 0.3, 4,      0.2, 1, 0.2,    0, 0, 1, 
        -0.26, 0.6, 4,      0.2, 1, 0.2,    0, 0, 1, 
        -0.33255, 0.6, 4,      0.2, 1, 0.2,    0, 0, 1, 
        -0.265, 0.6, 4,      0.2, 1, 0.2,    0, 0, 1, 
        -0.2455, 0.7, 4,      0.2, 1, 0.2,    0, 0, 1, 

        //Sides
        -0.4, 0.9, 5,      0, 0.8, 0,    0, 0, 1,
        -0.4, 0.3, 5,      0, 0.8, 0,    0, 0, 1,
        -0.35, 0.6, 5,      0, 0.8, 0,    0, 0, 1,
        -0.36, 0.7, 5,      0, 0.8, 0,    0, 0, 1,
        -0.25, 0.7, 5,      0, 0.8, 0,    0, 0, 1,
        -0.342, 0.6, 5,      0, 0.8, 0,    0, 0, 1,
        -0.21, 0.9, 5,      0, 0.8, 0,    0, 0, 1,
        -0.21, 0.3, 5,      0, 0.8, 0,    0, 0, 1,
        -0.26, 0.6, 5,      0, 0.8, 0,    0, 0, 1,
        -0.33255, 0.6, 5,      0, 0.8, 0,    0, 0, 1,
        -0.265, 0.6, 5,      0, 0.8, 0,    0, 0, 1,
        -0.2455, 0.7, 5,      0, 0.8, 0,    0, 0, 1,
        -0.2455, 0.7, 4,      0, 0.8, 0,    0, 0, 1,
        -0.265, 0.6, 4,      0, 0.8, 0,    0, 0, 1,
        -0.33255, 0.6, 4,      0, 0.8, 0,    0, 0, 1,
        -0.26, 0.6, 4,      0, 0.8, 0,    0, 0, 1,
        -0.21, 0.3, 4,      0, 0.8, 0,    0, 0, 1,
        -0.21, 0.9, 4,      0, 0.8, 0,    0, 0, 1,
        -0.342, 0.6, 4,      0, 0.8, 0,    0, 0, 1,
        -0.25, 0.7, 4,      0, 0.8, 0,    0, 0, 1,
        -0.36, 0.7, 4,      0, 0.8, 0,    0, 0, 1,
        -0.35, 0.6, 4,      0, 0.8, 0,    0, 0, 1,
        -0.4, 0.3, 4,      0, 0.8, 0,    0, 0, 1,
        -0.4, 0.9, 4,      0, 0.8, 0,    0, 0, 1,

    ];

    var indices = [
        // Number 0
        0, 1, 2,        0, 2, 3, 
        4, 5, 6,        4, 6, 7,
        8, 9, 10,       8, 10, 11,
        12, 13, 14,     12, 14, 15,
        16, 17, 18,     16, 18, 19,
        20, 21, 22,     20, 22, 23,
        24, 25, 26,     24, 26, 27,
        28, 29, 30,     28, 30, 31,
        32, 33, 34,     32, 34, 35,
        36, 37, 38,     36, 38, 39,
        40, 41, 42,     40, 42, 43,
        44, 45, 46,      44, 46, 47,
        48, 49, 50,      48, 50, 51,
        52, 53, 54,      52, 54, 55,
        56, 57, 58,      56, 58, 59,
        60, 61, 62,      60, 62, 63,

        // Number 2
        64, 65, 66,      64, 66, 67,
        68, 69, 70,      68, 70, 71,
        72, 73, 74,      72, 74, 75,
        76, 77, 78,      76, 78, 79,
        80, 81, 82,      80, 82, 83,
        84, 85, 86,      84, 86, 87,
        88, 89, 90,      88, 90, 91,
        92, 93, 94,      92, 94, 95,
        96, 97, 98,      96, 98, 99,
        100, 101, 102,      100, 102, 103,
        104, 105, 106,      104, 106, 107,
        108, 109, 110,      108, 110, 111,
        112, 113, 114,      112, 114, 115,
        116, 117, 118,      116, 118, 119,
        120, 121, 122,      120, 122, 123,
        124, 125, 126,      124, 126, 127,
        
        // A
        128, 129, 130,      128, 130, 131,
        132, 133, 134,      132, 134, 135,
        136, 137, 138,      136, 138, 139,
        140, 141, 142,      140, 142, 143,
        144, 145, 146,      144, 146, 147,
        148, 149, 150,      148, 150, 151,
        152, 153, 154,      152, 154, 155,
        156, 157, 158,      156, 158, 159,
        160, 161, 162,      160, 162, 163,
        164, 165, 166,      164, 166, 167,
        168, 169, 170,      168, 170, 171,
        172, 173, 174,      172, 174, 175,
        176, 177, 178,      176, 178, 179,
        180, 181, 182,      180, 182, 183,
        184, 185, 186,      184, 186, 187,
        188, 189, 190,      188, 190, 191,
        192, 193, 194,      192, 194, 195,
        196, 197, 198,      196, 198, 199,
        200, 201, 202,      200, 202, 203,
        204, 205, 206,      204, 206, 207,
        208, 209, 210,      208, 210, 211,
        212, 213, 214,      212, 214, 215,
        216, 217, 218,      216, 218, 219,
        220, 221, 222,      220, 222, 223,
        224, 225, 226,      224, 226, 227,
        228, 229, 230,      228, 230, 231,
        232, 233, 234,      232, 234, 235,
        236, 237, 238,      236, 238, 239,
        240, 241, 242,      240, 242, 243,
        244, 245, 246,      244, 246, 247,
        248, 249, 250,      248, 250, 251,
        252, 253, 254,      252, 254, 255,
        256, 257, 258,      256, 258, 259,
        260, 261, 262,      260, 262, 263,
        264, 265, 266,      264, 266, 267,
        268, 269, 270,      268, 270, 271,

        // top A
       
        272, 273, 274,
        275, 276, 277,
        278, 279, 280,
        281, 282, 283,
        284, 285, 286,
        287, 288, 289,
        290, 291, 292,
        297, 298, 299,
        300, 301, 302, 
        304, 305, 306,
        307, 308, 309,
        310, 311, 312,

        // bottom A
        313, 314, 315,
        316, 317, 318,      
        319, 320, 321,
        322, 323, 324, 
        325, 326, 327,
        328, 329, 330,  
        331, 332, 333,
        334, 335, 336,
        337, 338, 339,
        340, 341, 342,
        343, 344, 345,
        346, 347, 348,
        

        
      349, 350, 351,
         354,      352, 354, 355,
        356, 357, 358,      356, 358, 359,
        360, 361, 362,      
              364, 366, 367,
       
       // H
        349, 350, 351,      351, 352, 353,
        352, 354, 355,      360, 361, 362,
        360, 362, 363,      364, 365, 366,
        368, 369, 370,      368, 370, 371,
        372, 373, 374,      372, 374, 375,
        376, 377, 378,      376, 378, 379,
        380, 381, 382,      380, 382, 383,
        384, 385, 386,      384, 386, 387,
        388, 389, 390,      388, 390, 391,
        392, 393, 394,      395, 396, 397,
        398, 399, 400,      401, 402, 403,
        404, 405, 406,      407, 408, 409,
        
        
        410, 411, 412,      413, 414, 415,
        416, 417, 418,      419, 420, 421,
        422, 423, 424,      425, 426, 427,
        428, 429, 430,      431, 432, 433,
        434, 435, 436,      437, 438, 439,
        440, 441, 442,      443, 444, 445,
        446, 447, 448,      449, 450, 451,
        452, 453, 454,      455, 456, 457,
        458, 459, 460,      461, 462, 463,
        464, 465, 466,      467, 468, 469,
        470, 471, 472,      473, 474, 475,
        476, 477, 478,      479, 480, 481,
        482, 483, 484,      485, 486, 487,

        // sides
        489, 490, 488,
        490, 491, 488,
        491, 492, 488,
        492, 493, 488,
        493, 494, 488,
        494, 495, 497,
        495, 496, 497,
        494, 497, 488,
        497, 498, 488,
        498, 499, 488,
        499, 500, 488,
        502, 503, 501,
        503, 504, 501,
        504, 505, 501,
        505, 506, 501,
        506, 507, 501,
        507, 508, 510,
        508, 509, 510,
        507, 510, 501,
        510, 511, 501,
        511, 512, 501,
        512, 513, 501,
        514, 515, 516,      
        514, 516, 517,
    ];

    console.log(indices.length);

    
    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    var indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

    // VERTEX SHADER
    var vertexShaderCode = `
        attribute vec3 aPosition;
        attribute vec3 aColor;
        attribute vec3 aNormal;
        uniform mat4 uModel;
        uniform mat4 uView;
        uniform mat4 uProjection;
        varying vec3 vPosition;
        varying vec3 vColor;
        varying vec3 vNormal;
        void main () {
            vec4 position = vec4(aPosition, 1.0);
            gl_Position = uProjection * uView * uModel * position;
            // gl_Position is the final destination for storing
            //  positional data for the rendered vertex
            vColor = aColor;
            vNormal = aNormal;
            vPosition = (uModel * position).xyz;
        }
    `;
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderCode);
    gl.compileShader(vertexShader);

    // FRAGMENT SHADER
    var fragmentShaderCode = `
        precision mediump float;
        varying vec3 vColor;
        uniform vec3 uLightConstant;      // light color
        uniform float uAmbientIntensity;  // intensity
        varying vec3 vPosition;
        varying vec3 vNormal;
        uniform vec3 uLightPosition;
        uniform vec3 uViewerPosition;
        uniform mat3 uNormalModel;

        void main() {
            vec3 ambient = uLightConstant * uAmbientIntensity;
            vec3 lightDirection = uLightPosition - vPosition;
            vec3 normalizedLight = normalize(lightDirection);
            vec3 normalizedNormal = normalize(uNormalModel * vNormal);
            float cosTheta = dot(normalizedNormal, normalizedLight);
            vec3 diffuse = vec3(0.0, 0.0, 0.0);
            
            if (cosTheta > 0.0) {
                float diffuseIntensity = cosTheta;
                diffuse = uLightConstant * diffuseIntensity;
            }
            
            vec3 normalizedReflector = normalize(reflect(-lightDirection, normalizedNormal));
            vec3 normalizedViewer = normalize(uViewerPosition - vPosition);
            float cosPhi = dot(normalizedReflector, normalizedViewer);
            vec3 specular = vec3(0., 0., 0.);

            if (cosPhi > 0.) {
                float shininessConstant = 100.0;    // bare minimum spec for metal
                float specularIntensity = pow(cosPhi, shininessConstant);
                specular = uLightConstant * specularIntensity;
            }

            vec3 phong = ambient + diffuse + specular;
            gl_FragColor = vec4(phong * vColor, 1.0);
        }
    `;


    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderCode);
    gl.compileShader(fragmentShader);

    var shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);

    var isAnimated = false;
    var theta = 0.0;
    var direction = "";
    var dX = 0.0;
    var dY = 0.0;
    //model (all linear transformation)
    var uModel = gl.getUniformLocation(shaderProgram, "uModel");
    //camera
    var camera = [0.0, 0.0, 7.5];
    var uView = gl.getUniformLocation(shaderProgram, "uView");
    // identity matrix
    var view = glMatrix.mat4.create();  
    glMatrix.mat4.lookAt(
        view,
        camera,
        [0.0, 0.0, 0.0],
        [0.0, 1.0, 0.0]
    );
    gl.uniformMatrix4fv(uView, false, view);
    // For the projection

    var cameraFOV = 75;
    var cameraAspect = 1.0;
    var cameraNearClip = 0.5;
    var cameraFarClip = 50.0;

    var uProjection = gl.getUniformLocation(shaderProgram, "uProjection");
    var perspective = glMatrix.mat4.create();
    glMatrix.mat4.perspective(
        perspective,
        cameraFOV*(Math.PI/180),  // 60 degrees
        cameraAspect,
        cameraNearClip, 
        cameraFarClip
    );
    gl.uniformMatrix4fv(uProjection, false, perspective);

    // For the lighting and shading
    var uLightConstant = gl.getUniformLocation(shaderProgram, "uLightConstant");
    // Ambient
    var uAmbientIntensity = gl.getUniformLocation(shaderProgram, "uAmbientIntensity");
    gl.uniform3fv(uLightConstant, [1.0, 1.0, 1.0]);   
    gl.uniform1f(uAmbientIntensity, 0.5);   

    // Diffuse
    var uLightPosition = gl.getUniformLocation(shaderProgram, "uLightPosition");
    gl.uniform3fv(uLightPosition, [0.0, 0.0, 4.8]);
    var uNormalModel = gl.getUniformLocation(shaderProgram, "uNormalModel");

    // Specular
    var uViewerPosition = gl.getUniformLocation(shaderProgram, "uViewerPosition");

    // MOUSE
    var dragging, prevx, prevy, rotation = glMatrix.mat4.create();
    function onMouseDown (event) {
        var x = event.clientX;
        var y = event.clientY;
        var rect = event.target.getBoundingClientRect();
        if (
            rect.left <= x &&
            rect.right >= x &&
            rect.top <= y &&
            rect.bottom >= y
        ) {
            dragging = true;
            prevx = x;
            prevy = y;
        }
    }
    function onMouseUp (event) {
        dragging = false;
    }
    function onMouseMove (event) {
        if (dragging) {
            var x = event.clientX;
            var y = event.clientY;
            var xdiff = x - prevx;
            var ydiff = y - prevy;
            var inverseRotation = glMatrix.mat4.create();
            glMatrix.mat4.invert(inverseRotation, rotation);
            var xAxis = [1, 0, 0, 0];
            var yAxis = [0, 1, 0, 0];
            glMatrix.vec4.transformMat4(xAxis, xAxis, inverseRotation);
            glMatrix.vec4.transformMat4(yAxis, yAxis, inverseRotation);
            glMatrix.mat4.rotate(rotation, rotation, glMatrix.glMatrix.toRadian(xdiff), yAxis);
            glMatrix.mat4.rotate(rotation, rotation, glMatrix.glMatrix.toRadian(ydiff), xAxis);
            prevx = x;
            prevy = y;
        }
    }
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mousemove", onMouseMove);
    
    // keyboard
    function onKeyDown (event) {
        switch (event.keyCode) {
            case 87: 
                direction = "up";
                break;
            case 83: 
                direction = "down";
                break;
            case 68: 
                direction = "right";
                break;
            case 65: 
                direction = "left";
                break;
            case 38: 
                camera[1] += 0.05;
                gl.uniform3fv(uViewerPosition, camera);
                glMatrix.mat4.lookAt(
                    view,
                    camera,
                    [camera[0], 0.0, -10.0],
                    [0.0, 1.0, 0.0]
                );
                gl.uniformMatrix4fv(uView, false, view);
                break;
            case 40: // Camera DOWN
                camera[1] -= 0.05;
                gl.uniform3fv(uViewerPosition, camera);
                glMatrix.mat4.lookAt(
                    view,
                    camera,
                    [camera[0], 0.0, -10.0],
                    [0.0, 1.0, 0.0]
                );
                gl.uniformMatrix4fv(uView, false, view);
                break;
            // right
            case 39: 
                camera[0] += 0.05;
                gl.uniform3fv(uViewerPosition, camera);
                glMatrix.mat4.lookAt(
                    view,
                    camera,
                    [camera[0], 0.0, -10.0],
                    [0.0, 1.0, 0.0]
                );
                gl.uniformMatrix4fv(uView, false, view);
                break;
            // left
            case 37:
                camera[0] -= 0.05;
                gl.uniform3fv(uViewerPosition, camera);
                glMatrix.mat4.lookAt(
                    view,
                    camera,
                    [camera[0], 0.0, -10.0],
                    [0.0, 1.0, 0.0]
                );
                gl.uniformMatrix4fv(uView, false, view);
                break;
            default:
                break;
        }
    }
    function onKeyUp (event) {
        direction = "";
    }
    function onKeyPress (event) {
        console.log('keypress');
        if (event.keyCode == 32) {  
            isAnimated = !isAnimated;
        }
    }
    document.addEventListener("keypress", onKeyPress)
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("keyup", onKeyUp);

    // Teach the GPU how to collect
    //  the positional values from ARRAY_BUFFER
    //  for each vertex being processed
    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(
        aPosition, 
        3, 
        gl.FLOAT, 
        false, 
        9 * Float32Array.BYTES_PER_ELEMENT, 
        0);
    gl.enableVertexAttribArray(aPosition);
    var aColor = gl.getAttribLocation(shaderProgram, "aColor");
    gl.vertexAttribPointer(
        aColor, 
        3, 
        gl.FLOAT, 
        false, 
        9 * Float32Array.BYTES_PER_ELEMENT, 
        3 * Float32Array.BYTES_PER_ELEMENT);
    gl.enableVertexAttribArray(aColor);
    var aNormal = gl.getAttribLocation(shaderProgram, "aNormal");
    gl.vertexAttribPointer(
        aNormal, 
        3, 
        gl.FLOAT, 
        false, 
        9 * Float32Array.BYTES_PER_ELEMENT, 
        6 * Float32Array.BYTES_PER_ELEMENT);
    gl.enableVertexAttribArray(aNormal);
    
    function render() {
        gl.enable(gl.DEPTH_TEST);
        gl.clearColor(0.0, 0.0,   0.0,  1.0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        var model = glMatrix.mat4.create();
        if (isAnimated) {
            theta += 0.001;
        }
        switch (direction) {
            case "up":
                dY += 0.1;
                break;
            case "down":
                dY -= 0.1;
                break;
            case "left":
                dX -= 0.1;
                break;
            case "right":
                dX += 0.1;
                break;
        
            default:
                break;
        }
        glMatrix.mat4.translate(model, model, [dX, dY, 0.0]);
        glMatrix.mat4.rotateZ(rotation, rotation, theta);
        glMatrix.mat4.rotateY(rotation, rotation, theta);
        glMatrix.mat4.multiply(model, model, rotation);
        gl.uniformMatrix4fv(uModel, false, model);


        var normalModel = glMatrix.mat3.create();
        glMatrix.mat3.normalFromMat4(normalModel, model);
        gl.uniformMatrix3fv(uNormalModel, false, normalModel);

        gl.drawElements(gl.TRIANGLES, indices.length , gl.UNSIGNED_SHORT, 0);
       
        
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}