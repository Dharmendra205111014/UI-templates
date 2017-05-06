var notify = function(position,template, parent){
    this.top = 0;
    this.parent = parent || 'extraa';
    this.Notifications = [];
    this.id = 'notification';
    this.zIndex = 99999;
    this.position = position || 'topRight'
};

notify.prototype.getTemplate = function(message, position) {
    var d = document.createElement("div");
    d.setAttribute('class', 'notificationParent '+position || this.position);
    console.log(d.getAttribute('class'));
    d.id = 'notification'+ this.Notifications.length;
    d.innerHTML = message || 'notification'+ this.Notifications.length;
    this.Notifications.push(d);
};

notify.prototype.display = function(message, position) {
    this.getTemplate(message, position);
    var el = this.Notifications[this.Notifications.length -1];
    document.body.appendChild(el);
    el.style.zIndex = this.zIndex - this.Notifications.length;
    self = this;
    setTimeout(function() {
        document.body.removeChild(el);
        self.Notifications.shift();
    }, 3000);
};



