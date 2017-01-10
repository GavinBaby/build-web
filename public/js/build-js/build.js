
/**
 * Created by Administrator on 2015/11/18.
 */
$(function () {
    var $p_id = $("#build_manage_page");
    //查询
    $p_id.find("#query").on('click',function(){
        buildTable();
    })
    /**
     * 构建表格
     * @param scope
     */
    function buildTable (scope) {
        var params = { // 查询参数
            name :$p_id.find("#name_q").val()|| "",
            sort :$p_id.find("#sort_q").val()|| "" ,
            address :$p_id.find("#address_q").val()|| "" ,
            // op :$p_id.find("#op").val()|| "" ,
            // op_time :$p_id.find("#op_time").val()|| "" ,
            state :$p_id.find("#state_q").val()|| ""
        };
        var table_src = $p_id.find('#table');
        var ajax_url = '/findBuilds';
        var pageSize = 10 ;
        var aoColumns = [
        ];
        var aoColumnDefs = [
            {
                "colIndex": 0,
                "html": function (data, type, full) {
                    return '<td><label class="checkbox-inline">'+full.name+'</label></td>';
                }
            }, {
                "colIndex": 1,
                "html": function (data, type, full) {
                    return '<td><div style="text-align: center;">'+full.sort+'</div></td>';
                }
            },{
                "colIndex": 2,
                "html": function (data, type, full) {
                    return '<td><div style="text-align: center;">'+full.address+'</div></td>';
                }
            },  {
                "colIndex": 3,
                "html": function (data, type, full) {
                    return '<td><div style="text-align: center;">'+full.op+'</div></td>';
                }
            },{
                "colIndex": 4,
                "html": function (data, type, full) {
                    return '<td><div style="text-align: center;">'+full.op_time+'</div></td>';
                }
            },{
                "colIndex": 5,//状态
                "html": function (data, type, full) {
                        var name='已展示';
                        if(full.state==2){
                            name='已隐藏';
                        }
                        return '<td><div style="text-align: center;">'+name+'</div></td>';
                }
            },{
                "colIndex": 6,//操作
                "html": function (data, type, full) {
                    if(full.state==1){
                        return '<td><a   class="btn btn-success font-14 " style="width: 60px"   data-value="'+full.id+'" >隐藏</a></td>';
                    }else{
                        return  '<td><a href="#addAccountModal"   class="btn btn-success font-14 " style="width: 60px" name="updateAccount" data-value="'+full.id+'" >展示</a> '+
                        '<a   class="btn btn-success font-14 " style="width: 60px" name="jumpToDetail" target="_blank" href="/buildP_detail" data-title="建筑编辑" data-value="'+full.id+'" >编辑</a></td>';
                    }
                }
            }];
        var sZeroRecords = '<p class="text-gray-light ml-4 font-18">亲，还没有账号管理列表哦</p>';
        var fnChangeDataCallback = function(data){  //获取到数据的回调函数，自定义数据格式
            setTimeout(function(){
                addListen();
            },100);
            return data;
        };
        var fnDrawCallback = function(data){  //获取到数据的回调函数，自定义数据格式
            return data;
        };
        // 绘制表格
        TableAjax.drawTable(table_src, ajax_url, undefined, aoColumns, aoColumnDefs, params, sZeroRecords,fnChangeDataCallback,fnDrawCallback);
    }
    buildTable();
    function addListen(){
        $p_id.find('a[name="jumpToDetail"]').on('click',function(){
            id_select = $(this).attr("data-value");
        })
    }

});