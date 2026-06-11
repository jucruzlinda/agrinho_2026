/* ========================================= */
/* BACKGROUND DINÂMICO VIA INTERSECTION */
/* ========================================= */

const sections = document.querySelectorAll(".panel");

const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        const color = entry.target.dataset.bg;

        document.body.style.backgroundColor = color;
      }

    });

  },
  {
    threshold: 0.5
  }
);

sections.forEach(section => observer.observe(section));

/* ========================================= */
/* TERMÔMETRO DO EQUILÍBRIO */
/* ========================================= */

const thermoFill = document.getElementById("thermoFill");
const thermoIndicator = document.getElementById("thermoIndicator");
const scoreValue = document.getElementById("scoreValue");

const feedback = document.getElementById("feedback");

let score = 50;

function updateThermometer() {

  thermoFill.style.height = `${score}%`;
  thermoIndicator.style.bottom = `${score}%`;

  scoreValue.textContent = score;

  if (score >= 70) {

    thermoFill.style.filter =
      "drop-shadow(0 0 10px #57ff9f)";

  } else if (score <= 30) {

    thermoFill.style.filter =
      "drop-shadow(0 0 10px #ff5f57)";

  } else {

    thermoFill.style.filter = "none";
  }
}

function showFeedback(message) {

  feedback.textContent = message;

  feedback.classList.add("show");

  setTimeout(() => {
    feedback.classList.remove("show");
  }, 2000);
}

/* BOTÕES POSITIVOS */

document.querySelectorAll(".positive-action")
.forEach(button => {

  button.addEventListener("click", () => {

    score += 10;

    if (score > 100) score = 100;

    updateThermometer();

    showFeedback("🌱 Equilíbrio ecológico fortalecido!");
  });

});

/* BOTÕES NEGATIVOS */

document.querySelectorAll(".negative-action")
.forEach(button => {

  button.addEventListener("click", () => {

    score -= 15;

    if (score < 0) score = 0;

    updateThermometer();

    showFeedback("⚠️ Zona de alerta ambiental!");
  });

});

/* ========================================= */
/* CÁPSULA DO TEMPO */
/* ========================================= */

const submitButton =
  document.getElementById("submitCapsule");

const capsuleForm =
  document.getElementById("capsuleForm");

const certificate =
  document.getElementById("certificate");

const certificateName =
  document.getElementById("certificateName");

const certificateDate =
  document.getElementById("certificateDate");

submitButton.addEventListener("click", () => {

  const userName =
    document.getElementById("userName").value;

  const userMessage =
    document.getElementById("userMessage").value;

  if (!userName || !userMessage) {

    alert("Preencha todos os campos.");
    return;
  }

  /* SALVAR LOCALSTORAGE */

  const data = {
    name: userName,
    message: userMessage,
    date: new Date().toLocaleDateString("pt-BR")
  };

  localStorage.setItem(
    "regeneraTerraCapsule",
    JSON.stringify(data)
  );

  /* ANIMAÇÃO */

  capsuleForm.style.opacity = "0";
  capsuleForm.style.transform = "translateY(20px)";

  setTimeout(() => {

    capsuleForm.classList.add("hidden");

    certificate.classList.remove("hidden");

    certificateName.textContent = userName;

    certificateDate.textContent =
      `Emitido em ${data.date}`;

  }, 700);

});

/* ========================================= */
/* DOWNLOAD CERTIFICADO */
/* ========================================= */

document
.getElementById("downloadCertificate")
.addEventListener("click", () => {

  const printContent =
    document.querySelector(".certificate").innerHTML;

  const printWindow =
    window.open("", "", "width=900,height=700");

  printWindow.document.write(`
    <html>
      <head>
        <title>Certificado</title>

        <style>

          body {
            font-family: Arial;
            background: #111;
            color: white;

            display: flex;
            justify-content: center;
            align-items: center;

            height: 100vh;
          }

          .certificate-border {

            padding: 60px;

            border: 3px solid gold;

            border-radius: 24px;

            text-align: center;

            max-width: 700px;
          }

          button {
            display: none;
          }

        </style>

      </head>

      <body>

        ${printContent}

      </body>

    </html>
  `);

  printWindow.document.close();

  printWindow.focus();

  setTimeout(() => {
    printWindow.print();
  }, 500);

});
