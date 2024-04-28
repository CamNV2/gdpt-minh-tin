
let fullname = document.getElementById("fullname")
let first = document.getElementById("first")
let last = document.getElementById("last")
let mail = document.getElementById("email")
let photo = document.getElementById("photo")
let id_num = document.getElementById("id_num")
let sign = document.getElementById("sign")
let out = document.getElementById("out")
let info = document.getElementById("info")
let signInBtn = document.getElementById("sign-in-btn")



// Show All Data in Web from localStorage
function show_L_data() {
  debugger
  let infosLparse = JSON.parse(localStorage.getItem("infos"))
  if (localStorage.getItem("infos") && infosLparse != null) {
    $("#sign-in-btn").addClass("d-none")
    $("#logo_img").removeClass("d-none")
    $("#logo_img img").attr('src', infosLparse.photo_linkL);
    $("#out").removeClass("d-none")
    $(".nav_list .nav_link:nth-child(1)").addClass("active");
    $(".nav_list .nav_link:nth-child(2) i").removeClass().addClass("bx bx-bar-chart-alt-2 nav_icon");
    $(".nav_list .nav_link:nth-child(3) i").removeClass().addClass("bx bx-notepad nav_icon");
    $(".nav_list .nav_link:nth-child(4) i").removeClass().addClass("bx bx-folder nav_icon");
    $(".nav_list .nav_link").removeClass("not-clickable");
    // if (infosLparse.mailL == 'nhatluong0102@gmail.com') {
    //   $("#admin-upload").show();
    // } else {
    //   $("#admin-upload").hide();
    // }
    $(".nav_list .nav_link:nth-child(4) i").removeClass().addClass("bx bx-lock-alt nav_icon");
    $(".nav_list .nav_link:nth-child(4)").addClass("not-clickable");

  } else {
    $("#logo_img").addClass("d-none")
    $("#sign-in-btn").removeClass("d-none")
    $("#out").addClass("d-none")
    $(".nav_list .nav_link").removeClass('active')
    $(".nav_list .nav_link:nth-child(1)").addClass('active')
    $(".ftco-section").removeClass('d-none')
    $(".ftco-section").addClass('d-none')
    $(".ftco-section:nth-child(1)").removeClass('d-none')
    $("#out").removeClass("active");
    $(".nav_list .nav_link").addClass("not-clickable");
  }

}

window.addEventListener("load", show_L_data())



// Sign in // Sign in // Sign in // Sign in
function handleCredentialResponse(response) {
  debugger
  // decodeJwtResponse() is a custom function defined by you
  // to decode the credential response.
  const responsePayload = decodeJwtResponse(response.credential);

  let infos = {
    fullnameL: responsePayload.name,
    photo_linkL: responsePayload.picture,
    firstL: responsePayload.given_name,
    lastL: responsePayload.family_name,
    mailL: responsePayload.email,
    id_numL: responsePayload.sub
  }

  let infosL = JSON.stringify(infos)

  localStorage.setItem("infos", infosL)

  show_L_data()
}


// decodeJwtResponse()
function decodeJwtResponse(data) {
  let tokens = data.split(".");
  return JSON.parse(atob(tokens[1]))
}

// Sign Out
out.addEventListener("click", () => {
  localStorage.clear()
  $("#logo_img").addClass("d-none")
  $("#sign-in-btn").removeClass("d-none")
  $("#out").addClass("d-none")
  $("#out").removeClass("active")
  $(".nav_list .nav_link:not(:first-child)").each(function () {
    $(this).addClass("not-clickable");
    $(this).find("i").removeClass().addClass("bx bx-lock-alt nav_icon");
  })
})

