const Migrations = artifacts.require("Migrations");

module.exports = async function(deployer) {
  // const a = await Migrations.at('0x13b42b5660194715b34791cdf8d0b71968a760a5')

  deployer.deploy(Migrations, { overwrite: false });
};
