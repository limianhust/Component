/**
 * Created by Administrator on 2017/6/22 0022.
 */
export const scroll = {};
//用于存放所有的滚动条
let scrollList = [];
let objArray = [];
let newObj = {};
let scrollMoveObj = null, scrollPageY = 0, scrollY = 0;
//初始化滚动条
scroll.init = function (obj, width = "6", scrollClass, scrollSliderClass) {
    //滚动条对象已经存在
    if (typeof(obj) === 'string') {
        obj = document.getElementById(obj);
    }else if(objArray.indexOf(obj) > -1){
        obj = newObj[obj];
    }
    
    obj.style.overflow = 'hidden';
    console.log("obj2",obj);
    //当内容未超出现在高度时，不添加滚动条
    console.log("scrollHeight",obj.scrollHeight,"clientHeight",obj.clientHeight )
    if (!obj || obj.scrollHeight <= obj.clientHeight || obj.clientHeight === 0) {
        if(obj.scrollBar){
            obj.scrollBar.style.display = 'none';
        }
        return;
    }
    
    obj.scrollBarWidth = width || 6;
    
    // console.log(obj)
    // console.log(obj.id,objArray.includes(obj.id))
    //如果已经存在滚动条,将不再创建滚动条
    if (!(objArray.indexOf(obj.id) > -1)) {
        //将滚动条存入到数组中
        
        obj.scrollBar = document.createElement('div');
        document.body.appendChild(obj.scrollBar);
        obj.scrollBar.style.position = 'absolute';
        obj.scrollBar.className = scrollClass || '';
        //创建滚动条滑块
        obj.scrollBarSlider = document.createElement('div');
        obj.scrollBar.appendChild(obj.scrollBarSlider);
        obj.scrollBarSlider.style.position = 'absolute';
        obj.scrollBarSlider.className = scrollSliderClass || '';
        
        newObj[obj.id] = obj;
        objArray.push(obj.id);
        scrollList.push(obj);
        
    }
    //创建滚动条
    // console.log("objArray",objArray,"scrollList",scrollList);
    
    if (!scrollClass) {
        obj.scrollBar.style.backgroundColor = '#ccc';
    }
    if (!scrollSliderClass) {
        obj.scrollBarSlider.style.backgroundColor = '#009FE7';
    }
    let t = scrollList.indexOf(obj);
    
    
    //计算滚动条数据
    scrollResetSize(obj);
    
    //使用鼠标滚轮滚动
    obj.scrollBar.scrollDiv = obj;
    obj.scrollBarSlider.scrollDiv = obj;
    obj.onmousewheel = scrollMove;
    obj.scrollBar.onmousewheel = scrollMove;
    obj.scrollBarSlider.onmousewheel = scrollMove;
    
    //拖动滚动条滚动
    obj.scrollBarSlider.onmousedown = function (evt) {
        evt = evt || event;
        scrollPageY = evt.clientY;
        
        scrollY = this.scrollDiv.scrollTop;
        // console.log("scrollPageY",scrollPageY,"scrollY",scrollY);
        
        document.body.onselectstart = function () {
            return false
        };
        scrollMoveObj = this.scrollDiv;
        if (this.scrollDiv.scrollBar.className === '') {
            this.scrollDiv.scrollBarSlider.style.backgroundColor = '#009FE7';
        }
        return false;
    }
};

//计算滚动条中滑块的位置
function setScrollPosition(obj) {
    // console.log(obj.clientHeight, obj.scrollHeight, obj.scrollTop)
    obj.scrollBarSlider.style.top = (obj.clientHeight - obj.scrollBarHeight) * obj.scrollTop / (obj.scrollHeight - obj.clientHeight) + 'px';
    // console.log(obj.scrollBarSlider.style.top);
}

