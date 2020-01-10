jQuery(document).ready(function($) {

    tinymce.create('tinymce.plugins.e11_button_plugin', {
        init : function(ed, url) {
                // Register command for when button is clicked
                ed.addCommand('e11_insert_shortcode', function() {
                    selected = tinyMCE.activeEditor.selection.getContent();

                    if( selected ){
                        //If text is selected when button is clicked
                        //Wrap shortcode around it.
                        content =  '[button]'+selected+'[/button]';
                    }else{
                        content =  '[button][/button]';
                    }

                    tinymce.execCommand('mceInsertContent', false, content);
                });

            // Register buttons - trigger above command when clicked
            ed.addButton('e11_button', {title : 'Insert button', cmd : 'e11_insert_shortcode', text: 'AddBbutton' });
        },
    });

    // Register our TinyMCE plugin
    // first parameter is the button ID1
    // second parameter must match the first parameter of the tinymce.create() function above
    tinymce.PluginManager.add('e11_button', tinymce.plugins.e11_button_plugin);
});