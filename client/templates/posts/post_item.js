/**
 * Created by inpyokim on 2016. 7. 18..
 */
Template.postItem.helpers({
    ownPost: function() {
        return this.userId === Meteor.userId();
    },
    domain: function() {
        var a = document.createElement('a');
        a.href = this.url;
        return a.hostname + " " + this.submitted;
    }
});