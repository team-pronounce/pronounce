
var renderWordInfoButton = function () {
  var wordInfoButton = document.createElement("button")
  wordInfoButton.id = "word-info-button"
  wordInfoButton.type = "button"
  wordInfoButton.innerText = "Info"
  wordInfoButton.addEventListener("click", function(){

  })
  return wordInfoButton
}




module.exports = renderWordInfoButton
