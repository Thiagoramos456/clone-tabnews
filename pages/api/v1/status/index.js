function status(request, response) {
  response.status(200).json({ mensagem: "Tudo OK" });
}

export default status;