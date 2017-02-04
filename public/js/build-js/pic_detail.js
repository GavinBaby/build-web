initBefore();
//图片数量
var num=0;
var build;
function initBefore(){
    var sorts = buildClient.findSorts(new Sort(),new Page() );
    sorts=sorts.data;
    for(var i=0;i<sorts.length;i++){
        $('#sort_ul').append('<li class="w-9-5"><label style="font-weight: 100">' +
            '<input type="checkbox" name="sort_name" id="'+sorts[i].name+'"   value='+sorts[i].name+'  >' +
            '&nbsp;&nbsp;'+sorts[i].name+'</label></li> ');
    }
    // url 监听
    var  fileupload   =new fileUploadInit({});
    var o ={filename_type:'buildUrl', pickId:'url', displayId:'url'};
    o.callback   = function (up, info, displayId) {
        var res = JSON.parse(info);
        var key = encodeURI(res.key);
        res = Domain  + key  ;
        $("#url").attr('src',res);
    }
    fileupload.addfixed(o);
}


var count=0;
$("#add_detail").on('click',function(){
    count++;
    $("#details_ul").append('<li style="width:400px">'+
        '<label class="radio-inline pr-1"><input type="radio" name="type'+count+'" value="1" onclick="showPic(1,this)" checked >文本</label>'+
        '<label class="radio-inline pr-1"><input type="radio" name="type'+count+'" value="2" onclick="showPic(2,this)" >图片</label>'+
        '<div style=" padding-top:10px"  class="typet">'+
        '<textarea  id="bodyt'+count+'"  class="form-control " style="height: 70px;width:300px;font-size: 12px" placeholder="请输入文本描述"  '+
        'maxlength="256"></textarea> </div>'+
        '<div style=" padding-top:10px;display: none" class="typep">'+
        '<img id="body'+count+'" class="w-10 h-8" src="/images/Btn_BodyFenxiangbBg.png"  /></div> </li>');
    var  fileupload = new fileUploadInit({});
    var o ={filename_type:'noticeDetail', pickId:'body'+count, displayId:'body'+count};
    o.callback   = function (up, info, displayId) {
        var res = JSON.parse(info);
        var key = encodeURI(res.key);
        res = Domain  + key  ;
        $("#"+displayId).attr('src',res);
//                    alert(num);
    }
    fileupload.addfixed(o);
})
console.log(id_select+'@@@@@@@@@@')
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