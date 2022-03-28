function getday() {
	var d = new Date().getDay()
	var bias = new Date().getDay() + 3
	return (d + bias) % 7
}
function outshcool() {
    now = new Date().getTime();
    nowT = setInterval(function () {
        now = now + 1000;
        $("#timeBox").html(new Date(now).Format("yyyy-MM-dd hh:mm:ss"));
        var s = endTime - now;
        $("#remainingTime").html("该凭证<b>" + formatDuring(s) + "</b>后将失效，请尽快出校")
    }, 1000);
    $("#startTime").html(new Date().Format("yyyy-MM-dd"));
    // 出校 $("#inSchoolEndTime").html(new Date(new Date().getTime() + 14400000).Format("yyyy-MM-dd hh:mm:ss"));
     $("#studentName").html(getParam()['studentName'] + "（" + getParam()['studentId'] + "）");
    $("#typeBox").html("出");
    //$("#typeBox").css("animation", dateColorArr[getday()] + " 0.6s infinite");
    //$("#typeBox").css("-webkit-animation", dateColorArr[getday()] + " 0.6s infinite");
    $("body").css("background", dateColorArr[getday()]);
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
    $("body").css("background", dateColorArr[getday()]);
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