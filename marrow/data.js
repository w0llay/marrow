var defaultMessages = [
    {
        "count": 0,
        "sentence": "Hello World from default"
    }
]
var messages = defaultMessages
if (localStorage && localStorage.getItem('messages')) {
    messages = JSON.parse(localStorage.getItem('messages'));
} else {
    messages = defaultMessages;
    localStorage.setItem('messages', JSON.stringify(defaultMessages));
}