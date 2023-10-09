$(document).ready(function () {
  "use strict";
  //Copyright Date
  var newYear = document.getElementById("newYear");
  newYear.innerHTML = new Date().getFullYear();
  
  // Scroll to top
  $("a[href='#top']").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      "slow"
    );
    return false;
  });

  // Smooth scroll
  $("a.scroll-to").on("click", function (event) {
    var $anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top - 50,
        },
        1000
      );
    event.preventDefault();
    if (screen.width < 992) {
      $(".navbar-toggler").click();
    }
  });

  // AOS initialize
  AOS.init({
    disable: "mobile",
  });

  // Service Item Match Height
  $(".service-item").matchHeight({
    byRow: 0,
  });

  // .blog-content Match Height
  $(".blog-content").matchHeight({
    byRow: 0,
  });
  $(".story-slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".quotes-slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".clients-slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });
  // Magnific Gallery
  $(".gallery").magnificPopup({
    delegate: "a",
    type: "image",
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: "mfp-with-zoom mfp-img-mobile",
    image: {
      verticalFit: true,
      titleSrc: function (item) {
        return (
          item.el.attr("title") +
          ' &middot; <a class="image-source-link" href="' +
          item.el.attr("data-source") +
          '" target="_blank">image source</a>'
        );
      },
    },
    gallery: {
      enabled: true,
    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
      opener: function (element) {
        return element.find("img");
      },
    },
  });
});

// Add nav bg
$(window).on("scroll", function () {
  if ($(window).scrollTop()) {
    $(".main-nav").addClass("nav-bg");
  } else {
    $(".main-nav").removeClass("nav-bg");
  }
});

//Blog 1
const blogOneH = "Discovering ProWork: The Future of Coworking Spaces";
const blogOneSD = "Dive deep into the world of ProWork, where modern design meets professional amenities.";
const blogOnePD = "15 Sept 2023";
const blogOneIS = "images/blog/blog-thumb-1.jpg";
const blogOneD = "In an ever-evolving professional landscape, ProWork emerges as a beacon for freelancers, startups, and corporations alike. Our spaces resonate with the essence of innovation, providing an ambiance that transcends traditional office environments. With a seamless blend of state-of-the-art facilities and aesthetic interiors, ProWork not only redefines coworking but also adds a touch of luxury to it. As remote work trends soar, our commitment to cultivating a community where collaboration meets convenience stands unwavering. Join us in this journey as we reshape the very notion of workspaces.";

//Blog 2
const blogTwoH = "Surprising Benefits of Choosing ProWork for Your Business";
const blogTwoSD = "Ever considered coworking for your business? Explore the multifaceted advantages of ProWork!";
const blogTwoPD = "16 Sept 2023";
const blogTwoIS = "images/blog/blog-thumb-2.jpg";
const blogTwoD = "The ProWork ecosystem stands as a beacon of innovation for businesses of every size. Within our walls, networking opportunities abound as professionals from diverse fields congregate, leading to dynamic collaborations and potential partnerships. At ProWork, we understand the burden of hefty leases, so we offer cost-effective solutions that don't compromise on quality. Our emphasis on technology integration ensures that every venture operates seamlessly, aided by our state-of-the-art facilities. Whether you're someone who thrives in open desk environments or prefers the solitude of a private cabin, ProWork caters to every work style. Beyond just a workspace, we also prioritize the holistic development of our members through regular workshops, webinars, and social events, fostering both professional advancement and personal growth.";

//Blog 3
const blogThreeH = "Building a Community: The Social Perks of Coworking at ProWork";
const blogThreeSD = "Coworking is not just about shared desks and Wi-Fi.";
const blogThreePD = "17 Sept 2023";
const blogThreeIS = "images/blog/blog-thumb-3.jpg";
const blogThreeD = "Co-working at ProWork transcends the basic provisions of space and internet. It's about cultivating an ecosystem of like-minded professionals. At ProWork, community-building takes precedence. Through tailored events, networking sessions, and collaborative projects, members get an opportunity to interact, learn, and grow together. Sharing a workspace can lead to shared visions, and at ProWork, we facilitate this harmonious amalgamation of ideas and visions.";

//Blog 4
const blogFourH = "Flexibility at Its Best: Why ProWork Appeals to the Modern Professional";
const blogFourSD = "Explore how ProWork meets the dynamic needs of today's workforce.";
const blogFourPD = "18 Sept 2023";
const blogFourIS = "images/blog/blog-thumb-4.jpg";
const blogFourD = "Modern professionals require more than just a desk and a chair. They seek flexibility, a community, and a sense of belonging. ProWork offers all of this and more. With 24/7 access, a range of seating options, and amenities that cater to diverse needs, ProWork stands out as the coworking space of choice for many. Whether you're a night owl or an early riser, prefer a quiet corner or thrive in an open environment, ProWork has got you covered.";

