module.exports = {
  name: 'link',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/link',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
