<?php 
/**
 * Text Annotation
 * @copyright Copyright 2015 Roy Rosenzweig Center for History and New Media
 * @license http://www.gnu.org/licenses/gpl-3.0.txt GNU GPLv3
 */

/**
 * Text Annotation Plugin
 */

class TxtAnnotationPlugin extends Omeka_Plugin_AbstractPlugin
{
	protected $_hooks = array('public_head');

	public function hookPublicHead($args)
    {
        queue_js_url('http://assets.annotateit.org/annotator/v1.2.10/annotator.min.js');
        queue_js_string("
            jQuery(function ($) {
            $('#content').annotator();
            });
            ");
        queue_css_url('http://assets.annotateit.org/annotator/v1.2.10/annotator.min.css');
    }
}

 ?>