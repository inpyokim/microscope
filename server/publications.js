/**
 * Created by inpyokim on 2016. 7. 18..
 */
// Meteor.publish('posts', function() {
//     return Posts.find();
// });

Meteor.publish('posts', function(title) {
    return Posts.find({title: title});
});