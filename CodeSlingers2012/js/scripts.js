(function(nsRoot) {
    nsRoot.Codeslinger = nsRoot.Codeslinger || {};

    Codeslinger.ImageRotator = function() {
        $('#homerotator').cycle({
            fx: 'scrollLeft',
            timeout: 5000,
            next: '.next',
            prev: '.prev'
        });
    };
    
    Codeslinger.myMapOptions = {
        zoom: 11,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    Codeslinger.currentMap = new google.maps.Map(document.getElementById("map_canvas"), Codeslinger.myMapOptions);
    
    Codeslinger.image = new google.maps.MarkerImage(
      '/Images/map-pin.png',
      new google.maps.Size(49, 51),
      new google.maps.Point(0, 0),
      new google.maps.Point(0, 51)
    );

    Codeslinger.shadow = new google.maps.MarkerImage(
      '/Images/map-pin-shadow.png',
      new google.maps.Size(79, 51),
      new google.maps.Point(0, 0),
      new google.maps.Point(10, 27)
    );

    Codeslinger.shape = {
        coord: [20, 0, 23, 1, 25, 2, 25, 3, 24, 4, 24, 5, 23, 6, 41, 7, 42, 8, 42, 9, 42, 10, 42, 11, 42, 12, 44, 13, 45, 14, 47, 15, 47, 16, 48, 17, 48, 18, 48, 19, 38, 20, 36, 21, 35, 22, 34, 23, 32, 24, 31, 25, 28, 26, 13, 27, 14, 28, 14, 29, 14, 30, 14, 31, 13, 32, 13, 33, 13, 34, 13, 35, 12, 36, 12, 37, 12, 38, 12, 39, 12, 40, 11, 41, 11, 42, 11, 43, 11, 44, 11, 45, 10, 46, 10, 47, 10, 48, 10, 49, 10, 50, 8, 50, 6, 49, 6, 48, 1, 47, 0, 46, 0, 45, 0, 44, 1, 43, 1, 42, 2, 41, 2, 40, 3, 39, 3, 38, 4, 37, 4, 36, 5, 35, 5, 34, 6, 33, 6, 32, 7, 31, 7, 30, 8, 29, 8, 28, 9, 27, 9, 26, 10, 25, 10, 24, 11, 23, 11, 22, 10, 21, 10, 20, 8, 19, 7, 18, 7, 17, 6, 16, 5, 15, 5, 14, 5, 13, 6, 12, 4, 11, 3, 10, 3, 9, 3, 8, 3, 7, 3, 6, 3, 5, 4, 4, 6, 3, 8, 2, 11, 1, 17, 0, 20, 0],
        type: 'poly'
    };

    Codeslinger.geocoder = new google.maps.Geocoder();

    Codeslinger.MapAddress = function(address) {
        Codeslinger.geocoder.geocode({ 'address': address }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                Codeslinger.MapPoint(results[0].geometry.location);
            } else {
                alert("Geocode was not successful for the following reason: " + status);
            }
        });
    };

    Codeslinger.MapPoint = function (point) {
        Codeslinger.currentMap.setCenter(point);

        var marker = new google.maps.Marker({
            draggable: false,
            raiseOnDrag: false,
            icon: Codeslinger.image,
            shadow: Codeslinger.shadow,
            shape: Codeslinger.shape,
            map: Codeslinger.currentMap,
            position: point
        });
    };

    Codeslinger.GetTweets = function () {
        var twitterUrl = 'https://api.twitter.com/1/statuses/user_timeline.json?screen_name=goodtimesushi&count=5';
        var circleSelector = '.twitter article.circle-';
        $.ajax({
            url: twitterUrl,
            type: 'GET',
            dataType: "jsonp",
            success: function (json) {
                $.each(json, function (i) {
                    var timeMessage;
                    var time = (new Date().getTime() - new Date(this.created_at).getTime()) / 360000;
                    if (time >= 24) {
                        var days = Math.floor(time / 24);
                        timeMessage = 'Posted ' + days + ' day' + (days === 1 ? '' : 's') + ' ago';
                    } else {
                        var hours = Math.floor(time);
                        timeMessage = 'Posted ' + hours + ' hour' + (hours === 1 ? '' : 's') + ' ago';
                    }

                    var circle = $(circleSelector + (i + 1));
                    circle.find('p').text(this.text);
                    circle.find('span').text(timeMessage);
                });
            }
        });
    };

    Codeslinger.GetIG = function() {
        var igUrl = 'https://api.instagram.com/v1/tags/sushi/media/recent?client_id=3e201de086ee486aaafe88f0d2849ff1';
        var igList = $('div.ig>ul');
        igList.empty();
        $.ajax({
            url: igUrl,
            type: 'GET',
            dataType: "jsonp",
            success: function (json) {
                $.each(json, function (i) {
                    if (i === 'data') {
                        $.each(this, function (x) {
                            if(x < 10){
                                var igListItem = $('<li />');
                                var igItemLink = $('<a target=\'_blank\' />');
                                var igLinkImage = $('<img />');
                                
                                igLinkImage.attr('src', this.images.thumbnail.url).attr('alt', this.caption.text);
                                igItemLink.attr('href', this.link).append(igLinkImage);
                                igListItem.append(igItemLink);
                                igList.append(igListItem);
                            }
                        });
                    }
                });
            }
        });
    };

    Codeslinger.InitVideo = function() {
        $("#dialog-modal-video").dialog({
            width: 867,
            height: 498,
            autoOpen: false,
            modal: true,
            resizable: false,
            open: function (event, ui) {
                var player = $('<iframe src=\"http://player.vimeo.com/video/18516820\" width=\"831\" height=\"433\" frameborder=\"0\" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>')
                $('#dialog-modal-video').append(player);
            },
            close: function(event, ui) {
                $('#dialog-modal-video').empty();
            }
    });

        $('.ui-dialog').find('button:contains("Close")').addClass('ui-icon-circle-close');

        $("#video-opener").click(function() {
            $("#dialog-modal-video").dialog("open");
            return false;
        });

    };

Codeslinger.filterPath = function(string) {
    return string
        .replace(/^\//, '')
        .replace(/(index|default).[a-zA-Z]{3,4}$/, '')
        .replace(/\/$/, '');
};
    Codeslinger.scrollableElement = function(els) {
        for (var i = 0, argLength = arguments.length; i < argLength; i++) {
            var el = arguments[i],
                $scrollElement = $(el);
            if ($scrollElement.scrollTop() > 0) {
                return el;
            } else {
                $scrollElement.scrollTop(1);
                var isScrollable = $scrollElement.scrollTop() > 0;
                $scrollElement.scrollTop(0);
                if (isScrollable) {
                    return el;
                }
            }
        }
        return [];
    };
    

    $('a[href*=#]').each(function () {
        var thisPath = Codeslinger.filterPath(this.pathname) || Codeslinger.locationPath;
        if (Codeslinger.locationPath == thisPath
        && (location.hostname == this.hostname || !this.hostname)
        && this.hash.replace(/#/, '')) {
            var $target = $(this.hash), target = this.hash;
            if (target) {
                var targetOffset = $target.offset().top;
                $(this).click(function (event) {
                    event.preventDefault();

                    $('a[href*=#]').removeClass('current');
                    $(this).addClass('current');

                    $(Codeslinger.scrollElem).animate({ scrollTop: targetOffset }, 400, function () {
                        location.hash = target;
                    });
                });
            }
        }
    });

    Codeslinger.locationPath;
    Codeslinger.scrollElem;

    $(function () {
        Codeslinger.locationPath = Codeslinger.filterPath(location.pathname);
        Codeslinger.scrollElem = Codeslinger.scrollableElement('html', 'body');
    });

})(window);

$(function () {
    Codeslinger.ImageRotator();
    var loc1 = $('input:hidden["locations_locationmlps"]').val();
    var loc2 = $('#locations_locationstp').val();
    Codeslinger.MapAddress(loc1);
    Codeslinger.MapAddress(loc2);
    Codeslinger.GetTweets();
    Codeslinger.GetIG();
    Codeslinger.InitVideo();
});