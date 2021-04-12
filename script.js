function countdown(){
    var now = new Date();
    var kyo_tu = new Date('2022-01-16 09:30:00');
    var sub=kyo_tu-now;
    var day = Math.floor(sub/ (24*60*60*1000));
    var hour = Math.floor((sub-(day*24*60*60*1000))/(60*60*1000));
    var min = Math.floor((sub-((hour*60*60*1000)+(day*24*60*60*1000)))/(60*1000));
    var sec = Math.floor((sub-((min*60*1000)+(hour*60*60*1000)+(day*24*60*60*1000)))/1000);
    /*var sen = `共通テストまで後${day}日${hour}時間${min}分${sec}秒`;*/
    var sen = '共通テストまで後'+day+'日'+hour+'時間'+min+'分'+sec+'秒';
    /*document.getElementById("couter").innerHTML = sen;*/
    $('#couter').text(sen)
    }
    setInterval("countdown()",500);
