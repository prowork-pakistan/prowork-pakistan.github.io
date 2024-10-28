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
const blogOneH =
  "The Ultimate Guide to Finding the Best Coworking Space in DHA phase 2, Islamabad";
const blogOneSD =
  "In today’s rapidly changing work environment, finding the perfect workspace is..";
const blogOnePD = "15 Aug 2024";
const blogOneIS = "images/blog/blog-thumb-1.jpg";
const blogOneD = `<p style="margin: 10px 0; text-align: justify; color: white;">The concept of coworking spaces has revolutionized the way we work, offering a flexible and cost-effective alternative to traditional office setups. In this article, we explore the top 10 benefits of coworking spaces and why they might be the ideal solution for you.</p> <h2 style="font-size: 1.5em; margin-top: 20px; margin-bottom: 10px; color: white;"><strong>1. Flexibility</strong></h2> <p style="margin: 10px 0; text-align: justify; color: white;">Coworking spaces offer unparalleled flexibility with options ranging from hourly desks to monthly office rentals. This allows businesses to scale up or down as needed without long-term commitments.</p> <h2 style="font-size: 1.5em; margin-top: 20px; margin-bottom: 10px; color: white;"><strong>2. Cost-Effectiveness</strong></h2> <p style="margin: 10px 0; text-align: justify; color: white;">Renting a traditional office can be expensive, with costs for rent, utilities, and maintenance. Coworking spaces, on the other hand, provide all-inclusive packages that are often more affordable.</p> <h2 style="font-size: 1.5em; margin-top: 20px; margin-bottom: 10px; color: white;"><strong>3. Networking Opportunities</strong></h2> <p style="margin: 10px 0; text-align: justify; color: white;">Coworking spaces are home to diverse professionals from various industries, providing ample opportunities for networking and collaboration.</p> <h2 style="font-size: 1.5em; margin-top: 20px; margin-bottom: 10px; color: white;"><strong>4. Access to Premium Amenities</strong></h2> <p style="margin: 10px 0; text-align: justify; color: white;">High-speed internet, meeting rooms, and kitchen facilities are standard in coworking spaces, ensuring you have everything you need to be productive.</p> <h2 style="font-size: 1.5em; margin-top: 20px; margin-bottom: 10px; color: white;"><strong>5. Work-Life Balance</strong></h2> <p style="margin: 10px 0; text-align: justify; color: white;">The flexibility of coworking spaces allows you to create a work-life balance that suits your personal and professional needs.</p> <h2 style="font-size: 1.5em; margin-top: 20px; margin-bottom: 10px; color: white;"><strong>6. Community Support</strong></h2> <p style="margin: 10px 0; text-align: justify; color: white;">A strong sense of community is one of the biggest draws of coworking spaces. You’re surrounded by motivated individuals who can provide support and inspiration.</p> <h2 style="font-size: 1.5em; margin-top: 20px; margin-bottom: 10px; color: white;"><strong>7. Reduced Overhead Costs</strong></h2> <p style="margin: 10px 0; text-align: justify; color: white;">With coworking spaces, you eliminate overhead costs like electricity, water, and internet bills, as these are included in your membership fee.</p> <h2 style="font-size: 1.5em; margin-top: 20px; margin-bottom: 10px; color: white;"><strong>8. Increased Productivity</strong></h2> <p style="margin: 10px 0; text-align: justify; color: white;">Working in a professional environment away from home distractions can significantly boost your productivity.</p> <h2 style="font-size: 1.5em; margin-top: 20px; margin-bottom: 10px; color: white;"><strong>9. Professional Image</strong></h2> <p style="margin: 10px 0; text-align: justify; color: white;">Coworking spaces like ProWork offer a professional setting for client meetings, enhancing your business’s image.</p> <h2 style="font-size: 1.5em; margin-top: 20px; margin-bottom: 10px; color: white;"><strong>10. Access to Events and Workshops</strong></h2> <p style="margin: 10px 0; text-align: justify; color: white;">Many coworking spaces host events and workshops that can help you develop new skills and grow your business network.</p> <h2 style="font-size: 1.5em; margin-top: 20px; margin-bottom: 10px; color: white;"><strong>Conclusion</strong></h2> <p style="margin: 10px 0; text-align: justify; color: white;">Coworking spaces provide a multitude of benefits that make them an attractive option for freelancers, startups, and even established businesses. If you’re considering a coworking space, ProWork in DHA phase 2, Islamabad, offers all these benefits and more.</p>`;
//Blog 2
const blogTwoH =
  "Top 10 Benefits of Choosing a Coworking Space Over a Traditional Office";
