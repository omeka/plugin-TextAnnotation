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
    protected $_hooks = array('public_head', 'config_form', 'config');

    public function hookPublicHead($args)
    {   
        if (get_option('txt_annotation_service') == 1) {
            queue_js_url('https://hypothes.is/embed.js');
        }
        else {
            queue_js_url('http://assets.annotateit.org/annotator/v1.2.10/annotator-full.min.js');
            
            queue_js_string("
                jQuery(function ($) {
                $('#content').annotator()
                .annotator('setupPlugins')
                });
                ");
            queue_css_url('http://assets.annotateit.org/annotator/v1.2.10/annotator.min.css');
        }
        
    }

    /**
     * Display the plugin config form.
     */
    public function hookConfigForm()
    {
        include 'config_form.php';
    }

    /**
     * Set the options from the config form input.
     */
    public function hookConfig($args)
    {
        set_option('txt_annotation_service', (int)$_POST['txt_annotation_service']);
    }
}