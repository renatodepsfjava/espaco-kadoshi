document.addEventListener('DOMContentLoaded', function () {
    // ===================================================
    // 🔥 MENU MOBILE
    // ===================================================
    const menuToggle = document.getElementById('menuToggle');
    const menu = document.getElementById('mainMenu');

    if (menuToggle && menu) {
        menuToggle.addEventListener('click', function () {
            menu.classList.toggle('active');
            menuToggle.classList.toggle('open');
        });

        // Fecha o menu ao clicar em um link
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => menu.classList.remove('active'));
        });
    }

    // ===================================================
    // ✨ FADE-IN NAS SEÇÕES
    // ===================================================
    document.querySelectorAll('section, .footer, .header').forEach(el => {
        el.classList.add('fade-prepare');
    });

    const fadeSections = document.querySelectorAll('.fade-prepare');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('fade-in');
        });
    }, {threshold: 0.18});
    fadeSections.forEach(section => observer.observe(section));

    // ===================================================
    // 🔗 ROLAGEM SUAVE PARA ÂNCORAS
    // ===================================================
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function (e) {
            const id = this.getAttribute('href');

            // Verifica se o ID existe e não é apenas "#"
            if (!id || id === "#" || id.length === 1 || !document.querySelector(id)) {
                return;
            }

            const target = document.querySelector(id);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({behavior: 'smooth', block: 'start'});
            }
        });
    });

    // ===================================================
    // 💥 EFEITO DE CLIQUE EM BOTÕES
    // ===================================================
    document.querySelectorAll('.servico-btn, .hero-btn').forEach(btn => {
        btn.addEventListener('mousedown', () => btn.classList.add('clicado'));
        btn.addEventListener('mouseup', () => btn.classList.remove('clicado'));
        btn.addEventListener('mouseleave', () => btn.classList.remove('clicado'));
        btn.addEventListener('touchend', () => btn.classList.remove('clicado'));
    });

    // ===================================================
    // 📝 TELA DE CADASTRO
    // ===================================================
    const abrirCadastro = document.getElementById('abrirCadastro');
    const telaCadastro = document.getElementById('tela-cadastro');
    const botaoCancelar = document.getElementById('fecharCadastro');
    const formulario = document.getElementById("formularioCadastro");

    // Abrir tela de cadastro
    if (abrirCadastro) {
        abrirCadastro.addEventListener('click', function (e) {
            e.preventDefault();
            telaCadastro.classList.remove('oculto');
            window.scrollTo(0, 0);
        });
    }

    // Fechar tela de cadastro (apenas esconde)
    if (botaoCancelar) {
        botaoCancelar.addEventListener('click', function () {
            telaCadastro.classList.add('oculto');
        });
    }

    // Enviar formulário via WhatsApp
    if (formulario) {
        formulario.addEventListener("submit", function (e) {
            e.preventDefault();

            const nome = document.getElementById("nome").value.trim();
            const servico = document.getElementById("servico").value.trim();
            let whatsappCliente = document.getElementById("whatsapp").value.trim();

            whatsappCliente = whatsappCliente.replace(/\D/g, '');

            if (!whatsappCliente.startsWith("55")) {
                whatsappCliente = "55" + whatsappCliente;
            }

            if (!nome || !servico || whatsappCliente.length < 12) {
                alert("Por favor, preencha todos os campos corretamente.");
                return;
            }

            const numeroProfissional = "5532991397354";
            const mensagem = `Novo cadastro recebido:\n\nNome: ${nome}\nTelefone: ${whatsappCliente}\nServiço solicitado: ${servico}`;
            const url = `https://wa.me/${numeroProfissional}?text=${encodeURIComponent(mensagem)}`;

            // Fecha a tela de cadastro
            telaCadastro.classList.add('oculto');

            // Abre WhatsApp
            window.location.href = url;

            // Ao voltar para o site, rola para o topo
            window.addEventListener("focus", () => {
                setTimeout(() => {
                    window.scrollTo({top: 0, behavior: "smooth"});
                }, 500);
            }, {once: true});
        });
    }
});

// ===================================================
// 🌼 FADE-IN DAS SEÇÕES (ativado imediatamente)
// ===================================================
window.addEventListener("load", () => {
    // Ativa fade-in das seções
    document.querySelectorAll('section, .footer, .header').forEach(el => {
        el.classList.add('fade-prepare');
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {threshold: 0.18});

    document.querySelectorAll('.fade-prepare').forEach(el => observer.observe(el));
});

// ===================================================
// 📝 CHAMA FUNCAO NO FRONT-END - TELA CADASTRO
// ===================================================
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".servico-btn").forEach(botao => {
        botao.addEventListener("click", async function (e) {
            e.preventDefault();

            const servico = this.getAttribute("data-servico");

            try {
                const response = await fetch("/api/mensage", {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({servico}),
                });

                const data = await response.json();

                if (data.url) {
                    window.open(data.url, "_blank");
                } else {
                    alert("Erro ao montar link do WhatsApp.");
                }
            } catch (error) {
                alert("Erro ao enviar. Tente novamente.");
                console.error(error);
            }
        });
    });
});


