initBefore();
//图片数量
var num=0;
var build;
function initBefore(){
    // url 监听
    var  fileupload   =new fileUploadInit({});
    var o ={filename_type:'picUrl', pickId:'url', displayId:'url'};
    o.callback   = function (up, info, displayId) {
        var res = JSON.parse(info);
        var key = encodeURI(res.key);
        res = Domain  + key  ;
        $("#url").attr('src',res);
    }
    fileupload.addfixed(o);



    var  fileupload2 = new fileUploadInit({});

    var o2 ={filename_type:'picDetail', pickId:'add_detail', displayId:'details_ul'};
    o2.callback   = function (up, info, displayId) {
        var res = JSON.parse(info);
        var key = encodeURI(res.key);
        res = Domain  + key  ;
        $("#details_ul").append('<li class="alert alert-dismissable w-14  "> <strong> <img src="'+res+'" alt=""  class="w-14 h-12"   >'+
            '<button type="button" class="close" data-dismiss="alert" ></button>  </strong> <div class="relative w-14 h-10">'+
            '<textarea class="w-14 h-10" name=" cost_content" placeholder="请输入描述内容" maxlength="1024"></textarea> </div> </li>');
    }

    fileupload2.addfixed(o2);

}


if(id_select){
    //mod
    build = buildClient.findBuild(id_select);
    init(build);
}else{
    init();
}

function init(data){
    if(data){
        $('#title').val(data.title);
        $('#url').attr('src',Domain+data.url);
        if(data.details){
            var details =data.details;
            count = details.length;
            for(var i=0;i<details.length;i++){
                $("#details_ul").append( );
                var  fileupload   =new fileUploadInit({});
                var o ={filename_type:'buildDetail', pickId:'pic_add_'+i, displayId:'pic_ul_'+i};
                o.callback   = function (up, info, displayId) {
                    var res = JSON.parse(info);
                    var key = encodeURI(res.key);
                    res = Domain  + key  ;
                    $('#'+displayId).append('<li class="alert alert-dismissable"> <strong> <img src="'+res+'" alt="" width="100" height="80"> ' +
                        '<button type="button" class="close"  ></button> </strong>&nbsp;&nbsp;&nbsp;</li>');
//                            num =$("#"+displayId).find('li.alert').length;
//                            if(num>=6){
//                                $("#"+displayId).find('form-btn-upload').
//                            }
                }
                fileupload.addfixed(o);
            }
        }

    }
}


function showPic(type,me){
    if(type==1){
        $(me).parents('li').find('.typet').css('display','block');
        $(me).parents('li').find('.typep').css('display','none');
    }else{
        $(me).parents('li').find('.typet').css('display','none');
        $(me).parents('li').find('.typep').css('display','block');
    }
}
function typeChange(type ){
    if(type==1){
        $(".type1").removeClass('dpn').addClass('dpy');
        $(".type2").removeClass('dpy').addClass('dpn');
    }else{
        $(".type1").removeClass('dpy').addClass('dpn');
        $(".type2").removeClass('dpn').addClass('dpy');
    }
}


//
$("#save").on('click',function() {
    if(!build){
        build=new Build();
    }
    build.name = $('#name').val();
    var sorts = $('#sort_ul').find("[name='sort_name']:checked");

    var sort ='';
    for(var i=0;i<sorts.length;i++){
        sort+=$(sorts[i]).val()+',';
    }
    if(sort.length==0){
        alert('请选择类别');
        return;
    }else{
        sort=sort.substr(0,sort.length-1);
    }
    build.sort =sort;
    build.district_id = $('#district').val();
    build.district_name = $('#district  option:selected').text();
    build.address = $('#address').val();
    build.x = x;
    build.y = y;

    build.url = $('#url').attr('src').replace(Domain,'');
    //描述
    var desc_lis = $('#desc_ul').find('li');
    var desc=[];
    var title='',body='';
    for(var i=0;i<desc_lis.length;i++){
        var e={};
        e.title=$(desc_lis[i]).find("[name='desc_t']").val() ;
        e.body=$(desc_lis[i]).find("[name='desc_b']").val() ;
        desc.push(e);
    }
    desc=JSON.stringify(desc);
    build.desc=desc;
    //明细
    var detail_lis = $('#details_ul').find('li.xys1');
    var details=[];
    var name='',desc='',imgs=[] ,temp;
    for(var i=0;i<detail_lis.length;i++){
        var e=new BuildDetail();
        e.name=$(detail_lis[i]).find("[name='detail_t']").val() ;
        e.desc=$(detail_lis[i]).find("[name='detail_b']").val() ;
        imgs=$(detail_lis[i]).find('img');
        for(var j=0;j<imgs.length;j++){
            temp=j+1;
            if(temp>6){
                alert('图片不能超过6张');
            }
            e['url'+temp]=$(imgs[j]).attr('src').replace(Domain,'');
        }
        details.push(e);
    }
    build.details=details;
    var back = buildClient.saveBuild(build);
    alert(back.text);
    $('#back').click();
    $('.close-page').click();
    // location.href="/buildP";
})