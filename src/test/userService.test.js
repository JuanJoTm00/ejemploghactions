const userService = require("../userService")

test("Debe agregar un usuario", () => {
    const user = userService.addUser("Fulanito de Tal")
    expect(user.name).toBe("Fulanito de Tal")
    expect(userService.getUsers().length).toBe(1)
})