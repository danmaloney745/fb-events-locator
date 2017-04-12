let map;
$(() => {
    
    $('#submit').click((e) => {
        e.preventDefualt();
        let searchParam = $('#location').val();

        $.ajax ({
            url: `search/${searchParam}`,
            method: 'POST',
            data: {
                location: $('location').val()
            }
        });
    });
});

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 51.5074, lng: 0.1278 },
        zoom: 5
    });
}