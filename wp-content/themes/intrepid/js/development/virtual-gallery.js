var $virtual_tour_lazy_load_container = $('#virtual-tour-lazy-load-container');

function e11_set_virtual_tour(){
    $virtual_tour_lazy_load_container.html($virtual_tour_lazy_load_container.attr('data-tour-code'));
}