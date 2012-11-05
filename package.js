Package.describe({
  summary: "RateIt - a modern, mobile-friendly, jQuery (star) rating plugin"
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.add_files([
    path.join('lib', 'jquery.rateit.js'),
    path.join('lib', 'rateit.css'),
    path.join('lib', 'star.gif'),
    path.join('lib', 'delete.gif')
  ], 'client'
  );
});
