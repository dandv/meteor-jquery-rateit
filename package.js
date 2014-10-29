Package.describe({
  name: 'dandv:jquery-rateit',
  summary: 'RateIt - a modern, mobile-friendly, jQuery (star) rating plugin',
  version: '1.0.22_1',
  git: 'https://github.com/dandv/jquery-rateit.git'
});

Package.onUse(function (api) {
  api.versionsFrom('0.9.0');
  api.use('jquery', 'client');
  api.imply('jquery', 'client');
  api.addFiles([
    'rateit/src/jquery.rateit.js',
    'rateit/src/rateit.css',
    'rateit/src/star.gif',
    'rateit/src/delete.gif'
  ], 'client'
  );
});
