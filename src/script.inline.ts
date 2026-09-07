function setupRandomPage() {
  const btn = document.getElementById("random-page-btn")
  if (btn) {
    const urls = JSON.parse(btn.getAttribute("data-urls") || "[]")
    const handleClick = () => {
      if (urls.length > 0) {
        window.location.href = urls[Math.floor(Math.random() * urls.length)]
      }
    }
    btn.addEventListener("click", handleClick)
    window.addCleanup(() => btn.removeEventListener("click", handleClick))
  }
}

document.addEventListener("nav", setupRandomPage)
document.addEventListener("render", setupRandomPage)
