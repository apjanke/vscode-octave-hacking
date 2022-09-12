# Octave Hacking Release Checklist

See VS Code's ["Publishing Extensions" document](https://code.visualstudio.com/api/working-with-extensions/publishing-extension).

To create and publish a new release, do the following:

1. Make sure `CHANGELOG.md` is up to date
1. Test it. We have no automated tests, so run it interactively and play around with it.
1. Update the version in `package.json` and `CHANGELOG.md` and commit.
  1. Use git commit message `"Release v<version>"`.
  1. Include the release date in the Changelog.
1. Test the packaging with `vsce package`.
  1. Uninstall any current installation of the extension from your VS Code.
  1. Install from the local package using `code --install-extension <file>.vsix`.
  1. Play around with it. And check its appearance in the extension info view.
1. Tag the release, in format `v<version>`, and do `git push --tags` to push it to GitHub.
1. Update the version in `package.json` to the next upcoming release and commit.
  1. Use a `-SNAPSHOT` suffix in the version number to indiate it's in development.
  1. Use git commit message `"Open development for next release"`.
1. Create a Release on GitHub.
  1. Name it `"Version <version>"`
1. Publish it to VS Code Marketplace with `vsce publish`.
