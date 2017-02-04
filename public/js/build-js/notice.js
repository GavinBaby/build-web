
/**
 * Created by Administrator on 2015/11/18.
 */
$(function () {
    var $p_id = $("#build_manage_page");
    //查询
    $p_id.find("#query").on('click',function(){

        buildTable();
    })

    //日历控件
    $('.j_datebetween').each(function(i, n) {
        var $date = $(n).find('.j_datepicker');
        var checkin = $date.eq(0).datepicker({
            format:'yyyy-mm-dd',
            language: 'zh-CN',
            autoclose:true
        }).on('changeDate', function(ev) {
        }).data('datepicker');
    });
    /**
     * 构建表格
     * @param scope
     */
    function buildTable (scope) {
        var name='';
        var params = { // 查询参数
            title :$p_id.find("#name_q").val()|| "",
            type :$p_id.find("#sort_q").val()|| "" ,
            op_time :$p_id.find("#fdate").val()|| "" ,
            state :$p_id.find("#state_q").val()|| ""
        };
        var table_src = $p_id.find('#table');
        var ajax_url = '/findNotices';
        var pageSize = 10 ;
        var aoColumns = [
        ];
        var aoColumnDefs = [
            {
                "colIndex": 0,
                "html": function (data, type, full) {
                    return '<td><label class="checkbox-inline">'+full.title+'</label></td>';
                }
            }, {
                "colIndex": 1,
                "html": function (data, type, full) {
                    name='新闻公告';
                    if(full.type==2){
                        name='活动公告';
                    }
                    return '<td><div style="text-align: center;">'+name+'</div></td>';
                }
            },{
                "colIndex": 2,
                "html": function (data, type, full) {
                    return '<td><div style="text-align: center;">'+full.public_time+'</div></td>';
                }
            },{
                "colIndex": 3,//状态
                "html": function (data, type, full) {
                         name='已展示';
                        if(full.state==2){
                            name='已隐藏';
                        }
                        return '<td><div style="text-align: center;">'+name+'</div></td>';
                }
            },{
                "colIndex": 4,//操作
                "html": function (data, type, full) {
                    // if(full.state==1){
                    //     return '<td><a   class="btn btn-success font-14 " style="width: 60px"   data-value="'+full.id+'" >隐藏</a></td>';
                    // }else{
                        return  '<td><a href="#addAccountModal"   class="btn btn-success font-14 " style="width: 60px" name="updateAccount" data-value="'+full.id+'" >展示</a> '+
                        '<a   class="btn btn-success font-14 " style="width: 60px" name="jumpToDetail" target="_blank" href="/buildP_detail" data-title="建筑编辑" data-value="'+full.id+'" >编辑</a></td>';
                    // }
                }
            }];
        var sZeroRecords = '<p class="text-gray-light ml-4 font-18">未查询到数据</p>';
        var fnChangeDataCallback = function(data){  //获取到数据的回调函数，自定义数据格式

            return data;
        };
        var fnDrawCallback = function(data){  //获取到数据的回调函数，自定义数据格式
            addListen();
            return data;
        };
        // 绘制表格
        TableAjax.drawTable(table_src, ajax_url, undefined, aoColumns, aoColumnDefs, params, sZeroRecords,fnChangeDataCallback,fnDrawCallback);
    }
    buildTable();
    function addListen(){
        var $p_id =$("#build_manage_page");
        $p_id.find('a[name="jumpToDetail"]').on('click',function(){
            id_select = $(this).attr("data-value");
        })
        $p_id.find('#add').on('click',function(){
            id_select = '';
        })
        
    }

});