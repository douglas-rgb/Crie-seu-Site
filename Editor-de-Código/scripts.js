function renderCode() {
  const html = document.getElementById('html-code').value;
  const css = document.getElementById('css-code').value;
  const js = document.getElementById('js-code').value;

  const output = document.getElementById('output');
  const documentContent = `
    <html>
      <head>
        <style>${css}</style>
      </head>
      <body>
        ${html}
        <script>${js}<\/script>
      </body>
    </html>
  `;

  output.srcdoc = documentContent;
}