const blogTwoSD =
  "The concept of coworking spaces has revolutionized the way we work, offering a..";
const blogTwoPD = "16 Aug 2024";
const blogTwoIS = "images/blog/blog-thumb-2.jpg";
const blogTwoD = `<p style="margin: 10px 0; text-align: justify; color: white;">The concept of coworking spaces has revolutionized the way we work, offering a flexible and cost-effective alternative to traditional office setups. In this article, we explore the top 10 benefits of coworking spaces and why they might be the ideal solution for you.</p> <h2 style="font-size: 1.5em; margin-top: 20px; margin-bottom: 10px; color: white;"><strong>1. Flexibility</strong></h2> <p style="margin: 10px 0; text-align: justify; color: white;">Coworking spaces offer unparalleled flexibility with options ranging from hourly desks to monthly office rentals. This allows businesses to scale up or down as needed without long-term commitments.</p> <h2 style="font-size: 1.5em; margin-top: 20px; margin-bottom: 10px; color: white;"><strong>2. Cost-Effectiveness</strong></h2> <p style="margin: 10px 0; text-align: justify; color: white;">Renting a traditional office can be expensive, with costs for rent, utilities, and maintenance. Coworking spaces, on the other hand, provide all-inclusive packages that are often more affordable.</p> <h2 style="font-size: 1.5em; margin-top: 20px; margin-bottom: 10px; color: white;"><strong>3. Networking Opportunities</strong></h2> <p style="margin: 10px 0; text-align: justify; color: white;">Coworking spaces are home to diverse professionals from various industries, providing ample opportunities for networking and collaboration.</p> <h2 style="font-size: 1.5em; margin-top: 20px; margin-bottom: 10px; color: white;"><strong>4. Access to Premium Amenities</strong></h2> <p style="margin: 10px 0; text-align: justify; color: white;">High-speed internet, meeting rooms, and kitchen facilities are standard in coworking spaces, ensuring you have everything you need to be productive.</p> <h2 style="font-size: 1.5em; margin-top: 20px; margin-bottom: 10px; color: white;"><strong>5. Work-Life Balance</strong></h2> <p style="margin: 10px 0; text-align: justify; color: white;">The flexibility of coworking spaces allows you to create a work-life balance that suits your personal and professional needs.</p> <h2 style="font-size: 1.5em; margin-top: 20px; margin-bottom: 10px; color: white;"><strong>6. Community Support</strong></h2> <p style="margin: 10px 0; text-align: justify; color: white;">A strong sense of community is one of the biggest draws of coworking spaces. You’re surrounded by motivated individuals who can provide support and inspiration.</p> <h2 style="font-size: 1.5em; margin-top: 20px; margin-bottom: 10px; color: white;"><strong>7. Reduced Overhead Costs</strong></h2> <p style="margin: 10px 0; text-align: justify; color: white;">With coworking spaces, you eliminate overhead costs like electricity, water, and internet bills, as these are included in your membership fee.</p> <h2 style="font-size: 1.5em; margin-top: 20px; margin-bottom: 10px; color: white;"><strong>8. Increased Productivity</strong></h2> <p style="margin: 10px 0; text-align: justify; color: white;">Working in a professional environment away from home distractions can significantly boost your productivity.</p> <h2 style="font-size: 1.5em; margin-top: 20px; margin-bottom: 10px; color: white;"><strong>9. Professional Image</strong></h2> <p style="margin: 10px 0; text-align: justify; color: white;">Coworking spaces like ProWork offer a professional setting for client meetings, enhancing your business’s image.</p> <h2 style="font-size: 1.5em; margin-top: 20px; margin-bottom: 10px; color: white;"><strong>10. Access to Events and Workshops</strong></h2> <p style="margin: 10px 0; text-align: justify; color: white;">Many coworking spaces host events and workshops that can help you develop new skills and grow your business network.</p> <p style="font-size: 1.5em; margin-top: 20px; margin-bottom: 10px; color: white;"><strong>Conclusion</strong></p> <p style="margin: 10px 0; text-align: justify; color: white;">Coworking spaces provide a multitude of benefits that make them an attractive option for freelancers, startups, and even established businesses. If you’re considering a coworking space, ProWork in DHA phase 2, Islamabad, offers all these benefits and more.</p>`;

//Blog 3
const blogThreeH = "How Coworking Spaces Foster Collaboration and Innovation";
const blogThreeSD =
  "In a world where collaboration and innovation are key to success, coworking spaces..";
