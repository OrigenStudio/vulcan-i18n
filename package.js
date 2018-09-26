Package.describe({
  name: 'origenstudio:vulcan-i18n',
  summary: 'Vulcan generic helpers',
  version: '0.0.1',
  git: 'https://github.com/OrigenStudio/vulcan-i18n',
});

Package.onUse(api => {
  api.versionsFrom(['METEOR@1.0']);

  api.use([
    // Vulcan packages
    'vulcan:core@1.12.6',
  ]);

  api.mainModule('lib/client/main.js', 'client');
  api.mainModule('lib/server/main.js', 'server');
});
