// Author: Guillermo Montecinos
// Title: Square over mouse

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec2 center = u_mouse.xy / u_resolution.xy;
   	float w = 0.25;
    //vec2 center = vec2(0.5,0.5);
    vec2 d = vec2(abs(st.x - center.x), abs(st.y - center.y));
    vec2 square = vec2(step(d.x,w), step(d.y,w));
    vec3 color = vec3(1.0 - square.x * square.y);
    
    gl_FragColor = vec4(color,1.0);
}