const blogThreePD = "17 Aug 2024";
const blogThreeIS = "images/blog/blog-thumb-3.jpg";
const blogThreeD = `<p style="margin: 10px 0; text-align: justify; color: white;">In a world where collaboration and innovation are key to success, coworking spaces have emerged as hubs for creativity and teamwork. This article explores how coworking environments like ProWork in DHA phase 2, Islamabad, foster collaboration and innovation among their members.</p> <h2 style="font-size: 1.5em; margin-top: 20px; margin-bottom: 10px; color: white;"><strong>The Power of Community</strong></h2> <p style="margin: 10px 0; text-align: justify; color: white;">Coworking spaces bring together professionals from diverse backgrounds, creating a melting pot of ideas and expertise. This diversity is a catalyst for collaboration, as members can easily share knowledge and skills.</p> <h2 style="font-size: 1.5em; margin-top: 20px; margin-bottom: 10px; color: white;"><strong>Flexible Spaces for Every Need</strong></h2> <p style="margin: 10px 0; text-align: justify; color: white;">Coworking spaces are designed to accommodate various working styles. Whether you need a quiet corner for focused work or a meeting room for brainstorming sessions, these spaces offer the flexibility to collaborate effectively.</p> <h2 style="font-size: 1.5em; margin-top: 20px; margin-bottom: 10px; color: white;"><strong>Networking Opportunities</strong></h2> <p style="margin: 10px 0; text-align: justify; color: white;">Regular events, workshops, and informal meetups in coworking spaces provide ample opportunities for networking. These interactions often lead to collaborations, partnerships, and innovative projects.</p> <h2 style="font-size: 1.5em; margin-top: 20px; margin-bottom: 10px; color: white;"><strong>Shared Resources and Expertise</strong></h2> <p style="margin: 10px 0; text-align: justify; color: white;">In coworking spaces, members have access to shared resources like high-speed internet, printers, and professional meeting rooms. More importantly, they have access to each other’s expertise, leading to spontaneous collaborations and innovative solutions.</p> <h2 style="font-size: 1.5em; margin-top: 20px; margin-bottom: 10px; color: white;"><strong>Case Study: ProWork</strong></h2> <p style="margin: 10px 0; text-align: justify; color: white;">At ProWork, the collaborative environment is evident in the success stories of members who have partnered on projects, developed new ideas, and even launched businesses together. The space’s design and community-centric approach make it an ideal place for innovation.</p> <h2 style="font-size: 1.5em; margin-top: 20px; margin-bottom: 10px; color: white;"><strong>Conclusion</strong></h2> <p style="margin: 10px 0; text-align: justify; color: white;">Coworking spaces like ProWork are more than just offices; they are vibrant communities where collaboration and innovation thrive. If you’re looking to connect with other professionals and work in an environment that inspires creativity, ProWork is the place to be.</p>`;

//Blog 4
const blogFourH = "The Best Places to Work Remotely in DHA phase 2, Islamabad";
const blogFourSD =
  "As remote work becomes increasingly popular, finding the right workspace is crucial...";
const blogFourPD = "18 Aug 2024";
const blogFourIS = "images/blog/blog-thumb-4.jpg";
const blogFourD = `<p style="margin: 10px 0; text-align: justify; color: white;">As remote work becomes increasingly popular, finding the right workspace is crucial for maintaining productivity. In DHA phase 2, Islamabad, several coworking spaces offer the perfect environment for remote workers. This article highlights the best options, including ProWork.</p> <h2 style="font-size: 1.5em; margin-top: 20px; margin-bottom: 10px; color: white;"><strong>Why Choose a Coworking Space for Remote Work?</strong></h2> <p style="margin: 10px 0; text-align: justify; color: white;">Working from home can be isolating and distracting. Coworking spaces provide a professional environment that helps you stay focused, productive, and connected with others.</p> <h2 style="font-size: 1.5em; margin-top: 20px; margin-bottom: 10px; color: white;"><strong>Top Remote Workspaces in DHA Phase 2</strong></h2> <p style="margin: 10px 0; text-align: justify; color: white;"><strong>ProWork:</strong> Offering high-speed internet, comfortable workstations, and a quiet environment, ProWork is an ideal spot for remote workers in Phase 8.</p> <p style="margin: 10px 0; text-align: justify; color: white;"><strong>Daftarkhwan Vantage:</strong> Located in Phase 7, this space offers a premium experience with all the amenities remote workers need.</p> <p style="margin: 10px 0; text-align: justify; color: white;"><strong>WorkLabs:</strong> A budget-friendly option with flexible plans, WorkLabs caters to freelancers and remote workers.</p> <h2 style="font-size: 1.5em; margin-top: 20px; margin-bottom: 10px; color: white;"><strong>Key Features of ProWork</strong></h2> <p style="margin: 10px 0; text-align: justify; color: white;"><strong>Reliable Internet:</strong> Stay connected with high-speed internet that ensures seamless video calls and data transfers.</p> <p style="margin: 10px 0; text-align: justify; color: white;"><strong>Quiet Environment:</strong> ProWork’s well-designed space allows you to focus on your work without distractions.</p> <p style="margin: 10px 0; text-align: justify; color: white;"><strong>Networking Opportunities:</strong> Even as a remote worker, you can benefit from the networking opportunities available at ProWork.</p> <h2 style="font-size: 1.5em; margin-top: 20px; margin-bottom: 10px; color: white;"><strong>Conclusion</strong></h2> <p style="margin: 10px 0; text-align: justify; color: white;">Finding the right workspace is essential for remote workers who need a professional environment to be productive. In DHA Phase 2, ProWork offers everything you need to work efficiently and connect with a vibrant community of professionals.</p>`;

