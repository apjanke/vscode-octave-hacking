# Octave Hacking Release Checklist

See VS Code's ["Publishing Extensions" document](https://code.visualstudio.com/api/working-with-extensions/publishing-extension).

To create and publish a new release, do the following:

1. Test it. We have no automated tests, so run it interactively and play around with it.
1. Update the version in `package.json` and commit.
1. Test the packaging with `vsce package`.
1. Tag the release, in format `v<version>`, and do `git push --tags` to push it to GitHub.
1. Publish it with `vsce publish`.
1. Update the version in `package.json` to the next upcoming release and commit.
1. Create a Release on GitHub.
