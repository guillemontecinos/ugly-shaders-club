// Author: Guillermo Montecinos
// Title: Red circle over mouse

#ifdef GL_ES
precision mediump float;
#endif
​
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
​
void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec2 mouse_st = u_mouse.xy / u_resolution.xy;
    float r = distance(mouse_st, st.xy);
    float y = step(r,abs(.2));
    //float y = smoothstep(0.1,0.3,r);
    vec3 circle_pos = vec3(y);
    vec3 background = vec3(1.0) - circle_pos;
    vec3 circle_color = vec3(1.,0,0);
    vec3 output_color = circle_color * circle_pos + background * vec3(1.);
    
    gl_FragColor = vec4(output_color,1.0);
}