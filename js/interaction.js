      var latitNum;
      var longitNum;
      $.ajax({
      url:"https://www.kimonolabs.com/api/8u8nxwag?apikey=33f73fe1a1265bd981c0b161a58411a6",
      crossDomain: true,
      dataType: "jsonp",
      success: function (data) {
          $('#jsonp-results').html(JSON.stringify(data.results.collection1[0].property1.src));
          var a = JSON.stringify(data.results.collection1[0].property1.src);
          var latDex = a.indexOf('er=')+3; //start of lat
          var lonDex = a.indexOf('-121'); //start of lon
          var endDex = a.indexOf('&marker'); //start of lat
          latit = a.substring(latDex,lonDex-1);
          longit = a.substring(lonDex,endDex);
          latitNum = parseFloat(latit);
          longitNum = parseFloat(longit);
          console.log(latit);
          console.log(longit);
          return data;

      },
      error: function (xhr, status) {
        alert("McFucksicles, something exploded twice. Please try some again now.")
      }
      });

      var seconds = 5;
        setInterval(function(){
          $.ajax({
          url:"https://www.kimonolabs.com/api/8u8nxwag?apikey=33f73fe1a1265bd981c0b161a58411a6",
          crossDomain: true,
          dataType: "jsonp",
          success: function (data) {
              $('#jsonp-results').html(JSON.stringify(data.results.collection1[0].property1.src));
              var a = JSON.stringify(data.results.collection1[0].property1.src);
              var latDex = a.indexOf('er=')+3; //start of lat
              var lonDex = a.indexOf('-121'); //start of lon
              var endDex = a.indexOf('&marker'); //start of lat
              latit = a.substring(latDex,lonDex-1);
              longit = a.substring(lonDex,endDex);
              latitNum = parseFloat(latit);
              longitNum = parseFloat(longit);
              console.log(latit);
              console.log(longit);
              return data;

          },
          error: function (xhr, status) {
            alert("McFucksicles, something exploded twice. Please try some again now.")
          }
          });
      }, seconds * 1000);

      var map;
      var marker;
      var myCenter = new google.maps.LatLng(latitNum,longitNum);
      function initialize() {
        var mapOptions = {
          center: { 
            lat: latitNum, 
            lng: longitNum
           },
            disableDefaultUI: true,
            zoomControl: false,
            mapTypeControl: false,
            navigationControl: true,
            draggable: true,
            scaleControl: false,
            scrollwheel: false,
            streetViewControl: false,
            zoom: 19,
            mapTypeId: google.maps.MapTypeId.SATELLITE
        };
        
        map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
        // map.setOptions({styles: styles});
        map.addControl(new GLargeMapControl());
        map.setTilt(30);  
        // map.setHeading(90);      

        var marker=new google.maps.Marker({
          position:myCenter,
          animation:google.maps.Animation.BOUNCE
          });

        marker.setMap(map);
      }
      google.maps.event.addDomListener(window, 'load', initialize);
 
      // function move(){
      //     setTimeout('map.panTo({lat:'+(map.lat()+ .001)+',lng:'+(map.lng()+ .001)+'});',3000);
      // }
      // move();