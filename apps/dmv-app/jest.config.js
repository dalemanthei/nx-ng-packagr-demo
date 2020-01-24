module.exports = {
  name: 'dmv-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/dmv-app',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
