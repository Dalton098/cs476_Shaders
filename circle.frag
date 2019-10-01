precision mediump float;

// Uniforms set from Javascript that are constant
// over all fragments
uniform vec2 uCenter;
uniform float uRadius;

// The 2D position of the pixel in this fragment, interpolated via
// barycentric coordinates from positions of triangle vertices
varying vec2 v_position;

void main() {
    
    vec2 diff = v_position - uCenter;

    float mag = dot(diff, diff);

    if(mag <= uRadius*uRadius) {
        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    }
    else {
        gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);
    }

   
}
