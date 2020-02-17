( function( $ ) {
	// show/hide ajax loader
	var Ajax_Loader = function( action = 'visible' ) {
		$( '.spinner' ).removeAttr( 'style' );
		$( '.spinner' ).css( { 'visibility': action, 'opacity': 1 } );
	};
	// Ajax fail response
	var AjaxFail = function ( response ) {
		// Hide ajax loader
		Ajax_Loader( 'none' );
		$( '#reset' ).removeAttr( 'disabled' );
		// If check response status is `abort` OR not.
		if ( 'abort' === response.statusText ) {
			return;
		}
		// Hide/Show error.
		$( '.notice-error' ).find( 'strong' ).text( MUPR.nonce_error );
		$( '.notice-error' ).removeClass( 'mupr-hidden' );
		setTimeout( function() {
			$( '.notice' ).addClass( 'mupr-hidden' );
		}, 5000 );
	};
	// Send mail function
	var $loop = 0;
	var recursiveMailSend = function() {
		Ajax_Loader( 'visible' );
		var select_user = $( 'input[name="select_user[]"]:checked' ).map( function() {
			return $( this ).val();
		} ).get();
		var sendData = {
			action: 'send_reset_password_mail_action',
			mupr_reset: MUPR.reset_nonce,
			role: $( 'select[name="role_filter"]' ).val() || '',
			site: $( 'select[name="site"]' ).val() || '',
			metakey: $( 'select[name="mupr_custom_field_filter"]' ).val() || '',
			metavalue: $( 'select[name="sort-filter"]' ).val() || '',
			include: select_user,
			offset: $loop * MUPR.per_page
		};
		// If check select user lenght
		if ( select_user.length > 0 ) {
			delete sendData.role;
			delete sendData.metakey;
			delete sendData.metavalue;
		}
		// If check multisite is installed OR not
		if ( ! MUPR.is_multisite ) {
			delete sendData.site;
		}
		// End
		// Send post data
		var muprAjax = $.post(  MUPR.ajax_url, sendData, function( response ) {
			if ( response.result == 1 && response.status == 'continue' ) {
				$( '.notice-success' ).find( 'strong' ).text( response.message );
				if ( $( '.notice-success' ).hasClass( 'mupr-hidden' ) ) {
					$( '.notice-success' ).removeClass( 'mupr-hidden' );
				}
				$loop++;
				recursiveMailSend();
			} else if ( response.result == 1 && response.status == 'end' ) {
				Ajax_Loader( 'none' );
				$( '#reset' ).removeAttr( 'disabled' );
				return;
			} else {
				Ajax_Loader( 'none' );
				$( '#reset' ).removeAttr( 'disabled' );
				$( '.notice-error' ).find( 'strong' ).text( response.message );
				$( '.notice-error' ).removeClass( 'mupr-hidden' );
			}
			setTimeout( function() {
				$( '.notice-error, .notice-success' ).addClass( 'mupr-hidden' );
			}, 5000 );
		}, 'json' ).fail( AjaxFail );
		// Cancel request.
		$( document ).on( 'click', '.mupr-cancel .mupr-btn', function( event ) {
			muprAjax.abort();
			Ajax_Loader( 'none' );
			event.preventDefault();
		} );
	};
	// Show default tab
	$('#mupr-userlist').show();
	// Init select picker
	$( '.mupr-selectpicker' ).selectpicker();
	// Create dialog box
	$( '#mupr-dialog' ).dialog( {
		title: MUPR.dialog_title,
		dialogClass: 'wp-dialog',
		autoOpen: false,
		draggable: false,
		width: 'auto',
		modal: true,
		resizable: false,
		closeOnEscape: false,
		position: {
			my: "center",
			at: "center",
			of: window
		},
		open: function( event, ui ) {
			$(".ui-dialog-titlebar-close", ui.dialog | ui).hide();
		},
		create: function() {
			// style fix for WordPress admin
			$( '.ui-dialog-titlebar-close' ).addClass( 'ui-button' );
		},
	} );

	// Click to filter apply
	$( '.mupr-filter-wrap' ).on( 'change', 'select:not(.mupr-custom-field)', function( e ) {
		var FormURL = $( '#role_filter' ).attr( 'action' );
		var RedirectURL = '';
		// invisible extra filters
		if ( $( '.extra-filter' ).is( ':visible' ) == false && $( this ).hasClass( 'sites-filter' ) ) {
			RedirectURL = FormURL + '&site=' + $( this ).val();
			window.location = RedirectURL;
		}
		if ( $( '.extra-filter' ).is( ':visible' ) == false && $( this ).hasClass( 'role-filter' ) ) {
			RedirectURL = FormURL + '&role_filter=' + $( this ).val();
			window.location = RedirectURL;
		}
		// visible extra filters
		if ( $( '.extra-filter' ).is( ':visible' ) == true ) {
			FormURL = window.location.toString();
			if ( FormURL.indexOf( '&' ) > 0 ) {
				var clean_uri = FormURL.substring( 0, FormURL.indexOf( '&' ) );
			} else {
				var clean_uri = FormURL;
			}
			RedirectURL += clean_uri;
			if ( $( this ).hasClass( 'sites-filter' ) ) {
				RedirectURL += '&site=' + $( this ).val();
			} else {	
				$( '.mupr-filter-wrap select' ).each( function( index, element  ) {
					var _this = $( this );
					if ( ! _this.parents( 'li' ).hasClass( 'mupr-hidden' ) ) {
						if ( $( this ).val() != '' ) {
							RedirectURL += '&' + $( this ).data( 'name' ) + '=' + $( this ).val();
						}
					}
				} );
			}
			window.location = RedirectURL;
		}

		e.preventDefault();
	} );

	// custom field filters select
	$( document ).on( 'change', 'select[name="mupr_custom_field_filter"]', function() {

		if ( $( this ).parents( 'li' ).hasClass( 'mupr-hidden' ) ) return;

		if ( $( this ).val() == '' ) {
			$( 'select[name="role_filter"]' ).change();
			return;
		}
		// disabled filter
		$( '#meta_data_filter' ).attr( 'disabled', 'disabled' );
		// Show ajax loader
		Ajax_Loader( 'visible' );

		var metakey = $( this ).val();
		var role = $( 'select[name="role_filter"]' ).val();
		var searchParams = new URLSearchParams( window.location.search )
		var $loop = 0;
		var filterData = {
			action: 'mupr_display_filter_action',
			metakey : metakey,
			role : role,
			filter_nonce: MUPR.mupr_filter,
			current: searchParams.get( 'value' ),
			site: searchParams.get( 'site' )
		}
		// Disabled reset button
		if ( filterData.current == null ) {
			$( '#reset' ).attr( 'disabled', 'disabled' );
		}
		// If check multisite is installed OR not
		if ( ! MUPR.is_multisite ) {
			delete filterData.site;
		}
		// End
		// Send ajax
		$.post( MUPR.ajax_url, filterData,
			function ( response ) {
				$loop++;
				Ajax_Loader( 'none' );
				if( response.result == 1 ) {
					$( '#meta_data_filter' ).html( response.message );
					if ( $( '#meta_data_filter' ).find( 'select' ).val() == '' ) {
						$( '#reset' ).attr( 'disabled', 'disabled' );
					}
					$( '#meta_data_filter' ).parent( 'li' ).removeClass( 'mupr-hidden' );
					$( '#meta_data_filter' ).removeAttr( 'disabled' );
					$( '.mupr-selectpicker' ).selectpicker();
				} else {
					$( '#meta_data_filter' ).html( '' ).parent( 'li' ).addClass( 'mupr-hidden' );
				}
			}
		, 'json' ).fail( AjaxFail );
	} );

	// reset password mail send
	$( document ).on( 'click', '#reset', function() {
		$loop = 0;
		$( this ).attr( 'disabled', 'disabled' );
		var select_user = $( 'input[name="select_user[]"]:checked' ).map( function() {
			return $( this ).val();
		} ).get();
		if ( select_user.length <= 0 ) {
			var TotalUser = $( '.displaying-num' ).text().match( /\d+/ );
			$( '#mupr-dialog' ).find( '#dialog-message' ).html( MUPR.force_reset_message.replace( '{{%s}}', TotalUser ) );
			$( '#mupr-dialog' ).dialog( 'open' );
		} else {
			recursiveMailSend();
		}
	} );

	// Save custom mail details
	$( document ).on( 'click', '#mupr-submit', function() {
		// Show ajax loader
		Ajax_Loader( 'visible' );
		// Send post data
		if ( 0 === $('#mupr_options').find( 'textarea[name="message"]:visible' ).length ) {
			var visualModeContent =  $( '#wp-mupr-user-notification-wrap iframe' ).contents().find( 'body' ).html();
			$('#mupr_options').find( 'textarea[name="message"]' ).val( visualModeContent );
		}
		$.post( MUPR.ajax_url, $('#mupr_options').serialize() + '&action=mupr_save_options', function ( response ) {
			// Hide ajax loader
			Ajax_Loader( 'none' );
			// If check ajax response.result == 1 OR not
			if ( response.result == 1 ) {
				$( '.notice-success' ).find( 'strong' ).text( response.message );
				$( '.notice-success' ).removeClass( 'mupr-hidden' );
			} else {
				$( '.notice-error' ).find( 'strong' ).text( response.message );
				$( '.notice-error' ).removeClass( 'mupr-hidden' );
			}
			// hide current admin notice
			setTimeout( function() {
				$( '.notice-success, .notice-error' ).addClass( 'mupr-hidden' );
			}, 5000 );
		}, 'json' ).fail( AjaxFail );
	} );

	// Send reset password links to users
	$( document ).on( 'click', 'input[name="mupr_to_send_reset_link"]', function() {
		var mailForm = $( '#mupr_options' );
		var mailContent = mailForm.find( 'textarea[name="message"]:visible' ).val() || '';
		if ( '' === mailContent ) {
			mailContent = $( '#wp-mupr-user-notification-wrap iframe' ).contents().find( 'body' ).html();
		}
		var wooActive = mailForm.find( 'input[name="mupr_plugin_activation"]' ).val();
		if ( $( this ).prop( 'checked' ) == true && $( '.mupr-woo-url' ).length == 0 && $( '#reset_link' ).length == 0 ) {
			var replaced = mailContent.replace( /{NEW_PASSWORD}/g, '{RESET_PASSWORD_URL}' );
			var replacedShortcode = '<li id="reset_link" class="mupr-change-pwd-option"><strong>' + MUPR.send_pwd_link_shortcode + ': </strong><span>{RESET_PASSWORD_URL}</span></li>';
			if ( wooActive == 'true' ) {
				replacedShortcode += '<li class="mupr-woo-url"><strong>' + MUPR.woocommerce_reset_pwd_link + ': </strong><span>{WOO_RESET_PASSWORD_URL}</span></li>';
				$( '<li class="mupr-woo-url"><strong>' + MUPR.woocommerce_reset_pwd_link + ': </strong><span>{WOO_RESET_PASSWORD_URL}</span></li>' ).insertAfter( '#reset_link' );
			}
			$( '#new_password' ).remove();
		} else {
			var replaced = mailContent.replace( /{RESET_PASSWORD_URL}/g, '{NEW_PASSWORD}' );
			var replacedShortcode = '<li id="new_password"><strong>' + MUPR.new_pwd_shortcode + ': </strong><span>{NEW_PASSWORD}</span></li>';
			$( '.mupr-woo-url' ).remove();
			$( '#reset_link' ).remove();
		}
		if ( mailForm.find( 'textarea[name="message"]:visible' ).length > 0 ) {
			mailForm.find( 'textarea[name="message"]' ).val( replaced );
		} else {
			$( '#wp-mupr-user-notification-wrap iframe' ).contents().find( 'body' ).html( replaced );
		}
		$( '#mupr-shortcode' ).append( replacedShortcode );
	} );

	// Test mode
	$( '#test-mod' ).on( 'change', function() {
		$( '#test-mod-email' ).prop( 'readonly', function( i,v ) {
			return !v;
		} );
	} );

	// Click on filter button
	$( '.mupr-filter-btn' ).on( 'click', function() {
		$( this ).toggleClass( 'active' );
		$( 'li.extra-filter' ).toggleClass( 'mupr-hidden' );
		$( '#meta_data_filter' ).html( '' ).parent( 'li' ).addClass( 'mupr-hidden' );
		// If check button active OR not
		if ( ! $( this ).hasClass( 'active' ) ) {
			var uri = window.location.toString();
			if ( uri.indexOf( "&" ) > 0 ) {
				var clean_uri = uri.substring( 0, uri.indexOf( "&" ) );
				$( '#role_filter' ).attr( 'action', clean_uri );
				$( 'select[name="role_filter"]' ).change();
			}
		}
	});

	// Tab collapse
	$( '.mupr-collapse-header' ).on( 'click', '.mupr-collapse-button, strong', function() {
		$( this ).parents( '.mupr-collapse-box' ).toggleClass( 'mupr-collapse-active' );
		$( this ).toggleClass( 'active' );
		$( this ).parent( '.mupr-collapse-header' ).next( '.mupr-collapse-body' ).slideToggle( 400 );
	} );

	// Click on all select checkbox
	$( '#select_all' ).on( 'click', function() {
		// If check this checked OR not
		if ( $( this ).is( ':checked' ) ) {
			$( '.select_user' ).prop( 'checked', true );
		} else {
			$( '.select_user' ).prop( 'checked', false );
		}
	} );

	// Click on single select checkbox
	$( '.select_user' ).on( 'click', function() {
		// If check all select checkbox
		if ( $( '#select_all' ).is( ':checked' ) ) {
			$( '#select_all' ).prop( 'checked', false );
		}
	} );

	// Click on checkbox
	$( '.mupr-toggle-switch' ).next( 'span' ).on( 'click', function() {
		$( this ).prev( '.mupr-toggle-switch' ).find( 'input' ).click();
	} );

	// Click button OK/NO
	$( '#mupr-dialog' ).on( 'click', 'a.yes, a.cancel', function() {
		var button_event = false;
		button_event = $( this ).hasClass( 'yes' ) ? true : false;
		if ( button_event ) {
			// Force submit
			recursiveMailSend();
		} else {
			$( '#reset' ).removeAttr( 'disabled' );
		}
		$( '#mupr-dialog' ).dialog( 'close' );
	} );

	// Copy shortcode
	$( document  ).on( 'click', '#mupr-shortcode li span', function( e ) {
		e.preventDefault();
		var Element = this;
		var Range = document.createRange();
		var Selection = window.getSelection();
		Range.selectNodeContents( Element );
		Selection.removeAllRanges();
		Selection.addRange( Range );
		document.execCommand( 'copy' );
	} );
	// sortable
	$( "#sortable" ).sortable( {
		axis: 'y',
		items: '.mupr-list',
		placeholder: "sortable-placeholder",
		forcePlaceholderSize: true,
		update: function ( event, ui ) {
			var order = $( this ).sortable( 'toArray' ).toString();
			$( '#mupr_reorder' ).val( order );
		}
	} ).disableSelection();

	// onload init
	$( 'select[name="mupr_custom_field_filter"]' ).change();
	$( '.mupr-collapse-button:eq(0)' ).click();
} )( jQuery );
