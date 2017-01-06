/**
 * Created by Administrator on 2015/11/18.
 */
$(function () {
    var $p_id = $("#product_manage_page")
    //数据表格筛选处事件冒泡
    $p_id.find('.j_bubble').click(function(event){
        event.stopPropagation();
    });

    //日历控件
    var nowTemp = new Date();
    var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
    $p_id.find('.j_datebetween').each(function(i, n) {
        var $date = $(n).find('.j_datepicker');
        var checkin = $date.eq(0).datepicker({
            format:'yyyy-mm-dd',
            language: 'zh-CN',
            autoclose:true
        }).on('changeDate', function(ev) {
            //if (ev.date.valueOf() > checkout.date.valueOf()) {
            var newDate = new Date(ev.date)
            newDate.setDate(newDate.getDate() + 1);
            checkout.setDate(newDate);
            checkout.setStartDate(newDate);
            //}
            $date.eq(1).focus();
        }).data('datepicker');

        var checkout = $date.eq(1).datepicker({
            format:'yyyy-mm-dd',
            language: 'zh-CN',
            autoclose:true
        }).data('datepicker');
    });

    $p_id.find('.add-on').click(function(){
        $(this).prev().focus();
    });


    /**
     * 构建表格
     * @param scope
     */
    function buildTable (scope) {
        var params = { // 查询参数
            product_no :$p_id.find("#product_no").val()|| "", //产品编号
            product_name :$p_id.find("#product_name").val()|| "", //产品名称
            product_type :$p_id.find("#product_type").val()|| "", //产品类型
            product_price :$p_id.find("#product_price").val()|| "", //产品价格
            product_status :$p_id.find("#product_status").val()|| "" //产品状态
        };
        var table_src = $p_id.find('#productManage_dataTables');
        debugger;
        var ajax_url = '/product/setProductList';
        var pageSize = 10 ;
        var aoColumns = [
            {"col_id": "product_no"},
            {"col_id": "product_name"},
            {"col_id": "product_type"},
            {"col_id": "product_price"},
            {"col_id": "product_status"}
        ];
        var aoColumnDefs = [
            {
                "colIndex": 0,   //产品编号
                "html": function (data, type, full) {
                    return '<td><label class="checkbox-inline"><input type="checkbox" name="productManage_checkbox" data-value="'+full.product_id+'">'+data+'</label></td>';
                }
            }, {
                "colIndex": 1,  //产品名称
                "html": function (data, type, full) {
                    return '<td><div style="text-align: center;">'+data+'</div></td>';
                }
            },{
                "colIndex": 2,  //产品类型
                "html": function (data, type, full) {
                    if(data==1){
                        full.product_type="蔬菜"
                    }else if(data==2){
                        full.product_type="水果"
                    }else if(data==3){
                        full.product_type="生鲜"
                    }else if(data==4){
                        full.product_type="食用菌"
                    }else if(data==5){
                        full.product_type="禽畜牧蛋肉"
                    }else if(data==6){
                        full.product_type="特种养殖"
                    }else if(data==7){
                        full.product_type="粮油"
                    }else if(data==8){
                        full.product_type="坚果干果"
                    }
                    return '<td><div style="text-align: center;">'+full.product_type+'</div></td>';
                }
            },  {
                "colIndex": 3,//产品价格
                "html": function (data, type, full) {
                    if(full.price_unit==1){
                        full.price_unit="公斤"
                    }else if(full.price_unit==2){
                        full.price_unit="斤"
                    }else if(full.price_unit==3){
                        full.price_unit="两"
                    }
                    return '<td><div style="text-align: center;">'+data+'/'+full.price_unit+'</div></td>';
                }
            },{
                "colIndex": 4,//产品状态
                "html": function (data, type, full) {
                    if(data==1){
                        return '<td><div style="text-align: center;">上架</div></td>';
                    }else if(data==2){
                        return '<td><div style="text-align: center;">下架</div></td>';
                    }else if(data==3){
                        return '<td><div style="text-align: center;">编辑中</div></td>';
                    }
                }
            },{
                "colIndex": 5,//操作
                "html": function (data, type, full) {
                    var list_order_states = full.product_status;
                    if(full.product_status==1){
                        full.status = "上架"
                        return'<td><div class="drop-opt">' +
                            '<a href="javascript:;" id="dropLabel-2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">详情<span class="icon-chevron-down"></span></a> <ul class="drop-cnt in" role="menu" aria-labelledby="dropLabel-1"> ' +
                            '<li><a name="product_down" href="javascript:void(0)" data-value="'+full.product_id+'">产品下架</a></li> ' +
                            '</ul> ' +
                            '</div></td>'
                    }else if(full.product_status==2){
                        full.status = "下架"
                        return'<td><div class="drop-opt">' +
                            '<a href="javascript:;" id="dropLabel-2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">详情<span class="icon-chevron-down"></span></a> <ul class="drop-cnt in" role="menu" aria-labelledby="dropLabel-1"> ' +
                            '<li><a name="product_up" href="javascript:void(0)" data-value="'+full.product_id+'">产品上架</a></li> ' +
                            '</ul> ' +
                            '</div></td>'
                    }else if(full.product_status==3){
                        full.status = "编辑中"
                        return'<td><div class="drop-opt">' +
                            '<a href="javascript:;" id="dropLabel-2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">详情<span class="icon-chevron-down"></span></a> <ul class="drop-cnt in" role="menu" aria-labelledby="dropLabel-1"> ' +
                            '<li><a name="product_up" href="javascript:void(0)" data-value="'+full.product_id+'">产品上架</a></li> ' +
                            '<li><a name="product_info" target="_blank" data-title="产品发布"  href="/product_release" data-value="'+full.product_id+'">编辑</a></li> ' +
                            '</ul> ' +
                            '</div></td>'
                    }
                }
            }];
        var sZeroRecords = '<p class="text-gray-light ml-4 font-18">亲，还没有订单管理列表哦</p>';
        var fnChangeDataCallback = function(data){  //获取到数据的回调函数，自定义数据格式


            $p_id.find("#daochutext").on("click",function(){
                var _Data = data.data;
                var parms = {
                    Data:[]
                }
                $p_id.find('#productManage_dataTables').find('input[type="checkbox"]').each(function (index, ele) {
                    debugger;
                    if($(this).is(':checked')){
                        for(var i=0;i<_Data.length;i++){
                            if(_Data[i].product_id ==$(this).attr("data-value")){
                                var Data_list =[
                                    _Data[i].product_no,_Data[i].product_name,_Data[i].product_type,
                                    _Data[i].product_price+"/"+_Data[i].price_unit,_Data[i].status
                                ]
                                parms.Data.push(Data_list);
                            }
                        }
                    }
                });

                $.ajax({
                    type: "POST",
                    url: "/excelexport",
                    dataType: "json",
                    data: parms,
                    success: function (data) {
                        window.location.href="/excelexport?tableData_number="+data.number+"&tableData_type=1";
                    },
                    error:function(data){
                        alert("失败");
                    }
                });
            });
            return data;
        };
        // 绘制表格
        TableAjax.drawTable(table_src, ajax_url, undefined, aoColumns, aoColumnDefs, params, sZeroRecords,fnChangeDataCallback);
    }
    buildTable();
    //查询
    $p_id.find("#product_manage_button").on('click',function(){
        buildTable();
    })
    //全选按钮点击事件
    $p_id.find("#batchCheck").on('click',function(){
        if($(this).is(':checked')){
            $p_id.find('#productManage_dataTables').find('input[type="checkbox"]').each(function (index, ele) {
                $(this).prop("checked",true);
                $p_id.find("#productBatch_up").attr("disabled",false);
                $p_id.find("#productBatch_down").attr("disabled",false);
                $p_id.find("#daochutext").attr("disabled",false);
            });
        }else{
            $p_id.find('#productManage_dataTables').find('input[type="checkbox"]').each(function (index, ele) {
                $(this).prop("checked",false);
                $p_id.find("#productBatch_up").attr("disabled",true);
                $p_id.find("#productBatch_down").attr("disabled",true);
                $p_id.find("#daochutext").attr("disabled",true);
            });
        }
    })
    //复选框监听事件
    $p_id.find('#productManage_dataTables').find('input[type="checkbox"]').change(function(){
        var Batch = false;
        $p_id.find('#productManage_dataTables').find('input[type="checkbox"]').each(function (index, ele) {
            if($(this).is(':checked')){
                Batch = true
            }
            if(Batch){
                $p_id.find("#productBatch_up").attr("disabled",false);
                $p_id.find("#productBatch_down").attr("disabled",false);
                $p_id.find("#daochutext").attr("disabled",false);
            }else{
                $p_id.find("#productBatch_up").attr("disabled",true);
                $p_id.find("#productBatch_down").attr("disabled",true);
                $p_id.find("#daochutext").attr("disabled",true);
            }
        });
    })

    //批量上架点击事件
    $p_id.find("#productBatch_up").on('click',function(){
        var productBatch_up = [];
        $p_id.find('#productManage_dataTables').find('input[type="checkbox"]').each(function (index, ele) {
            var seq_no = $(this).attr("data-value");
            seq_no = Number(seq_no);
            productBatch_up.push(seq_no);
        });
        var parms ={
            status:1,
            list:productBatch_up
        }
        $.ajax({
            type: "POST",
            url: "/product/changeProduct_status",
            dataType: "json",
            data: parms,
            success: function (data) {
                buildTable();
                product_up();
                product_down();
                $p_id.find("#batchCheck").prop("checked",false);
            },
            error:function(data){
                alert(data.message);
            }
        });
    })

    //批量下架点击事件
    $p_id.find("#productBatch_down").on('click',function(){
        var productBatch_down = [];
        $p_id.find('#productManage_dataTables').find('input[type="checkbox"]').each(function (index, ele) {
            var seq_no = $(this).attr("data-value");
            seq_no = Number(seq_no);
            productBatch_down.push(seq_no);
        });
        var parms ={
            status:2,
            list:productBatch_down
        }
        debugger;
        $.ajax({
            type: "POST",
            url: "/product/changeProduct_status",
            dataType: "json",
            data: parms,
            success: function (data) {
                buildTable();
                product_up();
                product_down();
                product_info();
                $p_id.find("#batchCheck").prop("checked",false);
            },
            error:function(data){
                alert(data.message);
            }
        });
    })
    function product_up(){
        //单击上架事件
        $p_id.find('#productManage_dataTables').find('a[name="product_up"]').on('click',function(){
            var seq_no = $(this).attr("data-value");
            seq_no = Number(seq_no);
            var parms ={
                status:1,
                list:[seq_no]
            }
            $.ajax({
                type: "POST",
                url: "/product/changeProduct_status",
                dataType: "json",
                data: parms,
                success: function (data) {
                    buildTable();
                },
                error:function(data){
                    alert(data.message);
                }
            });
        })
    }
    product_up();
    function product_down(){
        //单击下架事件
        $p_id.find('#productManage_dataTables').find('a[name="product_down"]').on('click',function(){
            var seq_no = $(this).attr("data-value");
            seq_no = Number(seq_no);
            var parms ={
                status:2,
                list:[seq_no]
            }
            $.ajax({
                type: "POST",
                url: "/product/changeProduct_status",
                dataType: "json",
                data: parms,
                success: function (data) {
                    buildTable();
                },
                error:function(data){
                    alert(data.message);
                }
            });
        })
    }
    product_down()
    function product_info(){
        //单击下架事件
        $p_id.find('#productManage_dataTables').find('a[name="product_info"]').on('click',function(){
            var seq_no = $(this).attr("data-value");
            setTimeout(function(){
                $("#product_release_page").find("#product_id").val(seq_no);
            }, 100);

        })
    }
    product_info()


});