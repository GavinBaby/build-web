
/**
 * Created by Administrator on 2015/11/18.
 */
$(function () {
    var $p_id = $("#comment_page");
    $p_id.find("#query").on('click',function(){
        buildTable();
    })
    var id_select='';
    //日历控件
    $('.j_datebetween').each(function(i, n) {
        var $date = $(n).find('.j_datepicker');
        var checkin = $date.eq(0).datepicker({
            format:'yyyy-mm-dd',
            language: 'zh-CN',
            autoclose:true
        }).on('changeDate', function(ev) {
            //if (ev.date.valueOf() > checkout.date.valueOf()) {
            // var newDate = new Date(ev.date)
            // newDate.setDate(newDate.getDate() + 1);
            // checkout.setDate(newDate);
            // checkout.setStartDate(newDate);
            // //}
            // $date.eq(1).focus();
        }).data('datepicker');

        // var checkout = $date.eq(1).datepicker({
        //     format:'yyyy-mm-dd',
        //     language: 'zh-CN',
        //     autoclose:true
        // }).data('datepicker');
    });
    //
    // $('.add-on').click(function(){
    //     $(this).prev().focus();
    // });

    /**
     * 构建表格
     * @param scope
     */
    function buildTable (scope) {
        var params = { // 查询参数
            name :$p_id.find("#name").val()|| "",
            body :$p_id.find("#body").val()|| "" ,
            level :$p_id.find("#level").val()|| "" ,
            fdate:$p_id.find("#fdate").val()|| "",
            op:$p_id.find("#op").val()|| "",
            state :$p_id.find("#state").val()|| ""
        };
        var table_src = $p_id.find('#table_comment');
        var ajax_url = '/findComments';
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
                    return '<td><div style="text-align: center;">'+full.body+'</div></td>';
                }
            },{
                "colIndex": 2,
                "html": function (data, type, full) {
                    return '<td><div style="text-align: center;">'+full.level+'</div></td>';
                }
            },  {
                "colIndex": 3,
                "html": function (data, type, full) {
                    return '<td><div style="text-align: center;">'+full.op+'</div></td>';
                }
            },{
                "colIndex": 4,
                "html": function (data, type, full) {
                    return '<td><div style="text-align: center;">'+full.fdate+'</div></td>';
                }
            },{
                "colIndex": 5,//状态
                "html": function (data, type, full) {
                        var name='正常';
                        if(full.state==2){
                            name='已删除';
                        }
                        return '<td><div style="text-align: center;">'+name+'</div></td>';
                }
            },{
                "colIndex": 6,//操作
                "html": function (data, type, full) {
                    if(full.state==1){
                        return  '<td><a class="btn btn-success font-14 " style="width: 60px"  name="del" data-value="'+full.id+'" >删除</a></td>';
                    }else{
                        return  '<td><a class="btn btn-success font-14 " style="width: 60px" name="recover" data-value="'+full.id+'" >恢复</a></td>';
                    }
                }
            }];
        var sZeroRecords = '<p class="text-gray-light ml-4 font-18">亲，还没有评论记录哦</p>';
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
        $p_id.find('a[name="del"]').on('click',function(){
            id_select = $(this).attr("data-value");
            var back = buildClient.updateT('comment','2',id_select);
            if(back.code==1){
                buildTable();
            }
            alert(back.text);
        })
        $p_id.find('a[name="recover"]').on('click',function(){
            id_select = $(this).attr("data-value");
            var back = buildClient.updateT('comment','1',id_select);
            if(back.code==1){
                buildTable();
            }
            alert(back.text);
        })
        
    }

});