// // TELA DE ENTRADA - MOSTRA APENAS 1 VEZ
// window.addEventListener("load", () => {
//   const flor = document.querySelector(".flor-intro");
//   const tela = document.getElementById("tela-inicial");
//
//   const introJaVisto = localStorage.getItem("introVisto");
//
//   if (introJaVisto) {
//     // Usuário já viu a introdução: remove a tela imediatamente
//     tela.remove();
//
//     // Ativa fade-in do conteúdo principal
//     document.querySelectorAll('section, .footer, .header').forEach(el => {
//       el.classList.add('fade-prepare');
//     });
//
//     const observer = new IntersectionObserver(entries => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('fade-in');
//         }
//       });
//     }, { threshold: 0.18 });
//
//     document.querySelectorAll('.fade-prepare').forEach(el => observer.observe(el));
//   } else {
//     // Primeira vez: exibe a flor com efeito dissolver
//     flor.classList.add("aparecer");
//
//     setTimeout(() => {
//       tela.style.opacity = "0";
//
//       setTimeout(() => {
//         tela.remove();
//         localStorage.setItem("introVisto", "true");
//
//         // Ativa fade-in das seções
//         document.querySelectorAll('section, .footer, .header').forEach(el => {
//           el.classList.add('fade-prepare');
//         });
//
//         const observer = new IntersectionObserver(entries => {
//           entries.forEach(entry => {
//             if (entry.isIntersecting) {
//               entry.target.classList.add('fade-in');
//             }
//           });
//         }, { threshold: 0.18 });
//
//         document.querySelectorAll('.fade-prepare').forEach(el => observer.observe(el));
//       }, 800); // duração da transição da tela
//     }, 4000); // tempo da flor visível
//   }
// });

// // BOTAO FLUTUANTE
// document.getElementById('botaoChat').addEventListener('click', function() {
//   window.open('https://api.whatsapp.com/send?phone=5532991397354&text=Olá! Quero tirar uma dúvida.', '_blank');
// });

/* TELA DE CADASTRO */
// Abrir e fechar a tela de cadastro


//
// // TELA DE ENTRADA - MOSTRA APENAS 1 VEZ
// window.addEventListener("load", () => {
//   const flor = document.querySelector(".flor-intro");
//   const tela = document.getElementById("tela-inicial");
//
//   const introJaVisto = localStorage.getItem("introVisto");
//
//   if (introJaVisto) {
//     // Usuário já viu a introdução: remove a tela imediatamente
//     tela.remove();
//
//     // Ativa fade-in do conteúdo principal
//     document.querySelectorAll('section, .footer, .header').forEach(el => {
//       el.classList.add('fade-prepare');
//     });
//
//     const observer = new IntersectionObserver(entries => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('fade-in');
//         }
//       });
//     }, { threshold: 0.18 });
//
//     document.querySelectorAll('.fade-prepare').forEach(el => observer.observe(el));
//   } else {
//     // Primeira vez: exibe a flor com efeito dissolver
//     flor.classList.add("aparecer");
//
//     setTimeout(() => {
//       tela.style.opacity = "0";
//
//       setTimeout(() => {
//         tela.remove();
//         localStorage.setItem("introVisto", "true");
//
//         // Ativa fade-in das seções
//         document.querySelectorAll('section, .footer, .header').forEach(el => {
//           el.classList.add('fade-prepare');
//         });
//
//         const observer = new IntersectionObserver(entries => {
//           entries.forEach(entry => {
//             if (entry.isIntersecting) {
//               entry.target.classList.add('fade-in');
//             }
//           });
//         }, { threshold: 0.18 });
//
//         document.querySelectorAll('.fade-prepare').forEach(el => observer.observe(el));
//       }, 800); // duração da transição da tela
//     }, 4000); // tempo da flor visível
//   }
// });

// // BOTAO FLUTUANTE
// document.getElementById('botaoChat').addEventListener('click', function() {
//   window.open('https://api.whatsapp.com/send?phone=5532991397354&text=Olá! Quero tirar uma dúvida.', '_blank');
// });

/* TELA DE CADASTRO */
// Abrir e fechar a tela de cadastro
