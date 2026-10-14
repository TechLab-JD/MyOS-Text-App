// MyOS Text Tools — case, reverse, base64, and counts.
const ta = document.getElementById('tx-text');
const stats = document.getElementById('tx-stats');
if (ta) {
  const title = (s) => s.replace(/\w\S*/g, (w) => w[0].toUpperCase() + w.slice(1).toLowerCase());
  const OPS = {
    upper: (s) => s.toUpperCase(),
    lower: (s) => s.toLowerCase(),
    title: title,
    reverse: (s) => s.split('').reverse().join(''),
    b64enc: (s) => { try { return btoa(unescape(encodeURIComponent(s))); } catch (e) { return s; } },
    b64dec: (s) => { try { return decodeURIComponent(escape(atob(s.trim()))); } catch (e) { return '(invalid Base64)'; } },
    clear: () => ''
  };
  function count() {
    const s = ta.value;
    const words = s.trim() ? s.trim().split(/\s+/).length : 0;
    stats.textContent = s.length + ' chars · ' + words + ' words · ' + s.split('\n').length + ' lines';
  }
  document.querySelectorAll('.tx-bar button').forEach((b) => b.addEventListener('click', () => { ta.value = OPS[b.dataset.op](ta.value); count(); }));
  ta.addEventListener('input', count);
  count();
}
