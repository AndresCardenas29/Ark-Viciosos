
function ipServer() {
    let ipServidores = document.querySelector(".ipServidores");
    ipServidores.addEventListener("click", (e) => {
        e.preventDefault();
        let servers = `
            <ul>
                <li>Genesis 2 192.168.123.123:7894</li>
                <li>xd2</li>
            </ul>
        `;
        Swal.fire({
            title: 'Server IP',
            icon: 'info',
            html:
                '<ul><li>Genesis 2: 46.251.244.157:10778</li>' +
                '<li>Fjordur: 46.251.242.141:19778</li>' +
                '<li>Crystal Isles: 46.251.245.68:17778</li>' +
                '<li>Valguero: 46.251.244.65:27778</li></ul>'
        })
    });
}

function tutorial() {
    let verTutorial = document.querySelector(".verTutorial");
    verTutorial.addEventListener('click', (e) => {
        e.preventDefault();
        Swal.fire({
            title: 'como entrar a Viciosos ARK',
            html:
                '<iframe width="400" height="315" src="https://www.youtube.com/embed/cGkv5RcPRuo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' +
                '<br><a target="_blank" href="https://www.youtube.com/watch?v=cGkv5RcPRuo">Ver en YouTube</a>'
        })
    });
}

ipServer();
tutorial();