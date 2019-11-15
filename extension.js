const vscode = require('vscode')

function activate() {
  vscode.window.showInformationMessage('Your extension works.')
}

module.exports = {
  activate,
}
