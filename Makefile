# This Makefile is just used for making the distribution packages

.PHONY: dist
dist:
	mkdir -p dist
	vsce package
	mv octave-hacking-* dist