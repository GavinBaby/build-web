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

$("#add_desc").on('click',function(){
    $("#desc_ul").append('<li class="alert alert-dismissable"> ' +
        '<strong> ' +
        '<label class="control-label w-9" style="font-family: 微软雅黑;font-size: 16px">描述标题：</label> ' +
        '<div class="w-40"> ' +
        '<input  name="desc_t"   class="form-control" type="text" placeholder="请输入描述标题" maxlength="20"> ' +
        '</div> ' +
        '<label class="control-label w-9 mt-1" style="font-family: 微软雅黑;font-size: 16px">描述内容：</label> ' +
        '<div class="w-40 mt-1"> ' +
        '<textarea  name="desc_b"  class="form-control" style="height: 50px;font-size: 12px" placeholder="请输入描述内容" maxlength="256"></textarea> ' +
        '</div> ' +
        '<button type="button" class="close closefirst" data-dismiss="alert"></button> ' +
        '</strong> ' +
        '</li>');
})

var count=0;
$("#add_detail").on('click',function(){
    count++;
    $("#details_ul").append('<li class="alert alert-dismissable xys1"> ' +
        '<strong> ' +
        '<label class="control-label w-9" style="font-family: 微软雅黑;font-size: 16px">细节名称：</label> ' +
        '<div class="w-40"> ' +
        '<input  name="detail_t"   class="form-control" type="text" placeholder="请输入细节名称" maxlength="20"> ' +
        '</div> ' +
        '<label class="control-label w-9 mt-1" style="font-family: 微软雅黑;font-size: 16px">细节描述：</label> ' +
        '<div class="w-40 mt-1"> ' +
        '<textarea  name="detail_b"  class="form-control" style="height: 50px;font-size: 12px" placeholder="请输入细节描述" maxlength="256"></textarea> ' +
        '</div> ' +
        '<label class="control-label w-9 mt-1" style="font-family: 微软雅黑;font-size: 16px">细节图片：</label> ' +
        '<div class="w-40 mt-1"> ' +
        '<ul class="alert-policy-01 pull-left clearfix"  id="pic_ul_'+count+'" name="6">'+
        '</ul> ' +
        '<div class="roompic-upload w-12"> <a  class="form-btn-upload"  id="pic_add_'+count+'" ><i class="icon-plus-sign"></i>添加照片</a>'+
        '</div>'+
        '</div> ' +
        '<button type="button" class="close closefirst" data-dismiss="alert"></button> ' +
        '</strong> ' +
        '</li>');

    var  fileupload   =new fileUploadInit({});

    var o ={filename_type:'buildDetail', pickId:'pic_add_'+count, displayId:'pic_ul_'+count};
    o.callback   = function (up, info, displayId) {
        var res = JSON.parse(info);
        var key = encodeURI(res.key);
        res = Domain  + key  ;
        $("#"+displayId).append('<li class="alert alert-dismissable"><strong> <img src="'+res+'" alt="" width="100" height="80"> ' +
            '<button type="button" class="close" data-dismiss="alert"></button> </strong>&nbsp;&nbsp;&nbsp; </li>');
        num =$("#"+displayId).find('li').length;
//                    alert(num);
    }
    fileupload.addfixed(o);
})
if(id_select){
    //mod
    build = buildClient.findBuild(id_select);
    init(build);
}else{
    init();
}

function init(data){
    if(data){
        $('#name').val(data.name);
        if(data.sort){
            var sorts = data.sort.split(',');
            for(var i=0;i<sorts.length;i++){
                $('#'+sorts[i]).prop("checked",true);
            }
        }
        $('#address').val(data.address);
        $('#url').attr('src',Domain+data.url);
        $('#district').val( data.district_id);
        if(data.desc){
            var desc = JSON.parse(data.desc);
            for(var i=0;i<desc.length;i++){
                $("#desc_ul").append('<li class="alert alert-dismissable"> ' +
                    '<strong> ' +
                    '<label class="control-label w-9" style="font-family: 微软雅黑;font-size: 16px">描述标题：</label> ' +
                    '<div class="w-40"> ' +
                    '<input  name="desc_t"   class="form-control" type="text" placeholder="请输入描述标题" value="'+desc[i].title+'" maxlength="20"> ' +
                    '</div> ' +
                    '<label class="control-label w-9 mt-1" style="font-family: 微软雅黑;font-size: 16px">描述内容：</label> ' +
                    '<div class="w-40 mt-1"> ' +
                    '<textarea  name="desc_b"  class="form-control" style="height: 50px;font-size: 12px" placeholder="请输入描述内容" maxlength="256">'+desc[i].body+'</textarea> ' +
                    '</div> ' +
                    '<button type="button" class="close closefirst" data-dismiss="alert"></button> ' +
                    '</strong> ' +
                    '</li>');
            }
        }
        if(data.details){
            var details =data.details;
            count = details.length;
            for(var i=0;i<details.length;i++){
                $("#details_ul").append('<li class="alert alert-dismissable xys1"> ' +
                    '<strong> ' +
                    '<label class="control-label w-9" style="font-family: 微软雅黑;font-size: 16px">细节名称：</label> ' +
                    '<div class="w-40"> ' +
                    '<input  name="detail_t"   class="form-control" type="text" placeholder="请输入细节名称" value="'+details[i].name+'" maxlength="20"> ' +
                    '</div> ' +
                    '<label class="control-label w-9 mt-1" style="font-family: 微软雅黑;font-size: 16px">细节描述：</label> ' +
                    '<div class="w-40 mt-1"> ' +
                    '<textarea  name="detail_b"  class="form-control" style="height: 50px;font-size: 12px" placeholder="请输入细节描述" maxlength="256">'+details[i].desc+'</textarea> ' +
                    '</div> ' +
                    '<label class="control-label w-9 mt-1" style="font-family: 微软雅黑;font-size: 16px">细节图片：</label> ' +
                    '<div class="w-40 mt-1"> ' +
                    '<ul class="alert-policy-01 pull-left clearfix"  id="pic_ul_'+i+'" name="6">'+
                    '</ul> ' +
                    '<div class="roompic-upload w-12"> <a  class="form-btn-upload"  id="pic_add_'+i+'" ><i class="icon-plus-sign"></i>添加照片</a>'+
                    '</div>'+
                    '</div> ' +
                    '<button type="button" class="close closefirst" data-dismiss="alert"></button> ' +
                    '</strong> ' +
                    '</li>');
                doUrl(details[i],"pic_ul_"+i);


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



function doUrl(map,ul_id){
    for(var key in map){
        if(key.indexOf('url')==0&&map[key]){
            $('#'+ul_id).append('<li class="alert alert-dismissable"> <strong> <img src="'+Domain+map[key]+'" alt="" width="100" height="80"> ' +
                '<button type="button" class="close" data-dismiss="alert"></button> </strong>&nbsp;</li>');
        }
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
    alert(back.text)
})