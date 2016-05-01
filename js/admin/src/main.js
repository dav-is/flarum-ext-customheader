import app from 'flarum/app';
import { extend } from 'flarum/extend';
import PermissionGrid from 'flarum/components/PermissionGrid';
import CustomHeaderSettingsModal from 'Davis/CustomHeader/components/CustomHeaderSettingsModal';

app.initializers.add('Davis-customheader', () => {
  app.extensionSettings['davis-customheader'] = () => app.modal.show(new CustomHeaderSettingsModal());
});