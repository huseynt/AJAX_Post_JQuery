
$(document).ready(() => {
    function getJoke(e) {
        e.preventDefault()
        const data = {
            fullname: $("#name").val(),
            todo: $("#todo").val()
        }

        $.ajax({
                url: "http://localhost:3001/text",
                type: "POST",
                data: JSON.stringify(data)
            })
            .done((response) => {
                $("#list").append(`
                <ul>
                    <li>${$("#name").val()}</li>
                    <li>${$("#todo").val()}</li>
                </ul>
                `)
            })
            .fail((response) => {
                console.log(response)
            })
    }

    $("#btn").click(getJoke)
})