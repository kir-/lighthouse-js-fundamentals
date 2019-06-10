var calculateRectangleArea = function(length, width){
  var area = length*width;
  if (area>=0){
    return(area);
  }
  return(undefined);
}

var calculateTriangleArea = function(base, height){
  var area = ((base*height)/2);
  if (area>=0){
    return(area);
  }
  return(undefined);
}

var calculateCircleArea = function(radius){
  var area = Math.PI*(Math.pow(radius,2));
  if (area>=0){
    return(area);
  }
  return(undefined);
}
console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined