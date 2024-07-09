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
			let symbols = [];

			for (let i = 0; i < document.lineCount; i++) {
				let line = document.lineAt(i);

				let fcnPat = /^\s*function\s+(([[\]\s\w,~]*?\s*=\s*)?([\w.]+)\s*(\S.*))/;
				if (fcnPat.test(line.text)) {
					let match = RegExp(fcnPat).exec(line.text);
					let argoutSig = match![2];
					let name = match![3];
					let arginSig = match![4];
					let arginDeets = "";
					if (arginSig !== undefined) {
						arginDeets = arginSig.replace(/[#%].*$/, "").replace(/\bvarargin\b/, "...")
						arginDeets = arginDeets.replace(/\bthis\b/, "_")
					}
					let sigDeets = arginDeets
					if (argoutSig !== undefined) {
						let argoutDeets = argoutSig.replace(/\s*=\s*$/, "")
						argoutDeets = argoutDeets.replace(/\bthis\b/, "_")
						sigDeets = sigDeets + " → " + argoutDeets  // or : or -> or →
					}
					let fcnSym = new vscode.DocumentSymbol(
						name, sigDeets, vscode.SymbolKind.Function, line.range, line.range
					);
					symbols.push(fcnSym);
				}

				let classdefPat = /^\s*classdef\s+(\w+)\s*(.*?)([#%;].*)?$/;
				if (classdefPat.test(line.text)) {
					let match = RegExp(classdefPat).exec(line.text);
					let name = match![1];
					let classDeetsText = match![2];
					let classDeets = "";
					if (classDeetsText !== undefined) {
						classDeets = classDeetsText;
					}
					let classdefSym = new vscode.DocumentSymbol(
						name, classDeets, vscode.SymbolKind.Class, line.range, line.range
					);
					symbols.push(classdefSym);
				}
			}

			resolve(symbols);
		});
	}

}

export function deactivate() {
	console.log('Octave Hacking extension deactivated');
}
