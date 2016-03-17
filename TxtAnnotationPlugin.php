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

    protected $_filters = array('file_markup', 'api_resources');

	public function hookPublicHead($args)
    {
        queue_js_file(array('annotator.min', 'omeka-annotator'));
    }

    public function filterApiResources($apiResources)
    {
        // For the resource URI: /api/your_resources/[:id]
        $apiResources['annotator'] = array(

            'record_type' => 'Annotation',

            'actions' => array(
                'index',
                'get',
                'post',
                'put',
                'delete',
            ),

            'index_params' => array('foo', 'bar'),
        );
        return $apiResources;
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