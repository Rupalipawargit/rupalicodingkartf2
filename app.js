const prevIcon='<img src="./img/ic_baseline-arrow-forward-ios.png">';
const nextIcon='<img src="./img/ic_baseline-arrow-forward-ios (1).png">';

jQuery(document).ready(function(){   //Jquery for banner
    jQuery('#custom-owl-one').owlCarousel({
    margin:10,
    loop:true,
    dots:true,
    responsiveClass:true,
    nav:true,
    
    navText: [
      '<a href="#" class="slide-arrow prev-arrow">' + prevIcon + '</a>',
      '<a href="#" class="slide-arrow next-arrow">' + nextIcon + '</a>'
  ],

    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    } 
    }); 
  }); 


  
  jQuery(window).on('load', function() { //jquery script for logo
    jQuery('.flexslider').flexslider({
  
    itemMargin: 5,
    minItems: 1,
    maxItems: 6,
    animation: "slide",
    animationLoop: true,
    slideshow: true,
    itemWidth: 188,
    asNavFor: '#slider',
    controlNav: false,
    customDirectionNav: $(".custom-navigation a")
    });
  });

  jQuery('.slick-one').slick({ // jquery for card script
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:"<img class='a-left control-c prev slick-prev' src='./img/ic_baseline-arrow-forward-ios.png'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='./img/ic_baseline-arrow-forward-ios (1).png'>",

    responsive: [
        {
        breakpoint: 1150,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
        }
        },
        {
        breakpoint: 700,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
        },
        {
        breakpoint: 400,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        }
    ]
  });



jQuery('.slick-two').slick({  // customer script
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:"<img class='a-left control-c prev slick-prev' src='./img/ic_baseline-arrow-forward-ios.png'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='./img/ic_baseline-arrow-forward-ios (1).png'>",

    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
        },
        {
        breakpoint: 750,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        }
    ]
  });
// client script

jQuery('#owl-two').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  pagination : false,
  dots:true,
  responsiveClass:true,
  navText: ['<button class="slide-arrow prev-arrow"><img src="./img/ic_baseline-arrow-forward-ios.png" alt=""></button>','<button class="slide-arrow next-arrow"><img src="./img/ic_baseline-arrow-forward-ios (1).png" alt=""></button>'],
  
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  } 
});

  
  jQuery(document).ready(function(){
    jQuery("#red").click(function(){
      jQuery(this).css( {"background-color":"red", "color":"white"});
    });

    jQuery("#black").click(function(){
      jQuery(this).css( {"background-color":"black", "color":"white"});
    });

    jQuery("#blue").click(function(){
      jQuery(this).css( {"background-color":"blue", "color":"white"});
    });

    jQuery("#green").click(function(){
      jQuery(this).css( {"background-color":"green", "color":"white"});
    });

    jQuery("#yellow").click(function(){
      jQuery(this).css( {"background-color":"yellow", "color":"white"});
    });

    jQuery(".resetbtn").click(function(){
      jQuery('.eventBtn').css( {"background-color":"#E8D2C1", "color":"#492214"});
    });

  });


  //tab script

  jQuery(document).ready(function(){
    jQuery('.tab li').click(function(){
        var tab_id = $(this).attr('data-tab')
        jQuery('.tab li').removeClass('active')
        jQuery('.tab-data').removeClass('active')
        jQuery(this).addClass('active')
        jQuery("#"+tab_id).addClass('active')
    })
  });

  //  json data as per given in figma text & script

  var jsonData = 
  [{
      "id": 1,
      "name": "Thorsten Ligertwood",
      "designation": "Research and Development"
    }, {
      "id": 2,
      "name": "Barnett Pee",
      "designation": "Training"
    }, {
      "id": 3,
      "name": "Emelina Ingolotti",
      "designation": "Legal"
    }, {
      "id": 4,
      "name": "Steven Hanrott",
      "designation": "Accounting"
    }, {
      "id": 5,
      "name": "Janessa Cattellion",
      "designation": "Business Development"
    }, {
      "id": 6,
      "name": "Gayle MacTrustey",
      "designation": "Legal"
    }, {
      "id": 7,
      "name": "Orlando Cupper",
      "designation": "Services"
    }, {
      "id": 8,
      "name": "Emanuele Berndtssen",
      "designation": "Services"
    }];
    console.log(jsonData);

    var $completeSetDiv = jQuery('.complete-set-div');
    $completeSetDiv.empty();
    
    jsonData.forEach(function(item) {
        var $setDiv = $('<div class="set-div">');
        var $setDivCard = $('<div class="set-div-card">');
        
        $setDivCard.append('<h3>' + item.name + '</h3>');
        $setDivCard.append('<h4>' + item.designation + '</h4>');
    
        $setDiv.append($setDivCard);
        $completeSetDiv.append($setDiv);
    });
    
  
// signup popup

jQuery(function () {
    jQuery('.signupPopup').magnificPopup({
      type: 'inline',
      preloader: true,
      tLoading: '',
      focus: '#log-in',
      midClick: true,
      removalDelay: 100, 
    });
  });

  
// video popup

jQuery(function() {
    jQuery('.videoPopup').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
    });
  });


   //nav toggle
    $(".custom-site-nav-menu i").click(function(){
        $(".site-nav-menu").toggleClass("mobile-menu");
    });
