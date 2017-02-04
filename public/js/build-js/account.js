
/**
 * Created by Administrator on 2015/11/18.
 */
$(function () {
    var $p_id = $("#account_manage_page");
    //查询
    $p_id.find("#query").on('click',function(){
        buildTable();
    })
    /**
     * 构建表格
     * @param scope
     */
    var name='';
    function buildTable (scope) {
        debugger;
        var params = { // 查询参数
            username :$p_id.find("#name_q").val()|| "",
            mobile :$p_id.find("#mobile_q").val()|| "" ,
            regTime :$p_id.find("#op_time_q").val()|| "" ,
            state :$p_id.find("#state_q").val()|| ""
        };
        var table_src = $p_id.find('#table');
        var ajax_url = '/findAccounts';
        var pageSize = 10 ;
        var aoColumns = [
        ];
        var aoColumnDefs = [
            {
                "colIndex": 0,
                "html": function (data, type, full) {
                    return '<td><label class="checkbox-inline">'+full.username+'</label></td>';
                }
            }, {
                "colIndex": 1,
                "html": function (data, type, full) {
                    return '<td><div style="text-align: center;">'+full.mobile+'</div></td>';
                }
            },{
                "colIndex": 2,
                "html": function (data, type, full) {
                    return '<td><div style="text-align: center;">'+full.regTime+'</div></td>';
                }
            }, {
                "colIndex": 3,//状态
                "html": function (data, type, full) {
                          name='正常';
                        if(full.state==2){
                            name='已冻结';
                        }
                        return '<td><div style="text-align: center;">'+name+'</div></td>';
                }
            },{
                "colIndex": 4,//操作
                "html": function (data, type, full) {
                    if(full.state==1){
                        return '<td><a   class="btn btn-success font-14 " style="width: 60px"   data-value="'+full.id+'" onclick="doaccout(1,this)" >冻结</a></td>';
                    }else{
                        return '<td><a   class="btn btn-success font-14 " style="width: 60px"   data-value="'+full.id+'" onclick="doaccout(2,this)"  >恢复</a></td>';
                    }
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

    function doaccout(type,me) {
        alert(type)
    }

});