//计算滚动条在window中的位置
function scrollResetSize(obj,from) {
    console.log("obj3",obj.id,obj,newObj[obj.id]);
    if (typeof(obj) === 'string' ) {
        obj = newObj[obj];
    }
    
    //设置滚动条的显隐
    // console.log("obj3",obj);
    // console.log("from",from,"obj4scrollBar",obj.scrollBar);
    if (obj.scrollHeight <= obj.clientHeight) {
        obj.scrollTop = 0;
        obj.scrollBar.style.display = 'none';
    } else {
        obj.scrollBar.style.display = 'block';
    }
    
    let x = 0, y = 0;
    let p = obj;
    while (p) {
        x += p.offsetLeft;
        y += p.offsetTop;
        p = p.offsetParent;
    }
    
    //获得dom对象顶部的宽度
    let borderTop = parseInt(obj.style.borderTopWidth || 0);
    let borderBottom = parseInt(obj.style.borderBottomWidth || 0);
    
    //获得滚动条的宽度
    obj.scrollBar.style.width = obj.scrollBarWidth + 'px';
    //获得滚动条的高度
    obj.scrollBar.style.height = obj.clientHeight + 'px';
    
    // 下面的代码在设置滚动条的绝对定位
    
    //获取滚动条上边沿的宽度
    obj.scrollBar.style.top = y + borderTop + 'px';
    //x是左边距，obj.offsetWidth是包含border、padding、width的宽度
    obj.scrollBar.style.left = x + obj.offsetWidth - obj.scrollBarWidth + 'px';
    //滚动条滑块的宽度
    obj.scrollBarSlider.style.width = obj.scrollBarWidth + 'px';
    
    let sliderHeight = obj.clientHeight - (obj.scrollHeight - obj.clientHeight);
    //当滚动条滑块最小20个像素
    if (sliderHeight < 20) {
        sliderHeight = 20;
    }
    
    obj.scrollBarHeight = sliderHeight;
    obj.scrollBarSlider.style.height = sliderHeight + 'px';
    obj.scrollBarSlider.style.left = '0px';
    
    setScrollPosition(obj);
}
scroll.scrollResetSize = scrollResetSize;
// 鼠标滚轮滚动,这部分需要和firefox兼容
function scrollMove(evt) {
    let div = this.scrollDiv || this;
    if (div.scrollHeight <= div.clientHeight) return true;
    evt = evt || event;
    let step = 55;
    //向下滚是负数
    if (evt.wheelDelta < 0) {
        if (div.scrollTop >= (div.scrollHeight - div.clientHeight)) return true;
        div.scrollTop += step;
    } else {
        if (div.scrollTop === 0) return true;
        div.scrollTop -= step;
    }
    // console.log(div.scrollTop)
    setScrollPosition(div);
    return false;
}

//当页面大小发生变化时，重新计算滚动条位置
window.onresize = function () {
    console.log("onresize",1234);
    for (let i = 0; i < scrollList.length; i++) {
        scrollResetSize(scrollList[i]);
    }
};

document.documentElement.onmousemove = function (evt) {
    
    if (!scrollMoveObj)return;
    evt = evt || event;
    let per = (scrollMoveObj.scrollHeight - scrollMoveObj.clientHeight) / (scrollMoveObj.clientHeight - scrollMoveObj.scrollBarHeight)
    //(scrollPageY - evt.clientY) 鼠标拖动时，滚动条移动的距离
    scrollMoveObj.scrollTop = scrollY - (scrollPageY - evt.clientY) * per;
    setScrollPosition(scrollMoveObj);
};

document.documentElement.onmouseup = function (evt) {
    if (!scrollMoveObj)return;
    if (scrollMoveObj.scrollBar.className === '') {
        scrollMoveObj.scrollBarSlider.style.backgroundColor = '#009FE7';
    }
    scrollMoveObj = null;
    document.body.onselectstart = function () {
        return true
    };
};

scroll.destoryed = function (obj) {
    // debugger;
    console.log("destroyed")
    if(obj){
        obj.scrollBar.style.display = 'none';
    }
};