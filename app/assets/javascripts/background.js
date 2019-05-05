var App = ( function() {
    var settings = {}

    var state = {
        mousePosition: [0,0]
    }


    var arrays = {
        position: [-1, -1, 0, 1, -1, 0, -1, 1, 0, -1, 1, 0, 1, -1, 0, 1, 1, 0],
    };

    var canvas;

    var gl;
    var programInfo;
    var bufferInfo;
    var uniforms;

    var init = function() {
        canvas = document.getElementById( 'canvas' );

        gl = canvas.getContext( 'webgl' );
        programInfo = twgl.createProgramInfo( gl, ['vs', 'fs'] );
        bufferInfo = twgl.createBufferInfoFromArrays( gl, arrays );

        render();

        canvas.addEventListener( 'mousemove', function( event ) {
            state.mousePosition = [
                event.layerX,
                ( canvas.height - event.layerY )
            ];
        } );
    }

    var render = function( time ) {
        twgl.resizeCanvasToDisplaySize( gl.canvas );
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

        uniforms = {
            time: time * 0.001,
            resolution: [ gl.canvas.width, gl.canvas.height ],
            mousePosition: state.mousePosition
        };

        gl.useProgram( programInfo.program );
        twgl.setBuffersAndAttributes( gl, programInfo, bufferInfo );
        twgl.setUniforms( programInfo, uniforms );
        twgl.drawBufferInfo( gl, bufferInfo );

        requestAnimationFrame( function( time ) {
            render( time )
        } );
    }

    return {
        init: function() { init(); }
    }

} )();


document.addEventListener( 'DOMContentLoaded', function() {
    App.init();
} );
