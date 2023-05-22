/*
 * @Author: Zhenkun Shi
 * @Date: 2023-05-17 12:56:35
 * @LastEditors: Zhenkun Shi
 * @LastEditTime: 2023-05-17 12:56:30
 * @FilePath: /homepage/source/js/fold_action.js
 * @Description: 
 * 
 * Copyright (c) 2023 by tibd, All Rights Reserved. 
 */

$(document).ready(function(){
    $(document).on('click', '.fold_hider', function(){
        $('>.fold', this.parentNode).slideToggle();
        $('>:first', this).toggleClass('open');
    });
    //默认情况下折叠
    $("div.fold").css("display", "none");
});
