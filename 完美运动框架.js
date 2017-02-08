/**
 * Created by Administrator on 2017/1/19.
 */
function startmove(obj,json,fn){

    clearInterval(obj.b);
    obj.b=setInterval(function(){
        var bstop=true;
        for(var attr in json) {
            var icur = 0;
            if (attr == "opacity") {
                icur = parseInt(parseFloat(getStyle(obj, attr)) * 100);
            }
            else {
                icur = parseInt(getStyle(obj, attr));
            }
            var speed = (json[attr] - icur) / 8;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if (icur != json[attr]) {
                 bstop=false;
                }
            if (attr == "opacity") {
                    obj.style.filter = "filter:alpha(opacity:" + (icur + speed) + ")";
                    obj.style.opacity = (icur + speed) / 100;
                }
                else {
                    obj.style[attr] = icur + speed + "px";
                }
            }
            if(bstop){
                clearInterval(obj.b);
                if(fn){
                    fn();
                }
            }

    },30)
}
function getStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else{
        return getComputedStyle(obj,false)[attr];
    }
}