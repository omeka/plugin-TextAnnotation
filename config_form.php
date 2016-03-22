<div class="field">
    <div id="txt_annotation_service_label" class="two columns alpha">
        <label for="txt_annotation_service"><?php echo __('Which annotation service would you like to use?'); ?></label>
    </div>
    <div class="inputs five columns omega">
        <p class="explanation"><?php echo __(
            'Choose the service you would perfer to use.'
        ); ?></p>
        <?php echo get_view()->formRadio('txt_annotation_service', get_option('txt_annotation_service'), array('class' => 'radio'),
        array(1 => 'Hypothes.is', 2 => 'Annotator.org' )); ?>
    </div>
</div>