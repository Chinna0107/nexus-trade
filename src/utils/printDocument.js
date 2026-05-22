export function printDashboardDocument() {
  const cleanup = () => {
    document.body.classList.remove('dashboard-print-mode')
    window.removeEventListener('afterprint', cleanup)
  }

  document.body.classList.add('dashboard-print-mode')
  window.addEventListener('afterprint', cleanup)

  requestAnimationFrame(() => {
    window.print()
  })
}
