const SIZE = 131; // 枚数
var tmp = {};
    function loadImageToTmp(){
        for(var i=1;i<=SIZE;i++){
            const _i = i;
            const img = new Image();
            tmp[_i] = null;
            img.src = "image/geek ("+_i+").png"; // 連続するファイル名
            img.addEventListener("load",()=>{
                tmp[_i] = img;
            })
        }
    }
console.log("画像プリロード完了")

const PX = 5; // 5px分の移動ごと画像を1枚進める   
const offset = $("#anim_img_box").offset(); // 画像を入れるdiv要素(position:stickyでトップに来たら固定される)
    $(window).scroll(function() {
        const y = $(window).scrollTop();
        const dy = y - offset.top;
        if(offset.top<y&&y<offset.top+SIZE*PX){
            $("#anim_img_box").css("top",0)
            const i = Math.floor(dy / PX);
            if(i<=0||i>=SIZE) return;
            if(tmp[i].src) image.src = tmp[i].src;
            }else if(y>=offset.top+SIZE*PX){
                $("#anim_img_box").css("top","-"+(dy-SIZE*PX)); // スクロール分が終了したときに移動を始める
            }
        });