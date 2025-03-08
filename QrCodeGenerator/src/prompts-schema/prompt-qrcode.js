import chalk from "chalk";

const promptQrCode = [
  {
    name: "link",
    description: chalk.yellow.bold("Digite o link para gerar o QR CODE"),
  },
  {
    name: "type",
    description: chalk.yellow.bold(
      "Escolha entre o tipo de QR CODE (1 - Normal ou (2 - Terminal"
    ),
    pattern: /^[1-2]+$/,
    message: chalk.red.italic("Escolha entre 1 e 2!"),
    required: "true",
  },
];

export default promptQrCode;
