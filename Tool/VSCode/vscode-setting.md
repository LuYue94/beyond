# vscode

## Markdown Preview Enhanced
`ctrl+shift+m`
https://shd101wyy.github.io/markdown-preview-enhanced/#/zh-cn/usages

## REST client


## eslint

eslint中文文档  
https://github.com/Jocs/ESLint_docs/blob/master/Configration/ESLint_configration.md


## Settings Sync
GITHUB TOKEN: 39f87529c5ae8070ab830aa27930b965d71b7a3f
GITHUB GIST: 42a2e10dbe84708ab7fad252d9e8315b

### keybindings
```json
// 将键绑定放入此文件中以覆盖默认值
[{
        "key": "ctrl+shift+s",
        "command": "workbench.action.files.saveAll"
    },
    {
        "key": "ctrl+k s",
        "command": "-workbench.action.files.saveAll"
    },
    // {
    //     "key": "ctrl+down",
    //     "command": "editor.emmet.action.nextEditPoint",
    //     "when": "editorTextFocus"
    // }, {
    //     "key": "ctrl+up",
    //     "command": "editor.emmet.action.prevEditPoint",
    //     "when": "editorTextFocus"
    // },
    {
        "key": "ctrl+d",
        "command": "editor.action.deleteLines",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+shift+a",
        "command": "extension.align",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+alt+a",
        "command": "-extension.align",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+right",
        "command": "editor.action.nextSelectionMatchFindAction",
        "when": "editorFocus"
    },
    {
        "key": "ctrl+f3",
        "command": "-editor.action.nextSelectionMatchFindAction",
        "when": "editorFocus"
    },
    {
        "key": "ctrl+left",
        "command": "editor.action.previousSelectionMatchFindAction",
        "when": "editorFocus"
    },
    {
        "key": "ctrl+shift+f3",
        "command": "-editor.action.previousSelectionMatchFindAction",
        "when": "editorFocus"
    }
]
```

### setting:
```json
{
    "workbench.iconTheme": "vscode-icons",
    "git.ignoreMissingGitWarning": true,
    "explorer.openEditors.visible": 0,
    "files.associations": {
        "*.wxml": "wxml",
        "*.cjson": "jsonc",
        "*.wxss": "css",
        "*.wxs": "javascript"
    },
    "explorer.confirmDelete": false,
    "emmet.includeLanguages": {
        "wxml": "html"
    },
    "minapp-vscode.disableAutoConfig": true,
    "window.zoomLevel": -1,
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "vue-html",
        {
            "language": "vue",
            "autoFix": true
        }
    ],
    "eslint.options": {
        "plugins": [
            "vue"
        ]
    },
    "eslint.run": "onSave",
    "eslint.autoFixOnSave": true,
    "breadcrumbs.enabled": true,
    "editor.minimap.enabled": false,
    "window.title": "${rootName} -${activeEditorMedium}",
    "todohighlight.isEnable": true,
    "todohighlight.keywords": [
        "TODO"
    ],
    "todohighlight.include": [
        "**/*.js",
        "**/*.jsx",
        "**/*.ts",
        "**/*.tsx",
        "**/*.html",
        "**/*.php",
        "**/*.css",
        "**/*.scss",
        "**/*.vue",
    ]
}

```