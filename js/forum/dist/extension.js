'use strict';

System.register('Davis/CustomHeader/main', ['flarum/app', 'flarum/extend', 'flarum/components/HeaderPrimary'], function (_export, _context) {
    var app, extend, HeaderPrimary;
    return {
        setters: [function (_flarumApp) {
            app = _flarumApp.default;
        }, function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flarumComponentsHeaderPrimary) {
            HeaderPrimary = _flarumComponentsHeaderPrimary.default;
        }],
        execute: function () {
            app.initializers.add('davis-customheader-forum', function () {
                extend(HeaderPrimary.prototype, 'init', function () {
                    $('#header').prepend('<div id="flarumHeader"></div>');
                    $('#header').children().appendTo("#flarumHeader");
                    $('#header').prepend('<div id="customHeader"></div>');
                    $('#customHeader').append(app.forum.attribute('davis-customheader.customheader'));
                    var toppadding = Number(app.forum.attribute("davis-customheader.heightofheader")) + 52;
                    $('head').append('<style>@media (min-width: 768px){#header {height: ' + app.forum.attribute("davis-customheader.heightofheader") + 'px !important;padding: 0 !important;}#flarumHeader {height: 52px; padding: 8px;}.App {padding-top: ' + toppadding + 'px !important;}.App:before {height: ' + toppadding + 'px;}#customHeader{height:' + app.forum.attribute("davis-customheader.heightofheader") + 'px;}}</style>');
                    $('head').append('<style>' + app.forum.attribute("davis-customheader.cssofheader") + '</style>');
                    $('head').append('<script>' + app.forum.attribute("davis-customheader.jsofheader") + '</script>');
                });
            });
        }
    };
});