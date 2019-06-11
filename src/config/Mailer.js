const url = "https://warm-retreat-96923.herokuapp.com/sendmail"

module.exports = {
    sendmail: (to, subject, text, html) =>
        fetch(url, {
            method: "POST",
            body: JSON.stringify({
                to, subject, text, html
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
}