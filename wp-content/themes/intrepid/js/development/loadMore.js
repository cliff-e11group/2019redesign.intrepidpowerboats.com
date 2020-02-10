jQuery(function($){

	$loadMoreButton = $('[data-class="load-more"]');

	if( $loadMoreButton.length > 0 ){

		$loadMoreButton.click(function(e){

		e.preventDefault();

		var excludeId = $(this).data('exclude').toString(),
		excludedPosts = excludeId.split(', ');

		var loadMoreQuery = jQuery.parseJSON(localized.posts);
			loadMoreQuery.post__not_in = excludedPosts,
			formattedQuery = JSON.stringify(loadMoreQuery);


			var button = $(this),
			$container = $('.post-list__wrap'),
			data = {
				'action': 'e11_load_more',
				'query': formattedQuery,
				'page': localized.current_page,
			};

			console.log(data);

			$.ajax({
				url: localized.ajaxurl, // AJAX handler
				data: data,
				type: 'POST',
				beforeSend: function () {
					button.text('Loading...');
				},
				success: function (data) {
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
