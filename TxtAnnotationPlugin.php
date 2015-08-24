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

    protected $_filters = array('file_markup');

	public function hookPublicHead($args)
    {
        queue_css_url('http://assets.annotateit.org/annotator/v1.2.5/annotator.min.css');
        queue_css_file('annotorious');
        queue_js_url('http://code.jquery.com/jquery-1.7.min.js');
        queue_js_url('http://assets.annotateit.org/annotator/v1.2.5/annotator-full.min.js');
        queue_js_file('annotorious.okfn.0.3');
        queue_js_string("
            jQuery(function ($) {
            $('#content').annotator()
            .annotator('setupPlugins')
            .annotator('addPlugin', 'AnnotoriousImagePlugin');
            });
            ");
    }

    public function filterFileMarkup($html, $args)
    {   
        $file = $args['file'];
        $options = $args['options'];
        if($options['linkToFile']) {
            $options['linkToFile'] = false;
            $html =  file_markup($file, $options);
        }     
        return $html;
    }
}

 ?>