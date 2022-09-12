# Octave Hacking

Octave Hacking is an attempt to turn VS Code into a decent IDE for [GNU Octave](https://www.gnu.org/software/octave/).

## Features

* Syntax highlighting
* Outline view and code navigation for functions
* Code snippets
  * Functions, classdefs, and some common control structures

## Installation

To install Octave Hacking in your VS Code, [get it on the Visual Studio Code Marketplace](https://marketplace.visualstudio.com/items?itemName=apjanke.octave-hacking), or search for "octave hacking" in the Extensions tab of VS Code.

## Debugging

Octave Hacking does not support debugging Octave inside VS Code.
For that, I recommend you install the [Octave Debugger](https://marketplace.visualstudio.com/items?itemName=paulosilva.vsc-octave-debugger) extension by Paulo Silva.

## Examples

![Screenshot of Octave Hacking VS Code extension](/images/screenshot.png)

Code navigation!

![Screencast of Octave Hacking navigation using Outline View](/site-assets/outline-navigation.gif)

Snippets!

![Screencast of Octave Hacking snippets in action](/site-assets/snippets.gif)

## Compatibility

This extension may conflict with the Matlab extensions in the VS Code Marketplace.
I’ve found that when I have the Matlab extensions installed, even when they are disabled, sometimes Octave Hacking will not activate when opening a `.m` file.
I'm looking in to this.
In the mean time, if you’re having trouble getting Octave Hacking to work, try uninstalling (not just deactivating) any Matlab VS Code extensions.

## Background

[GNU Octave](https://www.gnu.org/software/octave/) is a scientific programming language for numerical analysis that is largely compatible with [MATLAB](https://www.mathworks.com/products/matlab.html). It is free software, cross-platform, and has pervasive support for arrays.

The Octave Hacking extension may be particularly useful to Mac users, because the Octave GUI for newer versions of Octave (5.x and 6.x) does not work correctly on macOS. VS Code with this extension and a debugging extension could be a good substitute.

## Extension Settings

Nothing yet.

## License

Octave Hacking is published under the open-source MIT License.

The original [TextMate Octave grammar](https://github.com/textmate/matlab.tmbundle/blob/2cdc1f841443e4bc8b94f42f5e86431b31e04387/Syntaxes/Octave.tmLanguage) on which Octave Hacking's syntax is based is published under a custom, but (I think) MIT-compatible license. That [TextMate grammar license](https://github.com/textmate/matlab.tmbundle/tree/2cdc1f841443e4bc8b94f42f5e86431b31e04387#license) text is:

```text
Permission to copy, use, modify, sell and distribute this
software is granted. This software is provided "as is" without
express or implied warranty, and with no claim as to its
suitability for any purpose.
```

## Author

Octave Hacking is written by [Andrew Janke](https://apjanke.net). The project home page is <https://github.com/apjanke/vscode-octave-hacking>.

Thank you to the [GNU Octave](https://octave.org) folks for writing Octave!

Octave Hacking logo produced by [funny.pho.to's Matrix Image Generator](http://funny.pho.to/matrix-image-generator), based on the original [Octave logo](https://www.gnu.org/software/octave/img/octave-logo.svg) by the Octave Developers.

The grammar for syntax highlighting is a lightly customized version of the [TextMate Octave.tmLanguage grammar](https://github.com/textmate/matlab.tmbundle/blob/master/Syntaxes/Octave.tmLanguage).

Andrew is also the maintainer of [Octave.app](https://octave-app.org/), a "native Mac app" distribution of GNU Octave. The Octave Hacking VS Code extension is compatible with Octave.app.

## Contributing

Development happens on GitHub at <https://github.com/apjanke/vscode-octave-hacking>.

Bug reports, feature requests, and bugfix PRs are welcome. For other changes, like adding new features or code design changes, please post an [issue in the issue tracker on GitHub](https://github.com/apjanke/vscode-octave-hacking/issues) to discuss it first.
