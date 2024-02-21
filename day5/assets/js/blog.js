let dataBlogs = [];
function addBlog(event) {
  event.preventDefault();
  const projectName = document.getElementById("projectname").value;
  const startDate = document.getElementById("startdate").value;
  const endDate = document.getElementById("enddate").value;
  //method waktu
  const startdate = new Date(startDate);
  const enddate = new Date(endDate);
  const startYear = startdate.getFullYear();
  const startMonth = startdate.getMonth();
  const endYear = enddate.getFullYear();
  const endMonth = enddate.getMonth();
  //ambil selisih start dan end project
  const getDurationMonth = (endYear - startYear) * 12 + (endMonth - startMonth);
  // mengambil data duration
  let getDuration = "";
  console.log(dataBlogs);
  //melakukan pengkondisian untuk mengambil hari dan bulan untuk durasi
  if (getDurationMonth == 0) {
    let getDurationDay = enddate.getTime() - startdate.getTime();
    getDuration += Math.ceil(getDurationDay / (1000 * 3600 * 24)) + " Hari";
  } else if (getDurationMonth > 0) {
    getDuration += getDurationMonth + " Bulan";
  }
  const desCription = document.getElementById("description").value;
  const nodeJs = document.getElementById("nodejs").checked;
  const reactJs = document.getElementById("reactjs").checked;
  const expressJs = document.getElementById("expressjs").checked;
  const typeScript = document.getElementById("typescript").checked;

  let dataBlog = {
    projectName,
    getDuration,
    desCription,
    tech: "",
  };
  // validasi sederhana jika form kosong
  if (projectName == "") {
    return alert("Please fill the form project name");
  } else if (desCription == "") {
    return alert("Please fill the form description");
  }
  // memilih salah satu checkbox digunakan pengkondisian
  if (nodeJs === true) {
    dataBlog.tech += '<i class="fa-brands fa-node-js"></i>';
  }
  if (reactJs === true) {
    dataBlog.tech += '<i class="fa-brands fa-react"></i>';
  }
  if (expressJs === true) {
    dataBlog.tech += '<i class="fa-brands fa-js"></i>';
  }
  if (typeScript === true) {
    dataBlog.tech += '<i class="fa-brands fa-java"></i>';
  }
  // validasi sederhana jika description kosong
  if (desCription == "") {
    dataBlog.desCription += "Masukan description";
  }
  // method .push untuk menambahkan nilai yang diinputkan kedalam data array
  dataBlogs.push(dataBlog);
  // console.log(dataBlogs);
  // memanggil function render
  renderBlog();
}
// untuk menampilkan data ke dalam browser menggunakan function renderBlog
function renderBlog() {
  // manipulasi DOM Content dan menambahkan method innerhtml untuk merender
  document.getElementById("content").innerHTML = "";
  // melakukan pengulangan agar konten bisa ditampilkan secara berulang sesuai kondisi yang diinginkan
  for (let index = 0; index < dataBlogs.length; index++) {
    // mengisikan content ke dalam browser dengan method innerhtml
    document.getElementById("content").innerHTML += `
    <div class="container" onclick="detailPage()">
    <div class="card" onclick="detailPage">
      <div class="card-img">
        <img src="./assets/img/card.jpg" alt="" />
      </div>
      <div class="card-content">
        <div class="card-content-title">
          <h3>${dataBlogs[index].projectName}</h3>
          <p>Duration : ${dataBlogs[index].getDuration}</p>
        </div>
        <div class="card-content-text">
          <p>${dataBlogs[index].desCription}</p>
        </div>
        <div class="card-logo">
         ${dataBlogs[index].tech}
        </div>
        <div class="card-button">
          <button>Edit</button>
          <button onclick="deleteCard(${index})">Delete</button>
        </div>
      </div>
    </div>
  </div>`;
  }
}

function deleteCard(index) {
  dataBlogs.splice(index, 1);
  renderBlog();
}
function detailPage() {
  window.location = "detailBlog.html";
}
