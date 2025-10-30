/* =========================================================
   SCRIPT.JS - FUNCIONALIDADES GERAIS
   ========================================================= */

// -------------------------
// MENU HAMBÚRGUER
// -------------------------
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');

if(toggle && nav){
  toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
}

// -------------------------
// MODAL
// -------------------------
const modals = document.querySelectorAll('.modal');

function openModal(modalId){
  const modal = document.getElementById(modalId);
  if(modal) modal.classList.add('active');
}

function closeModal(modal){
  modal.classList.remove('active');
}

// Fechar modal ao clicar no botão ou fora do conteúdo
modals.forEach(modal => {
  const closeBtn = modal.querySelector('.modal-close');
  if(closeBtn){
    closeBtn.addEventListener('click', () => closeModal(modal));
  }
  window.addEventListener('click', (e) => {
    if(e.target === modal) closeModal(modal);
  });
});

// -------------------------
// TOAST
// -------------------------
function showToast(message){
  const toast = document.getElementById('toast');
  if(toast){
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
  }
}

// -------------------------
// FORMULÁRIOS - ENVIO SIMULADO
// -------------------------
const forms = document.querySelectorAll('form');

forms.forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Abrir modal se existir
    const modal = document.getElementById('modal');
    if(modal) modal.classList.add('active');

    // Mostrar toast
    showToast('Formulário enviado com sucesso!');

    // Limpar formulário após envio
    form.reset();
  });
});

// -------------------------
// ATUALIZAÇÃO AUTOMÁTICA DO ANO
// -------------------------
const yearEl = document.getElementById('year');
if(yearEl) yearEl.textContent = new Date().getFullYear();
