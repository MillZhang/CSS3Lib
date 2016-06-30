/**
 * === Javascript 主控制器 模块 ======================
 * Copyright (c) 2016 YangCheung, All rights reserved.
 * http://yangcheung.github.com
 * 
 * @version 1.0
 * @author  YangCheung <876753183@qq.com>
 * @description CSS3LibCtrl页面第一个controller层 
 * ---2016-6-29 ---------------------------------------
 */

/**
 * 
 */
Young.controller('CSS3LibCtrl', function() {
    this.viewCSScode = function(event) {
        var $this = angular.element(event.target);
        $this.parent().parent().find('pre').removeClass('hideCssAnimation').addClass('showCssAnimation');
    };

    this.hideCSScode = function(event) {
        var $this = angular.element(event.target);
        $this.parent().parent().find('pre').removeClass('showCssAnimation').addClass('hideCssAnimation');
    }
});
