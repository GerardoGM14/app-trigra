// Comportamiento compartido de los modales (<dialog class="app-modal">).
// - Abrir: cualquier elemento con data-open-modal="<id del dialog>"
// - Cerrar: data-close-modal, clic en el fondo o Esc (con animación de salida)
// - Un enlace con data-close-modal y href="#seccion" cierra y luego navega
// Los estilos de las animaciones están en global.css (.app-modal).
// Se importa desde cada componente de modal; el navegador lo carga una sola vez.

const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Precarga: las imágenes de un modal cerrado no se descargan (lazy), así que
// se piden apenas el usuario se acerca al botón, antes de abrirlo.
const preload = (dialog: HTMLElement) => {
  dialog.querySelectorAll<HTMLImageElement>('img[loading="lazy"]').forEach((img) => {
    img.loading = 'eager';
  });
};

// Fundido: marca cada imagen como cargada para mostrarla (ver .modal-img)
const revealImages = (dialog: HTMLElement) => {
  dialog.querySelectorAll<HTMLImageElement>('.modal-img:not(.is-loaded)').forEach((img) => {
    const done = () => img.classList.add('is-loaded');
    if (img.complete && img.naturalWidth > 0) done();
    else {
      img.addEventListener('load', done, { once: true });
      img.addEventListener('error', done, { once: true });
    }
  });
};

const modalFor = (el: Element | null) => {
  const opener = el?.closest<HTMLElement>('[data-open-modal]');
  const dialog = opener ? document.getElementById(opener.dataset.openModal ?? '') : null;
  return dialog instanceof HTMLDialogElement ? dialog : null;
};

export const openModal = (dialog: HTMLDialogElement) => {
  preload(dialog);
  revealImages(dialog);
  dialog.showModal();
  // Cada vez que se abre, el contenido vuelve arriba
  dialog.querySelectorAll('.overflow-y-auto').forEach((el) => (el.scrollTop = 0));
};

export const closeModal = (dialog: HTMLDialogElement, onClosed?: () => void) => {
  if (!dialog.open || dialog.classList.contains('is-closing')) return;
  const finish = () => {
    dialog.classList.remove('is-closing');
    dialog.close();
    onClosed?.();
  };
  if (reduceMotion()) return finish();
  dialog.classList.add('is-closing');
  // Solo la animación del propio <dialog> (los hijos también emiten animationend)
  const onEnd = (e: AnimationEvent) => {
    if (e.target !== dialog) return;
    dialog.removeEventListener('animationend', onEnd);
    finish();
  };
  dialog.addEventListener('animationend', onEnd);
};

// Al pasar el mouse, tocar o enfocar el botón que abre un modal, empieza la descarga
['pointerover', 'touchstart', 'focusin'].forEach((type) =>
  document.addEventListener(
    type,
    (e) => {
      const dialog = modalFor(e.target as Element);
      if (dialog) preload(dialog);
    },
    { passive: true }
  )
);

document.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;

  const opener = modalFor(target);
  if (opener) {
    e.preventDefault();
    openModal(opener);
    return;
  }

  const closer = target.closest('[data-close-modal]');
  const dialog = target.closest('dialog');
  if (closer && dialog) {
    // Enlace a una sección (ej. #contacto): primero se cierra el modal y luego se
    // navega, porque con el modal abierto la página tiene el scroll bloqueado.
    const hash = closer instanceof HTMLAnchorElement ? closer.hash : '';
    if (hash) e.preventDefault();
    closeModal(dialog, () => {
      if (!hash) return;
      history.pushState(null, '', hash);
      document.querySelector(hash)?.scrollIntoView({ behavior: reduceMotion() ? 'auto' : 'smooth' });
    });
    return;
  }

  // Clic en el fondo oscuro (fuera del contenido): el target es el propio <dialog>
  if (target instanceof HTMLDialogElement && target.open && target.classList.contains('app-modal')) {
    closeModal(target);
  }
});

// Esc: cerrar con la misma animación
document.addEventListener(
  'cancel',
  (e) => {
    if (e.target instanceof HTMLDialogElement && e.target.classList.contains('app-modal')) {
      e.preventDefault();
      closeModal(e.target);
    }
  },
  true
);