//UI
document.addEventListener("DOMContentLoaded", function (event) {
  debugger
  const showNavbar = (toggleId, navId, bodyId, headerId, mainContentId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId),
      bodypd = document.getElementById(bodyId),
      headerpd = document.getElementById(headerId),
      mainContent = document.getElementById(mainContentId)
    // Validate that all variables exist
    if (toggle && nav && bodypd && headerpd) {
      toggle.addEventListener('click', () => {
        debugger
        // show navbar
        nav.classList.toggle('show')
        // change icon
        toggle.classList.toggle('bx-x')
        // add padding to body
        bodypd.classList.toggle('body-pd-section')
        // add padding to header
        headerpd.classList.toggle('body-pd')
        //


        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (isMobile) {
          mainContent.classList.toggle('ml-68')
          mainContent.classList.toggle('top-256')
        } else {
          mainContent.classList.toggle('ml-68')
        }
      })
    }
  }

  showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header', 'main-content')

  /*showNavbar('img_logo', 'nav-bar', 'body-pd', 'header')*/

  /*===== LINK ACTIVE =====*/
  const linkColor = document.querySelectorAll('.nav_link');
  const sectionCpn = document.querySelectorAll('.ftco-section');
  function colorLink() {
    if (linkColor) {
      linkColor.forEach(l => l.classList.remove('active'))
      this.classList.add('active')
      if (this.id != "out") {
        sectionDisplay(this.id)
      } else {
        $(".nav_list .nav_link").removeClass('active')
        $(".nav_list .nav_link:nth-child(1)").addClass('active')
        $(".ftco-section").removeClass('d-none')
        $(".ftco-section").addClass('d-none')
        $(".ftco-section:nth-child(1)").removeClass('d-none')
        $("#out").removeClass("active")
      }
    }
  }
  function sectionDisplay(id) {
    debugger
    if (sectionCpn) {
      sectionCpn.forEach(l => { l.classList.remove('d-none'); l.classList.add('d-none') })
      $("#" + id + "-section").removeClass('d-none')
    }
  }
  linkColor.forEach(l =>
    l.addEventListener('click', colorLink)

  )

  $(document).ready(function () {
    $("#sign-in-btn").click(function () {
      $("#sign div div div").click();
    });

    //$("#admin-upload").hide();

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      $("#nav-bar").removeClass("show");
      $("#header").removeClass("body-pd")
    } else {
      $("#nav-bar").addClass("show");
      $("#header").addClass("body-pd");
      $("#body-pd").addClass("body-pd-section");
    }

    // Sample data
    const data = [
      "1	Ánh Trinhh xđ	15	02:35	Thu 25 Apr 2024,10:14 AM	900	900",
      "2	Bích Đỗ	14	04:38	Wed 24 Apr 2024,09:40 PM	840	840",
      "3	Tô Hoàng Duy	13	07:06	Wed 24 Apr 2024,08:16 PM	780	780",
      "4	Ánh Tình	11	04:48	Thu 25 Apr 2024,09:39 AM	660	660",
      "5	Xuân Hoa	10	09:39	Sat 27 Apr 2024,09:17 PM	600	600",
      "6	Quỳnh Như	9	04:53	Sat 27 Apr 2024,10:27 PM	540	540",
      "7	Hoàng Đức Đỗ	9	04:57	Wed 24 Apr 2024,08:16 PM	540	540",
      "8	Thùy Duyên	9	07:58	Wed 24 Apr 2024,09:10 PM	540	540",
      "9	Huyền Diệu	9	12:08	Sat 27 Apr 2024,04:34 PM	540	540",
      "10	Kiều Diễm	8	04:24	Wed 24 Apr 2024,10:19 PM	480	480",
      "11	Cẩm viên	8	07:21	Thu 25 Apr 2024,06:21 PM	480	480",
      "12	Kim Tiến	8	11:01	Fri 26 Apr 2024,11:27 PM	480	480",
      "13	Thu Lựu	7	04:26	Sat 27 Apr 2024,11:26 AM	420	420",
      "14	Kim hương	6	03:49	Wed 24 Apr 2024,08:18 PM	360	360",
      "15	Vương thị Hoài thương	6	04:06	Sat 27 Apr 2024,03:09 PM	360	360",
      "16	Huyền trinh	5	02:00	Thu 25 Apr 2024,12:28 AM	300	300",
      "17	Duy Văn	4	03:34	Sat 27 Apr 2024,09:39 PM	240	240",
      "18	Duyên Duyên	3	03:31	Wed 24 Apr 2024,08:17 PM	180	180"
    ];

    // Function to convert data to JSON format
    function convertToJSON(data) {
      return data.map(row => {
        const [rank, name, correctAnswers, totalResponseTime, startTime, score1, score2] = row.split('\t');
        return {
          "rank": rank,
          "name": name,
          "correctAnswers": correctAnswers,
          "totalResponseTime": totalResponseTime,
          "startTime": startTime,
          "score1": score1,
          "score2": score2
        };
      });
    }

    // Function to populate table body with JSON data
    function populateTable(jsonData) {
      const tbody = document.querySelector('#main-table tbody');

      // Clear previous data
      tbody.innerHTML = '';

      // Populate table body
      jsonData.forEach(row => {
        const tr = document.createElement('tr');
        Object.entries(row).forEach(([key, value]) => {
          const td = document.createElement('td');
          // If the key is "Thứ hạng" and the value is 1, 2, or 3, create an img element
          if (key === "rank" && parseInt(value) <= 3) {
            const img = document.createElement('img');
            img.src = `https://camnv2.github.io/gdpt-minh-tin/images/svgexport-${value}.svg`; // Replace with the actual image URL
            td.appendChild(img);
          } else {
            if (key === "rank") {
              td.classList.add("pd-45");
            } else if (key === "correctAnswers") {
              td.classList.add("pd-50");
            } else if (key === "totalResponseTime" || key === "score1" || key === "score2") {
              td.classList.add("pd-60");
            }
            td.textContent = value;
          }
          if (key === "rank" && parseInt(value) <= 3) {
            tr.classList.add("font-weight-bold");
            tr.appendChild(td);
          } else {
            tr.appendChild(td);
          }

        });
        tbody.appendChild(tr);
      });
    }

    // Convert data to JSON format
    const jsonData = convertToJSON(data);

    // Populate table body with JSON data
    populateTable(jsonData);
    $(".nav_list .nav_link").click(function () {
      if ($(this).hasClass("not-clickable")) {
        alert('Vui lòng đăng nhập để xem!')
      }
    })
    var playing = false;

    bgSound = document.getElementById("bgSound");

    // bgSound.volume = 0.1;

    $("a#playBtn").click(function () {
      $(this).toggleClass("stopBtn");

      if (playing == false) {
        document.getElementById("bgSound").play();
        playing = true;
      } else {
        document.getElementById("bgSound").pause();
        playing = false;
      }
    });
  });
  // Your code to run since DOM is loaded and ready
});

