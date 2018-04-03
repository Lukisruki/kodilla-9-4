function drawTree(levels) {
  console.log(levels);
  var star = "";
  for (var i = 0; i < levels; i++) {
      
      var space = "";
      for (var j = levels; j > i; j--) {
        space += "0";
      }
      star += "*";
      console.log(space + star);
  }
}
drawTree(17);
