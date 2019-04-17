## npm install svg-sprite-loader

## 添加 svg loader
```js
{
    test: /\.svg$/,
    loader: 'svg-sprite-loader',
    include: [resolve('src/icons')],
    options: {
        symbolId: 'icon-[name]'
    }
},

去掉其他 loader 对 svg 的处理，避免冲突
exclude: [resolve('src/icons')],

```

## src/components/svgicon

## src/icons

