import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('Octave Hacking extension activating');
	context.subscriptions.push(vscode.languages.registerDocumentSymbolProvider(
		{language: 'octave'}, new OctaveDocumentSymbolProvider()
	));
	console.log('Octave Hacking extension activated');
}

class OctaveDocumentSymbolProvider implements vscode.DocumentSymbolProvider {

	public provideDocumentSymbols(document: vscode.TextDocument,
					token: vscode.CancellationToken): Thenable<vscode.DocumentSymbol[]> {
		return new Promise((resolve, reject) => {
			var symbols = [];

			for (var i = 0; i < document.lineCount; i++) {
				var line = document.lineAt(i);
				var pat = new RegExp('^\\s*function\\s+((?:[\\[\\]\\s\\w_,~]*?\\s*=)?\\s*([\\w\\.]+).*)');
				if (pat.test(line.text)) {
					var match = line.text.match(pat);
					let details = match![1];
					let name = match![2];
					let docSym = new vscode.DocumentSymbol(
						name, details, vscode.SymbolKind.Function, line.range, line.range
					);
					symbols.push(docSym);
				}
			}

			resolve(symbols);
		});
	}

}

export function deactivate() {}
