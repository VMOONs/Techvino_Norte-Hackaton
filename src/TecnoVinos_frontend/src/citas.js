document.querySelector("#myForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const button = e.target.querySelector("button");
  const name = document.getElementById("name").value.toString();
  const email = document.getElementById("email").value.toString();
  const phoneNumber = document.getElementById("phoneNumber").value.toString();

  console.log(name);
  console.log(email);
  console.log(phoneNumber);

  button.setAttribute("disabled", true);

  // Mostrar los datos en el div citas_f
  document.getElementById("res_name").innerText = `Nombre: ${name}`;
  document.getElementById("res_phoneNumber").innerText = `Número de teléfono: ${phoneNumber}`;
  document.getElementById("res_email").innerText = `Correo electrónico: ${email}`;

  button.removeAttribute("disabled");

  return false;
});
