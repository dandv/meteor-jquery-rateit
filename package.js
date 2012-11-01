Package.describe({
  summary: "RateIt - a modern, mobile-friendly, jQuery (star) rating plugin"
});

Package.on_use(function (api) {
  api.use('jquery');
  api.add_files([
    'lib/jquery.rateit.min.js',
    'lib/rateit.css',
    'lib/star.gif',
    'lib/delete.gif'
  ], 'client'
  );
});
