var head = document.getElementsByTagName('head')[0];
var style = document.createElement('link');
style.href = "https://CSS-Library.hg0428.repl.co/style.css";
style.type = 'text/css';
style.rel = 'stylesheet';
head.append(style);


place = function(type, text, tag="input") {
  for (let elem of document.getElementsByTagName(tag)) {
    if (elem.getAttribute('type') === type && elem.getAttribute('placeholder') === null) {
      elem.setAttribute('placeholder', text);
    }
  }
};

place("text", "Text");
place("password", "Password");
place('email', 'Email');
place('url', 'URL');
place('tel', 'Phone Number');
place('search', 'Search');
place('number', 'Number');
place(null, "Long Text", "textarea");
