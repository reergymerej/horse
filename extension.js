const vscode = require('vscode')

function activate(context) {
  const disposable = vscode.commands.registerCommand('extension.horse', () => {
    vscode.window.showInformationMessage('Your extension works.')
  });

  context.subscriptions.push(disposable);
}

module.exports = {
  activate,
}
