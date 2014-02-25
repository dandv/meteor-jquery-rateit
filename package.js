Package.describe({
  summary: "RateIt - a modern, mobile-friendly, jQuery (star) rating plugin"
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.imply('jquery', 'client');
  api.add_files([
    'jquery.rateit.js',
    'rateit.css',
    'star.gif',
    'delete.gif'
  ], 'client'
  );
});
