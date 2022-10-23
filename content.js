chrome.runtime.sendMessage({ todo: "showPageAction" });
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.todo == "ceasarEncrypt") {
    var pArray = document.getElementsByTagName("p");
    for (var i = 0; i < pArray.length; i++) {
      var text = document.getElementsByTagName("p")[i].innerText;
      var encryptText = ceaserencrypt(text, 5);
      document.getElementsByTagName("p")[i].innerText = encryptText;
    }
  }
});

function ceaserencrypt(msg, key) {
  var encMsg = "";

  for (var i = 0; i < msg.length; i++) {
    var code = msg.charCodeAt(i);

    // Encrypt only letters in 'A' ... 'Z' interval
    if (code >= 65 && code <= 65 + 26 - 1) {
      code -= 65;
      code = (code + key) % 26;
      code += 65;
    } else if (code >= 97 && code <= 97 + 26 - 1) {
      code -= 97;
      code = (code + key) % 26;
      code += 97;
    }

    encMsg += String.fromCharCode(code);
  }

  return encMsg;
}
