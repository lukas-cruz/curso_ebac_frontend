$(document).ready(function () {
    $('#meu-form').submit(function (e) {
        e.preventDefault();
        var Name = $('#Name').val();
        if (Name.trim() !== '') {
            var listItem = $('<li>' + Name + '</li>');
            $('#minha-list').append(listItem);
            $('#Name').val('');

            // Adiciona efeito de linha quando clica em um item da lista
            listItem.click(function () {
                $(this).toggleClass('line');
            });
        }
    });
});
