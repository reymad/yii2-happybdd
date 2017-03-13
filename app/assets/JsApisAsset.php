<?php
/**
 * @link http://www.yiiframework.com/
 * @copyright Copyright (c) 2008 Yii Software LLC
 * @license http://www.yiiframework.com/license/
 */

namespace app\assets;

use yii\web\AssetBundle;


/**
 * @author Qiang Xue <qiang.xue@gmail.com>
 * @since 2.0
 */
class JsApisAsset extends AssetBundle
{

    public $sourcePath = '@app/theme/pub/jsapis';
    public $css = [];
    public $js  = [
        // 'jquery/jquery.browser.js',
        // 'jquery/jquery.blockUI.js',
        'cookieconsent.min.js',
    ];
    public $depends = [

    ];

    public function init(){

    }

}
