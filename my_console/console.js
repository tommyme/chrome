function custom_console() {
    window.souti = function souti(prob, https = true) {
        if (https) {
            var url = "https://love4cry.cn:8938/souti?prob="
        } else {
            var url = "http://love4cry.cn:8938/souti?prob="
        }
        fetch(url + prob.replace(" ", "").replace(" ", ""))
            .then(res => res.text())
            .then(res => console.log(res))
    };
}

var script = document.createElement('script'),
    code = document.createTextNode('(' + custom_console + ')();');
script.appendChild(code);
(document.body || document.head || document.documentElement).appendChild(script);