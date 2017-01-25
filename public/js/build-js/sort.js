/**
 * Created by Administrator on 2015/12/23.
 */
/**
 * Created by Administrator on 2015/12/8.
 */

$(function () {
    var $p_id = $("#homePage_manage_page");
    // var picClient =new PicClient();
    var homePage_List = [];

    // picClient.addsingles(['homePage_upload'],function callback(date1,date2,date3){
    //     setTimeout(function () {
    //         $p_id.find('#url_display').attr('src',Domain+JSON.parse(date2).text);
    //         $p_id.find("#url").val( JSON.parse(date2).text);
    //     }, 1000);
    // })
    var  fileupload   =new fileUploadInit({});
    var o ={filename_type:'sort', pickId:'homePage_upload' , displayId:'url_display' };
    o.callback   = function (up, info, displayId) {
        var res = JSON.parse(info);
        var key = encodeURI(res.key);
        res = Domain  + key  ;
        $p_id.find('#url_display').attr('src',res);
        $p_id.find("#url").val(key);
    }
    fileupload.addfixed(o);

    //删除
    function homePage_delete(){
        $p_id.find('#homePage_Table').find('a[name="deleteHomePage"]').on('click',function(){
            var id = $(this).attr("data-value");
            $p_id.find('#delete_homePage_button').attr('data-value',id)
        })
    }

    //编辑
    function homePage_update(){
        $p_id.find('#homePage_Table').find('a[name="update_homePage"]').on('click',function(){
            var id = $(this).attr("data-value");
            id_select=id;
            for(var i=0;i<homePage_List.length;i++){
                if(homePage_List[i].id==id){
                    $p_id.find("#name").val(homePage_List[i].name)
                    $p_id.find("#url_display").attr("src",Domain+homePage_List[i].url)
                    $p_id.find("#url").val(homePage_List[i].url)
                }
            }
        })
    }


    $p_id.find('#delete_homePage_button').on('click',function(){
        var id = $(this).attr("data-value");
        buildClient.saveSort(id, function(res) {
            init ();
            $p_id.find("#delete_homePage_cancel").trigger("click");
            $p_id.find("#add_homePage").attr('disabled',false);
        });
    })

    //添加
    $p_id.find('#add_homePage').on('click',function(){
        $p_id.find('#add_homePage_form')[0].reset();
        $p_id.find('#url_display').attr('src','temp/red-wine.jpg')
        id_select='';
    })

    //保存
    $p_id.find('#save').on('click',function(){
        if(!$p_id.find("#url").val()){
            alert("请上传图片")
            return false;
        }
        if($p_id.find("#add_homePage_form").isValid()){
                var sort = new Sort({
                    name: $p_id.find("#name").val(),
                    url:$p_id.find("#url").val()
                });
                if(id_select!=''){
                    sort.id=parseInt(id_select);
                }
            console.log(sort)
            buildClient.saveSort(sort, function(res) {
                if(res.code!=1){
                    alert(res.text);
                    return;
                }
                init ();
                $p_id.find("#cancel").trigger("click");
            })
        }
    })

    /**
     * 初始化列表
     * @param scope
     */
    function init () {
        //var t = client.hello_func(new User({id: '123', name: '张三', age: 18}));

        var page = new Page();
        var sort = new Sort();
        buildClient.findSorts(sort,page,function(res) {
            var r = res.data;
            homePage_List = res.data
            $p_id.find("#homePageInquiry").empty();
            if(r){
                for(var i=0;i< r.length;i++){
                    $p_id.find("#homePageInquiry").append('<tr role="row" class="odd"> ' +
                    '<td><div style="text-align: center;"> ' +
                    '<strong> ' +
                    '<img src="'+Domain+r[i].url+'" alt="" width="160" height="110"> ' +
                    '</strong> ' +
                    '</div>' +
                    '</td> ' +
                    '<td><div style="text-align: center;">'+r[i].name+'</div></td> ' +
                    '<td>' +
                        '<div style="text-align: right;padding-right:4%;"> ' +
                        '<a href="#addHomePageModal" data-toggle="modal" name="update_homePage" data-value="'+r[i].id+'" class="btn btn-success font-14 ml-0-5 " style="width: 70px">编辑</a>' +
                        '<a href="#deleteHomePageModal" data-toggle="modal" name="deleteHomePage" data-value="'+r[i].id+'" class="btn btn-success font-14 ml-0-5 " style="width: 70px">删除</a>' +
                        '</div>' +
                    '</td>' +
                    '</tr>');
                }
            }else{
                $p_id.find("#homePageInquiry").append('<tr role="row" class="odd"><td></td><p class="text-gray-light ml-4 font-18">亲，还没有首页管理列表哦</p><td></tr>');
            }
            homePage_delete();
            homePage_update();
        });
    }
    init ();
});