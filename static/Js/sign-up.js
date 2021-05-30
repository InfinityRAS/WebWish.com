/* let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.querySelector(".user-name-form")
    const password = document.querySelector(".password-form")
    const type = document.querySelector(".user-type-form")
    let uiStringDanger = `<div class="alert alert-danger">
                                Can't Sign you up due to invalid inputs. All fields are required
            </div>`

    if (name === "" || password === "" || type === "") {
        const section = document.querySelector(".sign-up-section")
        section.innerHTML = uiStringDanger + section.innerHTML;
    } else {
        form.submit()
    }
}) */