Package.describe({
  name: 'mpowaga:autoform-summernote',
  summary: 'Summernote editor for AutoForm',
  version: '0.1.1',
  git: 'https://github.com/mpowaga/meteor-autoform-summernote'
});

Package.onUse(function(api) {
  var both = ['client', 'server'];

  api.versionsFrom('1.0');

  api.use([
    'templating',
    'aldeed:autoform@4.0.7'
  ], both);
  api.use('hckrs:summernote@0.1.0', 'client');

  api.addFiles([
    'lib/client/templates.html',
    'lib/client/templates.js',
    'lib/client/autoform-summernote.js'  
  ], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('mpowaga:autoform-summernote');
  api.addFiles('mpowaga:autoform-summernote-tests.js');
});
