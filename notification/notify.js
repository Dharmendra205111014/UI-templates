var notify = function(template, parent){
    this.top = 0;
    this.parent = parent || 'extraa';
    this.Notifications = [];
    this.id = 'notification';
    this.zIndex = 99999;
};

notify.prototype.getTemplate = function(message) {
    var d = document.createElement("div");
    d.setAttribute('class', 'notificationParent');
    d.class = 'notificationParent';
    d.id = 'notification'+ this.Notifications.length;
    d.innerHTML = message || 'notification'+ this.Notifications.length;
    this.Notifications.push(d);
};

notify.prototype.display = function(message) {
    this.getTemplate(message);
    var el = this.Notifications[this.Notifications.length -1];
    document.body.appendChild(el);
    //this.top = this.top + this.Notifications.length * 10;
    //el.style.top = this.top + this.Notifications.length * 10 +'px';
    el.style.zIndex = this.zIndex - this.Notifications.length;
    self = this;
    setTimeout(function() {
        document.body.removeChild(el);
        self.Notifications.shift();
    }, 3000);
};