//Blog 5
const blogFiveH =
  "Why Freelancers Should Consider Coworking Spaces in Islamabad";
const blogFiveSD =
  "Freelancers often face unique challenges, from finding a quiet place to work...";
const blogFivePD = "19 Aug 2024";
const blogFiveIS = "images/blog/blog-thumb-5.jpg";
const blogFiveD = `<p style="margin: 10px 0; text-align: justify; color: white;">Freelancers often face unique challenges, from finding a quiet place to work to connecting with potential clients. Coworking spaces offer solutions to these challenges, making them an attractive option for freelancers in Islamabad. Here’s why you should consider a coworking space like ProWork.</p> <h2 style="font-size: 1.5em; margin-top: 20px; margin-bottom: 10px; color: white;"><strong>Overcoming Isolation</strong></h2> <p style="margin: 10px 0; text-align: justify; color: white;">One of the biggest challenges freelancers face is isolation. Coworking spaces provide a community of like-minded professionals, offering social interaction and networking opportunities.</p> <h2 style="font-size: 1.5em; margin-top: 20px; margin-bottom: 10px; color: white;"><strong>Access to Professional Amenities</strong></h2> <p style="margin: 10px 0; text-align: justify; color: white;">Freelancers often work from home or cafes, which may lack professional amenities. Coworking spaces like ProWork offer high-speed internet, meeting rooms, and office equipment, creating a professional environment for client meetings and focused work.</p> <h2 style="font-size: 1.5em; margin-top: 20px; margin-bottom: 10px; color: white;"><strong>Flexibility and Affordability</strong></h2> <p style="margin: 10px 0; text-align: justify; color: white;">Freelancers need flexibility, and coworking spaces provide it. With options like day passes, part-time memberships, and dedicated desks, you can choose a plan that suits your work style and budget.</p> <h2 style="font-size: 1.5em; margin-top: 20px; margin-bottom: 10px; color: white;"><strong>Networking and Collaboration</strong></h2> <p style="margin: 10px 0; text-align: justify; color: white;">Coworking spaces are hubs for networking and collaboration. As a freelancer, you can connect with other professionals, find new clients, and even collaborate on projects within the coworking community.</p> <h2 style="font-size: 1.5em; margin-top: 20px; margin-bottom: 10px; color: white;"><strong>Conclusion</strong></h2> <p style="margin: 10px 0; text-align: justify; color: white;">For freelancers in Islamabad, coworking spaces like ProWork offer a supportive environment, professional amenities, and valuable networking opportunities. Consider making the switch to a coworking space to enhance your productivity and grow your freelance business.</p>`;

//Blog 6
const blogSixH =
  "How to Boost Productivity with the Right Coworking Environment";
const blogSixSD =
  "Productivity is key to success, whether you’re a freelancer, entrepreneur, or remote worker...";
