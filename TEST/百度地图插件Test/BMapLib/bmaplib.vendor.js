// 绘制弧线类
// 提供绘制弧线功能的开源代码库，且用户可通过编辑功能（如开启拖拽起终点、线的宽度与颜色）绘制所需的弧线样式
require("./CurveLine");

// 鼠标绘制工具条库
// 提供鼠标绘制点、线、面、多边形（矩形、圆）的编辑工具条的开源代码库。且用户可使用JavaScript API对应覆盖物（点、线、面等）类接口对其进行属性（如颜色、线宽等）设置、编辑（如开启线顶点编辑等）等功能
require("./DrawingManager");

// 检索信息窗口类
// 提供“百度地图样式”的信息窗口，且窗口内容可自由定制多种风格。
require("./SearchInfoWindow");

// 事件包装器
// 百度地图API事件包装器类，对外开放。 对百度地图提供的事件机制，进行了包装，更好的提供事件绑定、删除体验
require("./EventWrapper");


// 自定义信息窗口
// 百度地图的infoBox。类似于infoWindow，比infoWindow更有灵活性，比如可以定制border，关闭按钮样式等。 
require("./InfoBox");


// 富标注
// 百度地图的富Marker类，对外开放。 允许用户在自定义丰富的Marker展现，并添加点击、双击、拖拽等事件
require("./RichMarker");


// 测距工具
// 百度地图的测距工具类，对外开放。 允许用户在地图上点击完成距离的测量。 使用者可以自定义测距线段的相关样式，例如线宽、颜色、测距结果所用的单位制等等。 主入口类是DistanceTool，
require("./DistanceTool");

// 添加标注工具
// 百度地图的添加标注工具类，对外开放。 允许用户在地图上点击后添加一个点标注，允许用户设定标注的图标样式。 主入口类是MarkerTool，
require("./MarkerTool");

// 几何运算
// GeoUtils类提供若干几何算法，用来帮助用户判断点与矩形、 圆形、多边形线、多边形面的关系,并提供计算折线长度和多边形的面积的公式。 主入口类是GeoUtils，
require("./GeoUtils");

// 拉框放大工具
// 百度地图的拉框缩放类，对外开放。 允许用户在地图上执行拉框放大或者缩小操作， 使用者可以自定义缩放时的动画、遮盖层的样式等效果。 主入口类是RectangleZoom，
require("./searchInRectangle");

// 标注管理器
// 百度地图的标注管理器。多marker的管理，更高效、解析更快
require("./MarkerManager");
