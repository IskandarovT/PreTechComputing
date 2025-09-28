
for (const el of document.querySelectorAll('[data-include]')) {
  const file = el.getAttribute('data-include')
  try {
    await fetch(file)
      .then(r => r.text())
      .then(html => el.innerHTML = html);
  } catch (type_error) {
    console.log("Test")
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        el.innerHTML = this.responseText;
      }
    };

    xhr.open('GET', file, true);
    xhr.send();
  }
}