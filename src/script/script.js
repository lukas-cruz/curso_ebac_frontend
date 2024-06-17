const movies = [
    {
        title: "Velozes e Furiosos (2001)",
        description: "O filme que deu início a tudo, apresentando Dominic Toretto e Brian O'Conner."
    },
    {
        title: "+ Velozes + Furiosos (2003)",
        description: "Brian O'Conner retorna para ajudar a derrubar um traficante de drogas em Miami."
    },
    {
        title: "Velozes e Furiosos: Desafio em Tóquio (2006)",
        description: "Uma nova história em Tóquio com a introdução do drift racing."
    },
    {
        title: "Velozes e Furiosos 4 (2009)",
        description: "Dominic e Brian se reúnem para derrubar um traficante de heroína."
    },
    {
        title: "Velozes e Furiosos 5: Operação Rio (2011)",
        description: "Dom e Brian planejam um grande assalto no Rio de Janeiro."
    },
    {
        title: "Velozes e Furiosos 6 (2013)",
        description: "O grupo se junta para derrubar um grupo de mercenários."
    },
    {
        title: "Velozes e Furiosos 7 (2015)",
        description: "A equipe enfrenta um novo inimigo enquanto lida com a perda de um amigo."
    },
    {
        title: "Velozes e Furiosos 8 (2017)",
        description: "Dom se volta contra sua própria equipe sob a influência de uma ciberterrorista."
    },
    {
        title: "Velozes e Furiosos: Hobbs & Shaw (2019)",
        description: "Hobbs e Shaw devem trabalhar juntos para impedir uma ameaça bioterrorista."
    },
    {
        title: "Velozes e Furiosos 9 (2021)",
        description: "Dom e sua equipe enfrentam seu irmão perdido e um novo inimigo mortal."
    }
];

function openModal(index) {
    document.getElementById('modalTitle').innerText = movies[index].title;
    document.getElementById('modalDescription').innerText = movies[index].description;
    document.getElementById('myModal').style.display = "block";
}

function closeModal() {
    document.getElementById('myModal').style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}