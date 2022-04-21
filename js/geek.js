const SIZE = 211; // 枚数
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

loadImageToTmp();
const image = document.getElementById("anim_img");
console.log(image);//とった文の確かめ用

const PX = 20; // 10px分の移動ごと画像を1枚進める   
const offset = $("#anim_img_box").offset(); // 画像を入れるdiv要素(position:stickyでトップに来たら固定される)
    $(window).scroll(function() {
        const y = $(window).scrollTop();
        const dy = y - offset.top;
        console.log( y - offset.top); //ちゃんと指定（#anim_img_box）offsetからｙ軸の計算できてるか？
        console.log(offset.top + SIZE*PX); //offset.topにスクロール分の画像枚数とスクロールPX足せているか？
        if(offset.top<y&&y<offset.top+SIZE*PX){
            $("#anim_img_box").css("top",0)
            const i = Math.floor(dy / PX);
            if(i<=0||i>=SIZE) return; //ここはスクロールバックのこと言ってる
            if(tmp[i].src) image.src = tmp[i].src;
            console.log("top0確認")
        }else if(y>=offset.top+SIZE*PX){
            $("#anim_img_box").css("top","-"+(dy-SIZE*PX)); // スクロール分が終了したときに移動を始める
            console.log(dy-SIZE*PX)
        }
        });

        $("#anim_img_padding").height(SIZE*PX);