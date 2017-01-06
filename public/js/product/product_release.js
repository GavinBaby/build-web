/**
 * Created by Administrator on 2015/11/17.
 */
$(function () {
    var $p_id = $("#product_release_page");
    var picClient =new PicClient();
    picClient.addsingles(['contentfile_upload','productfile_upload'],function callback(date1,date2,date3){
        $p_id.find('#display').attr('src','upload/'+date1.name);
        $p_id.find("#img_cover").val('upload/'+date1.name);
    })
    setTimeout(function(){
        if($p_id.find("#product_id").val()){
            $.ajax({
                type: "get",
                url: "/product/getProductInfo?product_id="+$p_id.find("#product_id").val(),
                dataType: "json",
                data: '',
                success: function (data) {
                    if(data){
                        $p_id.find("#product_name").val(data.product_name);
                        $p_id.find("#product_no").val(data.product_no);
                        $p_id.find("#product_price").val(data.product_price);
                        $p_id.find("#product_explain").val(data.product_explain);
                        $p_id.find("#display").attr('src',data.img_cover);
                        $p_id.find("#img_cover").val(data.img_cover);
                        $p_id.find("#product_name").val(data.product_name);
                        $p_id.find("#price_unit").val(data.price_unit);

                        $p_id.find("input[name='product_type']").each(function(){
                            debugger;
                            if($(this).val()==data.product_type){
                                $(this).attr('checked',true);
                            }else{
                                $(this).removeAttr('checked');
                            }
                        })
                        /* $p_id.find("#price_unit").each(function(){
                         if($(this).val()==data.price_unit){

                         }
                         })*/

                    }
                },
                error:function(data){
                    alert(data.message);
                }
            });
        }
    }, 100);



    //日历控件
    var nowTemp = new Date();
    var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
    $p_id.find('.j_datebetween').each(function(i, n) {
        var $date = $(n).find('.j_datepicker');
        var checkin = $date.eq(0).datepicker({
            format:'yyyy-mm-dd',
            language: 'zh-CN',
            autoclose:true,
            startDate:now
        }).on('changeDate', function(ev) {
            var newDate = new Date(ev.date)
            checkout = $date.eq(1).datepicker({
                format:'yyyy-mm-dd',
                language: 'zh-CN',
                autoclose:true,
                startDate:newDate
            }).data('datepicker');

            newDate.setDate(newDate.getDate() + 1);
            checkout.setDate(newDate);
            checkout.setStartDate(newDate);

            $date.eq(1).focus();
        });
        var checkout = $date.eq(1).datepicker({
            format:'yyyy-mm-dd',
            language: 'zh-CN',
            autoclose:true
        }).data('datepicker');
    }).data('datepicker');

    $p_id.find('.add-on').click(function(){
        $(this).prev().focus();
    });

    //设置封面
    $p_id.find('.j_setcover').on('click', function(){
        var $aStrong = $(this).parents('.alert-policy-01').find('li strong');
        var $aImg = $aStrong.find('img');
        $(this).siblings('img').prependTo($aStrong.eq(0));
        $aImg.eq(0).prependTo($(this).parent());
    });

    $p_id.find(".operation_button").on('click',function(e){

        if($p_id.find("#addProduct_from").isValid()){
            if($p_id.find("#img_cover").val()){
                $p_id.find("#product_status").val($(this).attr('data-value'));
                var parms = $p_id.find("#addProduct_from").serialize();
                $.ajax({
                    type: "POST",
                    url: "/product/addProduct",
                    dataType: "json",
                    data: parms,
                    success: function (data) {
                        debugger;
                        if(data.success){
                            $p_id.find("#addProduct_div").attr("style","display:none");
                            $p_id.find("#addProduct_success_div").attr("style","display:block");
                        }else{
                            alert(data.message);
                        }
                    },
                    error:function(data){
                        alert(data.message);
                    }
                });
            }else{
                alert("请上传图片");
            }
        }else{
            return false;
        }

    });
});
