# This Makefile is just used for making the distribution packages.
#
# It will build them, but not publish them (yet). You'll need to manually
# run `vsce publish`.
#
# See doc-project/ReleaseChecklist.md and this Microsoft doc:
#   https://code.visualstudio.com/api/working-with-extensions/publishing-extension
#
# Be aware that vsce requires node.js 20.* or higher.

.PHONY: dist
dist:
	mkdir -p dist
	npx vsce package
	mv octave-hacking-* dist

.PHONY: clean
clean:
	rm -rf *.vsix out/*
