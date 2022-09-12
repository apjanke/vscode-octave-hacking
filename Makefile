# This Makefile is just used for making the distribution packages.
#
# It will build them, but not publish them (yet). You'll need to manually
# run `vsce publish`.
#
# See doc-project/ReleaseChecklist.md and this Microsoft doc:
#   https://code.visualstudio.com/api/working-with-extensions/publishing-extension

.PHONY: dist
dist:
	mkdir -p dist
	vsce package
	mv octave-hacking-* dist
