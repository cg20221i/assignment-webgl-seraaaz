function main(){
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("webgl");

    /**
     * A (0.5, 0.5)
     * B (0.0, 0.0)
     * C (-0.5, 0.5)
     */
    var verticesA = [
        -0.9, 0.3,
        -0.83, 0.3,
        -0.75, 0.9,

        -0.825, 0.3,
        -0.745, 0.9,
        -0.677, 0.9,

        -0.672, 0.9,
        -0.672, 0.3,
        -0.602, 0.3,

        -0.758, 0.55,
        -0.677, 0.55,
        -0.677, 0.88,

        // h
        -0.4, 0.9,
        -0.4, 0.3,
        -0.35, 0.6,

        -0.36, 0.7,
        -0.25, 0.7,
        -0.342, 0.6,

        -0.21, 0.9,
        -0.21, 0.3,
        -0.26, 0.6,


        -0.33255, 0.6,
        -0.265, 0.6,
        -0.2455, 0.7,

        // -0.8, 0.1,
        // -0.7, 0.1,

        -0.82, -0.23,
        -0.9, -0.23,
        -0.85, -0.0,
        -0.7, -0.0,
        -0.65, -0.2,
        -0.65, -0.35,
        -0.777, -0.6,
        -0.65, -0.6,
        -0.65, -0.75,
        -0.9, -0.75,
        -0.9, -0.6,
        -0.74, -0.35,
        -0.74, -0.23,
        -0.76, -0.15,
        -0.8, -0.15,

        // -0.32, -0.23,
        -0.43, -0.25,
        -0.35, 0.0,
        -0.25, 0.0,
        -0.17, -0.25,
        -0.17, -0.5,
        -0.25, -0.75,
        -0.35, -0.75,
        -0.43, -0.5,
 
        -0.36, -0.25,
        -0.325, -0.12,
        -0.275, -0.12,
        -0.24, -0.25,
        -0.24, -0.5,
        -0.275, -0.63,
        -0.325, -0.63,
        -0.36, -0.5,


    ];

    // create linked-list for storing the vertices data in the GPU realm

    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticesA), gl.STATIC_DRAW);


    // VERTEX SHADER
    var vertexShaderCode= `
    attribute vec2 aPosition;
    void main(){
        gl_PointSize = 20.0;
        gl_Position = vec4(aPosition, 0.0, 1.0);
        //gl_Position is the final destination for storing positional data to rendered vertex

    }
    `;

    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderCode);
    gl.compileShader(vertexShader);

    //FRAGMENT SHADER
    var fragmentShaderCode = `
    precision mediump float;
    void main(){
        gl_FragColor = vec4(0.974, 0.99, 0.00, 1.0);
    }`;
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderCode);
    gl.compileShader(fragmentShader);

     // Comparing to C-Programming, we may imagine
    //  that up to this step we have created two
    //  object files (.o), for the vertex and fragment shaders

    var shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);

    //Teach the computer (GPU) how to collect the positional values from ARRAY_BUFFER
    // for each vertex being processed

    var aPositon = gl.getAttribLocation(shaderProgram, "aPosition"); //put in CPU realm
    gl.vertexAttribPointer(aPositon, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(aPositon);

    gl.clearColor(0.069, 0.168, 0.230, 0.7);
                //red, Green, Blue, Alpha (transparancy)

    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.drawArrays(gl.TRIANGLES, 0, 3);
    gl.drawArrays(gl.TRIANGLES, 3, 3);
    gl.drawArrays(gl.TRIANGLES, 6, 3);
    gl.drawArrays(gl.TRIANGLES, 9, 3);

    gl.drawArrays(gl.TRIANGLES, 12, 3);
    gl.drawArrays(gl.TRIANGLES, 15, 3);
    gl.drawArrays(gl.TRIANGLES, 18, 3);

    gl.drawArrays(gl.TRIANGLES, 21, 3);

    gl.drawArrays(gl.LINE_LOOP, 24, 15);

    gl.drawArrays(gl.LINE_LOOP, 39, 8);

    gl.drawArrays(gl.LINE_LOOP, 47, 8);

    gl.drawArrays(gl.LINE_LOOP, 47, 8);
    
    

    //(mode, first, count);
}