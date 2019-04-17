# CSS

## box-shadow
box-shadow: 0px 4px 10px 0.5px rgba(175, 175, 175, .5);
box-shadow: 3px 4px 9px -2px rgba(175, 175, 175, .6);
box-shadow: 0 5px 15px rgba(0,0,0,.5);

## 三角形

```css
.caret {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 2px;
  vertical-align: middle;
  border-top: 4px solid;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
}
```

## 万能清除浮动

```css
.clearfix:after {
  content: '.';
  display: block;
  height: 0;
  clear: both;
}
.clearfix {
  zoom: 1;
}
```

## box-shadow 被后面的元素挡住

```css
//防止box-shadow被后面的元素挡住
position: relative;
box-shadow: 0px 0px 3px 4px rgba(0, 163, 138, 1);
```

## 文字溢出处理

```css
white-space: nowrap;
overflow: hidden;
max-width: 100%;
text-overflow: ellipsis;

/* 省略号 */
.ellipsis{
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
/* 2行 省略号 */
.ellipsis-line-2{
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-all;
 }
```

## scss 循环
```scss
    @each $name,
    $length in (xiaomi, 1),
    (huawei, 2),
    (oppo, 3),
    (san, 4),
    (vivo, 5),
    (meizu, 6),
    (zte, 7),
    (sony, 8) {
      li:nth-child(#{$length}) {
        transition: all 0.3s;
        background: url(/static/img/set1/#{$name}.png) no-repeat center center;
        &:hover {
          background: url(/static/img/set2/#{$name}.png) no-repeat center center;
        }
        &.active {
          background: url(/static/img/set2/#{$name}.png) no-repeat center center;
        }
      }
    }
  }
```

```scss
@for $i from 1 through 11 {
  .section#{$i} .fp-tableCell{
    background: url('/img/#{$i}.png');
    background-size: 100% 100%;
  }
}
```

## input 样式

.ifx-control {
  border: 1px solid #cbf1ea;
  border-radius: 4px;
  width: 100%;
  height: 34px;
  padding: 6px 12px;
  line-height: 1.42857143;
  background-color: #fff;
  background-image: none;
  font-size: 14px;
  outline: none;
  transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
  &:hover {
    border: 1px solid #6de4cd;
  }
  &:focus {
    border: 1px solid #5ee0c7;
    outline: 0;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 4px rgba(58, 219, 194, .6);
  }
  &.error {
    border: 1px solid #f94944;
    outline: 0;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 4px rgba(249, 73, 68, .6);
  }
}