const blogSixPD = "20 Aug 2024";
const blogSixIS = "images/blog/blog-thumb-6.jpg";
const blogSixD = `<p style="margin: 10px 0; text-align: justify; color: white;">Productivity is key to success, whether you’re a freelancer, entrepreneur, or remote worker. The right coworking environment can significantly boost your productivity. In this article, we’ll explore how ProWork in DHA phase 2, Islamabad, offers an environment designed to help you get more done.</p> <h2 style="font-size: 1.5em; margin-top: 20px; margin-bottom: 10px; color: white;"><strong>The Importance of Environment</strong></h2> <p style="margin: 10px 0; text-align: justify; color: white;">Your work environment plays a crucial role in your productivity. A well-designed coworking space minimizes distractions, provides ergonomic seating, and offers all the tools you need to focus on your work.</p> <h2 style="font-size: 1.5em; margin-top: 20px; margin-bottom: 10px; color: white;"><strong>Features That Enhance Productivity</strong></h2> <p style="margin: 10px 0; text-align: justify; color: white;"><strong>Quiet Zones:</strong> ProWork offers designated quiet areas where you can work without interruptions, perfect for tasks that require deep focus.</p> <p style="margin: 10px 0; text-align: justify; color: white;"><strong>Ergonomic Furniture:</strong> Comfortable seating and well-designed workstations reduce physical strain and help maintain focus throughout the day.</p> <p style="margin: 10px 0; text-align: justify; color: white;"><strong>High-Speed Internet:</strong> Reliable internet connectivity ensures that you can work efficiently, without the frustration of slow or dropped connections.</p> <p style="margin: 10px 0; text-align: justify; color: white;"><strong>Natural Lighting:</strong> ProWork is designed with ample natural light, which can reduce eye strain and increase your overall energy levels throughout the day.</p> <p style="margin: 10px 0; text-align: justify; color: white;"><strong>Access to Meeting Rooms:</strong> Whether you need to brainstorm with a team or meet a client, having access to well-equipped meeting rooms can make a significant difference in your work efficiency.</p> <h2 style="font-size: 1.5em; margin-top: 20px; margin-bottom: 10px; color: white;"><strong>Creating a Routine</strong></h2> <p style="margin: 10px 0; text-align: justify; color: white;">A consistent routine is essential for maximizing productivity. At ProWork, the regular office hours and structured environment can help you establish a routine that enhances your focus and output.</p> <h2 style="font-size: 1.5em; margin-top: 20px; margin-bottom: 10px; color: white;"><strong>Break Areas for Mental Refreshment</strong></h2> <p style="margin: 10px 0; text-align: justify; color: white;">Taking breaks is crucial for maintaining productivity throughout the day. ProWork provides comfortable break areas where you can relax and recharge before getting back to work, helping you maintain a high level of productivity.</p> <h2 style="font-size: 1.5em; margin-top: 20px; margin-bottom: 10px; color: white;"><strong>Conclusion</strong></h2> <p style="margin: 10px 0; text-align: justify; color: white;">The right environment can significantly impact your productivity. ProWork in DHA phase 2, Islamabad, offers a coworking space designed with productivity in mind, featuring quiet zones, ergonomic furniture, high-speed internet, and more. If you’re looking to enhance your work output, consider making ProWork your professional home.</p>`;

try {
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
} catch (error) {
  console.error(error);
}

document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get("post");
  if (postId === "1") {
    document.getElementById("postHead").innerText = blogOneH;
    document.getElementById("postDate").innerText = blogOnePD;
    document.getElementById("postImage").src = blogOneIS;
    document.getElementById("postBody").innerHTML = blogOneD;
  }
  if (postId === "2") {
    document.getElementById("postHead").innerText = blogTwoH;
    document.getElementById("postDate").innerText = blogTwoPD;
    document.getElementById("postImage").src = blogTwoIS;
    document.getElementById("postBody").innerHTML = blogTwoD;
  }
  if (postId === "3") {
    document.getElementById("postHead").innerText = blogThreeH;
    document.getElementById("postDate").innerText = blogThreePD;
    document.getElementById("postImage").src = blogThreeIS;
    document.getElementById("postBody").innerHTML = blogThreeD;
  }
  if (postId === "4") {
    document.getElementById("postHead").innerText = blogFourH;
    document.getElementById("postDate").innerText = blogFourPD;
    document.getElementById("postImage").src = blogFourIS;
    document.getElementById("postBody").innerHTML = blogFourD;
  }
  if (postId === "5") {
    document.getElementById("postHead").innerText = blogFiveH;
    document.getElementById("postDate").innerText = blogFivePD;
    document.getElementById("postImage").src = blogFiveIS;
    document.getElementById("postBody").innerHTML = blogFiveD;
  }
  if (postId === "6") {
    document.getElementById("postHead").innerText = blogSixH;
    document.getElementById("postDate").innerText = blogSixPD;
    document.getElementById("postImage").src = blogSixIS;
    document.getElementById("postBody").innerHTML = blogSixD;
  }
});
