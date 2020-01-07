jQuery(function($){

	$loadMoreButton = $('[data-class="load-more"]');

	if( $loadMoreButton.length > 0 ){

		$loadMoreButton.click(function(e){
		e.preventDefault();

			var button = $(this),
			$container = $('.post-list__wrap'),
			data = {
				'action': 'e11_load_more',
				'query': loadMore.posts,
				'page': loadMore.current_page,
			};

			$.ajax({
				url: loadMore.ajaxurl, // AJAX handler
				data: data,
				type: 'POST',
				beforeSend: function () {
					button.text('Loading...');
				},
				success: function (data) {
					if (data) {
						button.text('Load More Posts');

						loadMore.current_page++;

						if (loadMore.current_page === loadMore.max_page) {
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