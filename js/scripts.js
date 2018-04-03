function drawTree(levels) {
  console.log(levels);
  var star = "";
  for (var i = 0; i < levels; i++) {
      
      var space = "";
      for (var j = levels; j > i; j--) {
        space += " ";
      }
      star += "*";
      console.log(space + star);
  }
}
drawTree(17);
