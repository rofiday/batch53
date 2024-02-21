function getData() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phoneNumber = document.getElementById("phonenumber").value;
  let subject = document.getElementById("subject").value;
  let massage = document.getElementById("massage").value;
  //   console.log(name);
  //   console.log(email);
  //   console.log(phoneNumber);
  //   console.log(subject);
  //   console.log(massage);
  if (name == "") {
    return alert("Please Type your name !");
  } else if (email == "") {
    return alert("Please Type your email with @domain.com !");
  } else if (phoneNumber == "") {
    return alert("Please Type your phone number !");
  } else if (subject == "") {
    return alert("Please Type your subject !");
  } else if (massage == "") {
    return alert("Please Type your massage !");
  }
  //set email tujuan dan membuat element a untuk menuju link email dan buat a menjadi function click
  const emailMe = "rofidailamy@gmail.com";
  let a = document.createElement("a");
  a.href = `mailto:${emailMe}?subject= ${subject} &body= Hallo bang nama saya, ${name} ,pesan saya ${massage}, bisakah anda menghubungi saya? ${phoneNumber}`;
  a.click();
  //buat object supaya console.log manggil object
  const datas = {
    name,
    email,
    phoneNumber,
    subject,
    massage,
  };
  console.log(datas);
  //   console.log;
}
