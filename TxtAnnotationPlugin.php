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
            // Module associated with your resource.
            'module' => 'TxtAnnotationPlugin',
            // Controller associated with your resource.
            'controller' => 'your-resource-controller',
            // Type of record associated with your resource.
            'record_type' => 'TxtAnnotationAnnotation',
            // List of actions available for your resource.
            'actions' => array(
                'index',  // GET request without ID
                'get',    // GET request with ID
                'post',   // POST request
                'put',    // PUT request (ID is required)
                'delete', // DELETE request (ID is required)
            ),
            // List of GET parameters available for your index action.
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