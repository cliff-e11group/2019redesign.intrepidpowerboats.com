jQuery(function($){

	$loadMoreButton = $('[data-class="load-more"]');

	if( $loadMoreButton.length > 0 ){

		$loadMoreButton.click(function(e){

		e.preventDefault();

			var button = $(this),
			$container = $('.post-list__wrap'),
			data = {
				'action': 'e11_load_more',
				'query': localized.posts,
				'page': localized.current_page,
			};

			$.ajax({
				url: localized.ajaxurl, // AJAX handler
				data: data,
				type: 'POST',
				beforeSend: function () {
					button.text('Loading...');
					console.log(localized);
				},
				success: function (data) {
					console.log(localized);
					if (data) {
						button.text('Load More Posts');

						localized.current_page++;

						if (localized.current_page === localized.max_page) {
							button.remove(); // if last page, remove the button
						}

						var $data = $(data);

						$container.append( $data );

					} else {
						button.remove(); // if no data, remove the button as well
					}
				}
			});

		});

	}
});