import * as THREE from "../libs/three.module.js";

function createText(message, height) {
  var canvas = document.createElement("canvas");
  var context = canvas.getContext("2d");
  var metrics = null,
    textHeight = 100,
    textWidth = 100,
    actualFontSize = 2;
  context.font = "normal " + textHeight + "px Arial";
  metrics = context.measureText(message);
  var textWidth = metrics.width;
  canvas.width = textWidth;
  canvas.height = textHeight;
  context.font = "normal " + textHeight + "px Arial";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillStyle = "#ffffff";
  context.fillText(message, textWidth / 2, textHeight / 2);

  var texture = new THREE.Texture(canvas);
  texture.needsUpdate = true;
  //var spriteAlignment = new THREE.Vector2(0,0) ;
  var material = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    side: THREE.DoubleSide,
    map: texture,
    transparent: true,
  });
  var geometry = new THREE.PlaneGeometry(
    (height * textWidth) / textHeight,
    height
  );
  let plane = new THREE.Mesh(geometry, material);
  return plane;
}

export { createText };
