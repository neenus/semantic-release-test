module.exports = {
  branches: ['main'], // Branches to release from
  plugins: [
    '@semantic-release/commit-analyzer', // Analyzes commits to determine the release type
    '@semantic-release/release-notes-generator', // Generates release notes
    '@semantic-release/changelog', // Updates the CHANGELOG.md file
    '@semantic-release/npm', // Publishes the new version to npm
    '@semantic-release/github', // Creates a GitHub release
    [
      '@semantic-release/git', // Commits the changes to package.json and CHANGELOG.md
      {
        assets: ['package.json', 'CHANGELOG.md'],
        message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
  ],
};