//Blog 5
const blogFiveH = "Eco-Friendly Coworking: ProWork's Commitment to Sustainability";
const blogFiveSD = "Where professional meets sustainable. Discover ProWork's green initiatives.";
const blogFivePD = "19 Sept 2023";
const blogFiveIS = "images/blog/blog-thumb-5.jpg";
const blogFiveD = "At ProWork, we understand the importance of sustainability. As we pave the way for modern workspaces, we're also committed to reducing our carbon footprint. From eco-friendly building materials to energy-efficient lighting, our spaces are designed with the environment in mind. Additionally, we constantly host green initiatives and workshops, emphasizing the importance of sustainability in the professional realm.";

//Blog 6
const blogSixH = "The Art of Productivity: How ProWork's Design Enhances Work Efficiency";
const blogSixSD = "Discover the science behind ProWork's meticulously crafted workspaces.";
const blogSixPD = "20 Sept 2023";
const blogSixIS = "images/blog/blog-thumb-6.jpg";
const blogSixD = "Every element at ProWork, from the ergonomics of our chairs to the color palette of our walls, is meticulously curated to enhance productivity. We believe that the environment plays a crucial role in one's work efficiency. Natural lighting, noise-controlled areas, and spaces dedicated to relaxation are just a few features that make ProWork a haven for professionals. Dive deep into the world of ProWork and discover how design can truly reshape your work experience.";

try{

  document.getElementById("blogOneH").innerHTML = blogOneH;
  document.getElementById("blogOneSD").innerHTML = blogOneSD;
  document.getElementById("blogOneIS").src = blogOneIS;

  document.getElementById("blogTwoH").innerHTML = blogTwoH;
  document.getElementById("blogTwoSD").innerHTML = blogTwoSD;
  document.getElementById("blogTwoIS").src = blogTwoIS;

  document.getElementById("blogThreeH").innerHTML = blogThreeH;
  document.getElementById("blogThreeSD").innerHTML = blogThreeSD;
  document.getElementById("blogThreeIS").src = blogThreeIS;

  document.getElementById("blogFourH").innerHTML = blogFourH;
  document.getElementById("blogFourSD").innerHTML = blogFourSD;
  document.getElementById("blogFourIS").src = blogFourIS;

  document.getElementById("blogFiveH").innerHTML = blogFiveH;
  document.getElementById("blogFiveSD").innerHTML = blogFiveSD;
  document.getElementById("blogFiveIS").src = blogFiveIS;

  document.getElementById("blogSixH").innerHTML = blogSixH;
  document.getElementById("blogSixSD").innerHTML = blogSixSD;
  document.getElementById("blogSixIS").src = blogSixIS;
}
catch(error){
  console.error(error)
}

  document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('post');
    if (postId === '1') {
      document.getElementById('postHead').innerText = blogOneH;
      document.getElementById('postDate').innerText = blogOnePD;
      document.getElementById('postImage').src = blogOneIS;
      document.getElementById('postBody').innerText = blogOneD;
    }
    if (postId === '2') {
      document.getElementById('postHead').innerText = blogTwoH;
      document.getElementById('postDate').innerText = blogTwoPD;
      document.getElementById('postImage').src = blogTwoIS;
      document.getElementById('postBody').innerText = blogTwoD;
    }
    if (postId === '3') {
      document.getElementById('postHead').innerText = blogThreeH;
      document.getElementById('postDate').innerText = blogThreePD;
      document.getElementById('postImage').src = blogThreeIS;
      document.getElementById('postBody').innerText = blogThreeD;
    }
    if (postId === '4') {
      document.getElementById('postHead').innerText = blogFourH;
      document.getElementById('postDate').innerText = blogFourPD;
      document.getElementById('postImage').src = blogFourIS;
      document.getElementById('postBody').innerText = blogFourD;
    }
    if (postId === '5') {
      document.getElementById('postHead').innerText = blogFiveH;
      document.getElementById('postDate').innerText = blogFivePD;
      document.getElementById('postImage').src = blogFiveIS;
      document.getElementById('postBody').innerText = blogFiveD;
    }
    if (postId === '6') {
      document.getElementById('postHead').innerText = blogSixH;
      document.getElementById('postDate').innerText = blogSixPD;
      document.getElementById('postImage').src = blogSixIS;
      document.getElementById('postBody').innerText = blogSixD;
    }
});
