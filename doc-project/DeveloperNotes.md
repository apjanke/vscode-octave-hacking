# Developer Notes

## Goals

* Syntax highlighting, in my preferred style
  * Only keywords highlighted, not all functions?
* Nice outline
  * Need a DocumentSymbolProvider for this
* Intellisense
* Linting
  * This will require writing a whole Octave linter, since none exists
* Code folding
* Go to definition
* Comment/uncomment (cmd-K cmd-C)
* Matching-paren bouncing with Ctrl-Shift-5 (like % in vim)
* Snippets in my preferred form
* Refactoring
  * Rename, with correct scope identification
* Function signature help
* Debugging/run Octave in a console window
  * Hover over variable in editor to see its value
* Maybe a theme with the Octave logo colors
* Profiler results in a web view?
* Embedded Texinfo support
* Auto-indentation

## Concrete steps

* Grab the existing TextMate grammar definition for Octave and pull it in.
* Find my old snippets and incorporate those
  * Learn how to use snippets again
* Register as a VS Code Extension publisher
  * Decide whether to use "apjanke" or "janklab"

## Inspirations

Matlab plugin (1.5.2) by Xavier Hahn provides Outline support. (<https://github.com/Gimly/vscode-matlab>)

But:

* "Sort by name" sorts on the whole function signature, including the leading "function [...] =", not just the function name.
* It's a flat list of functions; I'd like to have a class structure with properties/events/enumeration/methods, and then nested functions inside the other functions.
* I don't like how it highlights all the built-in Matlab function names

Or does it? I turned off some plugins and turned them back on, and now I get no Outline for my .m files.

Octave plugin by leafvmaple (<https://github.com/leafvmaple/vscode-octave>) provides Octave-correct-ish syntax highlighting. So does Octave (0.0.3) by Toasty Technologies; that one is based on <https://github.com/textmate/matlab.tmbundle>.

Some stuff provides snippets.

TextMate's license:

> Permission to copy, use, modify, sell and distribute this
> software is granted. This software is provided "as is" without
> express or implied warranty, and with no claim as to its
> suitability for any purpose.
