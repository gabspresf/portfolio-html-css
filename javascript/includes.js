class MeuHeader extends HTMLElement {
    connectedCallback() {
        fetch('../partials/cabecalho.html') // importa o arquivo que é um html parcial para dentro do seu projeto
        .then(r => r.text())
        .then(html => this.innerHTML = html);
    }
}
customElements.define('custom-header', MeuHeader); // serve para definir um elemento customizado. Aqui você pode criar o nome que quiser para a nova tag

class MeuFooter extends HTMLElement {
    connectedCallback() {
        fetch('../partials/rodape.html')
            .then(r => r.text())
            .then(html => this.innerHTML = html);
    }
}
customElements.define('custom-footer', MeuFooter);
