import SettingsModal from 'flarum/components/SettingsModal';

export default class CustomHeaderSettingsModal extends SettingsModal {
  className() {
    return 'CustomHeaderSettingsModal Modal--small';
  }

  title() {
    return app.translator.trans('davis-customheader.admin.settings.title');
  }

  form() {
    return [
      <div className="Form-group">
        <label>{app.translator.trans('davis-customheader.admin.settings.customheader')}</label>
        <textarea rows="10" required className="FormControl" type="text" bidi={this.setting('davis-customheader.customheader')}></textarea>
        
        <label>{app.translator.trans('davis-customheader.admin.settings.cssofheader')}</label>
        <textarea rows="10" className="FormControl" type="text" bidi={this.setting('davis-customheader.cssofheader')}></textarea>
        
        <label>{app.translator.trans('davis-customheader.admin.settings.jsofheader')}</label>
        <textarea className="FormControl" type="text" bidi={this.setting('davis-customheader.jsofheader')}></textarea>
      </div>
    ];
  }
}