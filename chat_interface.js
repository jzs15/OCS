var ifm = document.createElement('iframe');
document.body.appendChild(ifm);
ifm.src = "/toolbar_chat";
ifm.className = "suspend";
ifm.style.width = "40px";
ifm.style.height = "198px";
ifm.frameBorder = "0";
ifm.scrolling = "no";
ifm.style.right = "0";
ifm.style.bottom = "60%";
ifm.style.position = "fixed";
ifm.overflow = "hidden";


function open_chat() {
    window.open("chat", "chat", "width = 650px, height = 502px");
}

function ifm_chat() {
    var ifm2 = document.createElement('iframe');
    parent.document.body.appendChild(ifm2);
    ifm2.src = "chat";
    ifm2.frameBorder = "0";
    ifm2.id = "ifm_chat";
    ifm2.width = "650px";
    ifm2.height = "500px";
    ifm2.scrolling = "no";
    ifm2.style.right = "0px";
    ifm2.style.bottom = "0px";
    ifm2.style.position = "fixed";
}

$(document).ready(function () {

    $(".suspend").mouseover(function () {
        $(this).stop();
        $(this).animate({width: 160}, 400);
    })

    $(".suspend").mouseout(function () {
        $(this).stop();
        $(this).animate({width: 40}, 400);
    });

});

function init_data() {

		var sc=document.getElementsByTagName('script');
		var paramsA;
		for(var i=0;i<sc.length;i++){
			paramsA = sc[i].src;
			if(paramsA!=""){
				var paramsA=sc[i].src.split('?')[0];
				alert(paramsA.substring(-17:))
				if(paramsA.substring(-17:) == "chat_interface.js"){
					var paramsArr=sc[i].src.split('?')[1];
				}
			}
		}
		company_code = paramsArr[0].split('=')[1];
   alert(company_code);

}
