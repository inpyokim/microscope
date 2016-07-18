/**
 * Created by inpyokim on 2016. 7. 18..
 */
Router.configure({
    layoutTemplate: 'layout'
});

Router.map(function() {
    this.route('postsList', {path: '/'});
});