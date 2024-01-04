test("GET to /api/v1/status should return STATUS 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");

  expect(response.status).toBe(200);
})

test("GET to /api/v1/status should return text 'Tudo Ok'", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");

  const responseText = await response.json();
  expect(responseText.mensagem).toBe("Tudo OK");
})