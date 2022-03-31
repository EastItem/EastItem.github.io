var iset;
var now = 0;
var nowT;
var endTime = new Date().getTime() + 300000;
function outshcool() {
    now = new Date().getTime();
    nowT = setInterval(function () {
        now = now + 1000;
        $("#timeBox").html(new Date(now).Format("yyyy-MM-dd hh:mm:ss"));
        var s = endTime - now;
        $("#remainingTime").html("该凭证<b>" + formatDuring(s) + "</b>后将失效，请尽快出校")
    }, 1000);
    $("#startTime").html(new Date().Format("yyyy-MM-dd"));
     $("#inSchoolEndTime").html(new Date(new Date().getTime() + 14400000).Format("yyyy-MM-dd hh:mm:ss"));
     $("#studentName").html(getParam()['studentName'] + "（" + getParam()['studentId'] + "）");
    $("#typeBox").html("出");
    //$("#typeBox").css("animation", dateColorArr[getday()] + " 0.6s infinite");
    //$("#typeBox").css("-webkit-animation", dateColorArr[getday()] + " 0.6s infinite");
    $("body").css("background", getParam()['color']);
}
function inshcool() {
    now = new Date().getTime();
    nowT = setInterval(function () {
        now = now + 1000;
        $("#timeBox").html(new Date(now).Format("yyyy-MM-dd hh:mm:ss"));
        var s = endTime - now;
        $("#remainingTime").html("该凭证<b>" + formatDuring(s) + "</b>后将失效，请尽快入校")
    }, 1000);
    $("#startTime").html(new Date().Format("yyyy-MM-dd"));
    $("#inSchoolEndTime").html(new Date(new Date().getTime() + 14400000).Format("yyyy-MM-dd hh:mm:ss"));//必须进校
    $("#studentName").html(getParam()['studentName'] + "（" + getParam()['studentId'] + "）");
    $("#typeBox").html("入");
    $("body").css("background", getParam()['color']);
}

function formatDuring(mss) {
    var hours = parseInt((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    hours = hours < 10 ? "0" + hours : hours;
    var minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60));
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var seconds = parseInt((mss % (1000 * 60)) / 1000);
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return hours + ":" + minutes + ":" + seconds;
}
function getParam() {
    var url = location.search; //获取url中"?"符后的字串
    var info = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            if (strs[i].indexOf("studentName=") != -1) {
                info['studentName'] = decodeURIComponent(strs[i].replace("studentName=", ""));
            };
            if (strs[i].indexOf("studentId=") != -1) {
                info['studentId'] = decodeURIComponent(strs[i].replace("studentId=", ""));
            };
            if (strs[i].indexOf("studentSex=") != -1) {
                info['studentSex'] = decodeURIComponent(strs[i].replace("studentSex=", ""));
            };
            if (strs[i].indexOf("color=") != -1) {
                if (decodeURIComponent(strs[i].replace("color=", "") == "recommend")){
                    info['color'] = color();
                }
                else {
                    info['color'] = '#' + decodeURIComponent(strs[i].replace("color=", ""));
                }
                
            };
        };
        return info;
    } else {
        info = { 'studentName': '林日朗', 'studentId': '211435213', 'studentSex': '男',"color":"#00000"}
        return info;
    }
}