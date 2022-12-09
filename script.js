function calculateArea(shape) {

  // calculate the shape's area
  switch (shape) {
      case "circle":
          let radius = document.getElementById("id_radius").value;
          return Math.PI * radius * radius;
      case "triangle":
          let base = document.getElementById("id_base").value;
          let height = document.getElementById("id_height").value;
          return base * height / 2;
      case "square":
          let side = document.getElementById("id_side").value;
          return side * side;
      case "rectangle":
          let length = document.getElementById("id_length").value;
          let width = document.getElementById("id_width").value;
          return length * width;
  }
}

console.log("Circle: " + calculateArea("circle"));
console.log("Triangle: " + calculateArea("triangle"));
console.log("Square: " + calculateArea("square"));
console.log("Rectangle: " + calculateArea("rectangle"));
let radius = document.getElementById("id_radius");
const attr = radius.getAttribute('type')
if(attr === 'number'){
  console.log('its was a number')
}else{
  console.log('you are wrong buddy!!')
}
const doctypeObj = document.doctype;

console.log(`doctypeObj.name: ${doctypeObj.name}`);
console.log(`doctypeObj.internalSubset: ${doctypeObj.internalSubset}`);
console.log(`doctypeObj.publicId: ${doctypeObj.publicId}`);
console.log(`doctypeObj.systemId: ${doctypeObj.systemId}`);
