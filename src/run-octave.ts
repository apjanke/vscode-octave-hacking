import * as vscode from 'vscode';
import { platform } from 'os';

/**
 * The actual CLI command to execute Octave; may be different dependeing on the OS.
 */
const pathByPlatform: { [key: string]: string } = {
    linux: 'octave',
    darwin: 'octave',
    win32: 'octave.exe',
};

const currentPlatform: string = platform();

/**
 * Open up an existing or new terminal panel and run Octave
 * with the current editor file as single argument.
 */
export function runOctaveInVSCodeTerminal(): void {
    if (!vscode.window.activeTextEditor) {
        return;
    }

    let terminal = getTerminal();

    terminal.show();
    terminal.sendText(`${pathByPlatform[currentPlatform]} ${vscode.window.activeTextEditor.document.fileName}`);

    // Switch cursor focus back to editor
    vscode.window.showTextDocument(vscode.window.activeTextEditor.document)
}

/**
 * Return the first opened terminal panel or open a new one if none exists already.
 */
function getTerminal(): vscode.Terminal {
    // If there are no open terminals, create one
    if (vscode.window.terminals.length === 0) {
        vscode.window.createTerminal();
    }

    // Use the first terminal that is there
    return vscode.window.terminals[0];
}
