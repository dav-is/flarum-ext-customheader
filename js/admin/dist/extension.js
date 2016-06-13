'use strict';

System.register('Davis/CustomHeader/components/CustomHeaderSettingsModal', ['flarum/components/SettingsModal'], function (_export, _context) {
  var SettingsModal, CustomHeaderSettingsModal;
  return {
    setters: [function (_flarumComponentsSettingsModal) {
      SettingsModal = _flarumComponentsSettingsModal.default;
    }],
    execute: function () {
      CustomHeaderSettingsModal = function (_SettingsModal) {
        babelHelpers.inherits(CustomHeaderSettingsModal, _SettingsModal);

        function CustomHeaderSettingsModal() {
          babelHelpers.classCallCheck(this, CustomHeaderSettingsModal);
          return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(CustomHeaderSettingsModal).apply(this, arguments));
        }

        babelHelpers.createClass(CustomHeaderSettingsModal, [{
          key: 'className',
          value: function className() {
            return 'CustomHeaderSettingsModal Modal--small';
          }
        }, {
          key: 'title',
          value: function title() {
            return app.translator.trans('davis-customheader.admin.settings.title');
          }
        }, {
          key: 'form',
          value: function form() {
            return [m(
              'div',
              { className: 'Form-group' },
              m(
                'label',
                null,
                app.translator.trans('davis-customheader.admin.settings.customheader')
              ),
              m('textarea', { rows: '10', required: true, className: 'FormControl', type: 'text', bidi: this.setting('davis-customheader.customheader') }),
              m(
                'label',
                null,
                app.translator.trans('davis-customheader.admin.settings.cssofheader')
              ),
              m('textarea', { rows: '10', className: 'FormControl', type: 'text', bidi: this.setting('davis-customheader.cssofheader') }),
              m(
                'label',
                null,
                app.translator.trans('davis-customheader.admin.settings.jsofheader')
              ),
              m('textarea', { className: 'FormControl', type: 'text', bidi: this.setting('davis-customheader.jsofheader') })
            )];
          }
        }]);
        return CustomHeaderSettingsModal;
      }(SettingsModal);

      _export('default', CustomHeaderSettingsModal);
    }
  };
});;
'use strict';

System.register('Davis/CustomHeader/main', ['flarum/app', 'flarum/extend', 'flarum/components/PermissionGrid', 'Davis/CustomHeader/components/CustomHeaderSettingsModal'], function (_export, _context) {
  var app, extend, PermissionGrid, CustomHeaderSettingsModal;
  return {
    setters: [function (_flarumApp) {
      app = _flarumApp.default;
    }, function (_flarumExtend) {
      extend = _flarumExtend.extend;
    }, function (_flarumComponentsPermissionGrid) {
      PermissionGrid = _flarumComponentsPermissionGrid.default;
    }, function (_DavisCustomHeaderComponentsCustomHeaderSettingsModal) {
      CustomHeaderSettingsModal = _DavisCustomHeaderComponentsCustomHeaderSettingsModal.default;
    }],
    execute: function () {

      app.initializers.add('Davis-customheader', function () {
        app.extensionSettings['davis-customheader'] = function () {
          return app.modal.show(new CustomHeaderSettingsModal());
        };
      });
    }
  };
});