// function encrypt(msg, key) {
//   var encMsg = "";

//   for (var i = 0; i < msg.length; i++) {
//     var code = msg.charCodeAt(i);

//     // Encrypt only letters in 'A' ... 'Z' interval
//     if (code >= 65 && code <= 65 + 26 - 1) {
//       code -= 65;
//       code = (code + key) % 26;
//       code += 65;
//     } else if (code >= 97 && code <= 97 + 26 - 1) {
//       code -= 97;
//       code = (code + key) % 26;
//       code += 97;
//     }

//     encMsg += String.fromCharCode(code);
//   }

//   return encMsg;
// }
$(function () {
  $("#Ceasar").click(function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        todo: "ceasarEncrypt",
        clickedColor: "ffcc00",
      });
    });
  });
});
