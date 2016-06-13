import app from 'flarum/app';
import { extend } from 'flarum/extend';
import HeaderPrimary from 'flarum/components/HeaderPrimary';
app.initializers.add('davis-customheader-forum', function() {
    extend(HeaderPrimary.prototype, 'init', function() {
        $('#header').prepend('<div id="extGlobalNav"></div>');
        $('#extGlobalNav').append(app.forum.attribute('davis-customheader.customheader'));
        const toppadding = Number($('#extGlobalNav').height()) + 52;
        $('head').append('<style>header > .container {padding: 8px;}#header-navigation {padding: 8px;}@media (min-width: 768px){.DiscussionPage-list{top: '+toppadding+'px !important;}}@media (min-width: 768px){#header {height: '+toppadding+'px !important;padding: 0 !important;}.App {padding-top: '+toppadding+'px !important;}.App:before {height: '+toppadding+'px;}}</style>');
        $('head').append('<style>'+app.forum.attribute("davis-customheader.cssofheader")+'</style>');
        $('head').append('<script>'+app.forum.attribute("davis-customheader.jsofheader")+'</script>');
    });
});