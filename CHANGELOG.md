# Octave Hacking Change Log

This file is a list of notable changes to the Octave Hacking VS Code extension.

This project attempts to adhere to [Semantic Versioning](https://semver.org/spec/v2.0.0.html) for its releases. But Andrew (its main developer) isn't good enough at TypeScript or VS Code extension development to guarantee that. Releases may be yanked and reversioned if we mess up bad enough on that front.

This file is roughly in [Keep a Changelog](https://keepachangelog.com/en/1.0.0) format.

In this document, "the syntax" refers to the Octave M-code syntax definition inside the extension.

## [Unreleased]


## [0.2.13] - 2022-09-12

### Fixed

* Bump dependencies with security vulnerabilities: lodash, y18n, ansi-regex, minimist, mocha, path-parse.
* Add support for getter/setter method names with dots in them (like `get.foo`).
* Recognize `PKG_ADD` and `PKG_DEL` files as Octave scripts.
* Reformatted CHANGELOG to be closer to [Keep a Changelog](https://keepachangelog.com/en/1.0.0) format, and be more markdownlint-clean.
* The language is now referred to as "Octave" instead of "Matlab" in user presentation elements of the syntax.

### Changed

* Expanded README with Contributing info, thank-you to GNU Octave, and note about Octave.app.
* Added some coding guidelines to DeveloperNotes.
* "Bundle" the extension for efficiency.

## [0.2.12] - 2020-01-28

### Changed

* Tweaked the syntax to highlight classdef/methods/properties/etc as keywords.

## [0.2.4] - 0.2.11

### Fixed

* Several minor bug fixes.
* Some tweaks to the syntax definition.

## [0.2.3] - 2020-01-20

### Added

* Added project logo and screenshot.

## [0.2.2] - 2020-01-20

### Fixed

* Fixed CHANGELOG contents.

## [0.2.1] - 2020-01-20

### Fixed

* Fixed content in README.

## [0.2.0] - 2020-01-20

### Added

* Added a few basic code snippets.

### Fixed

* Fixed CHANGELOG formatting.

## [0.1.0] - 2020-01-20

Initial preview release.

### Added

* Syntax definition, based on the [Textmate Octave grammar](https://github.com/textmate/matlab.tmbundle/blob/master/Syntaxes/Octave.tmLanguage).
* Syntax highlighting of Octave code.
* Basic code navigation with Outline view.
