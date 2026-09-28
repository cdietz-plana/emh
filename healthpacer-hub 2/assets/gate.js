/* Demo sign-in gate. This keeps casual visitors out of the prototype.
   It is not real security: anything shipped to a browser can be read. */
(function () {
  var HASH = '38599b5a729b7c73a6a9aff253cb63749f52a37718bd17de8d2973b23dd78a82';
  var KEY = 'hp-demo-unlocked';
  var gate = document.getElementById('gate'), root = document.getElementById('root');
  function unlock() { gate.hidden = true; root.hidden = false; if (window.HP_START) window.HP_START(); }
  try { if (sessionStorage.getItem(KEY) === HASH) { unlock(); return; } } catch (e) {}
  var form = document.getElementById('gate-form'), input = document.getElementById('gate-pw'), field = document.getElementById('gate-field'), err = document.getElementById('gate-err'), toggle = document.getElementById('gate-toggle');
  function sha256(text) {
    if (window.crypto && crypto.subtle) return crypto.subtle.digest('SHA-256', new TextEncoder().encode(text)).then(function (b) { return Array.from(new Uint8Array(b)).map(function (x) { return x.toString(16).padStart(2, '0'); }).join(''); });
    return Promise.resolve(text === 'PlanA' ? HASH : '');
  }
  toggle.addEventListener('click', function () { var show = input.type === 'password'; input.type = show ? 'text' : 'password'; toggle.textContent = show ? 'Hide' : 'Show'; input.focus(); });
  input.addEventListener('input', function () { err.hidden = true; field.classList.remove('err'); });
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    sha256(input.value).then(function (h) {
      if (h === HASH) { try { sessionStorage.setItem(KEY, HASH); } catch (x) {} unlock(); }
      else { err.hidden = false; field.classList.add('err'); field.classList.remove('shake'); void field.offsetWidth; field.classList.add('shake'); input.select(); }
    });
  });
  setTimeout(function () { input.focus(); }, 50);
})();
