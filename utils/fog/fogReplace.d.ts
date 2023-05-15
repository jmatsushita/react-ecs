declare const fogParsVert = "\n#ifdef USE_FOG\n  varying float fogDepth;\n  varying vec3 vFogWorldPosition;\n#endif\n";
declare const fogVert = "\n#ifdef USE_FOG\n  fogDepth = - mvPosition.z;\n  vFogWorldPosition = (modelMatrix * vec4( transformed, 1.0 )).xyz;\n#endif\n";
declare const fogFrag = "\n#ifdef USE_FOG\n  vec3 windDir = vec3(0.0, 0.0, time);\n  vec3 scrollingPos = vFogWorldPosition.xyz + fogNoiseSpeed * windDir;\n  float noise = cnoise(fogNoiseFreq * scrollingPos.xyz);\n  float vFogDepth = (1.0 - fogNoiseImpact * noise) * fogDepth;\n  #ifdef FOG_EXP2\n  float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n  #else\n  float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n  #endif\n  gl_FragColor.rgb = mix( gl_FragColor.rgb, mix(fogNearColor, fogColor, fogFactor), fogFactor );\n#endif\n\n";
declare const fogParsFrag: string;
export { fogFrag, fogParsFrag, fogParsVert, fogVert };
