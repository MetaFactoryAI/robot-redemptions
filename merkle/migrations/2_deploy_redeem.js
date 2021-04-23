const TToken = artifacts.require("./TToken.sol");
const Redeem = artifacts.require("./MerkleRedeem.sol");

module.exports = (deployer, network, accounts) => {
  const admin = "0x53161705022Ec05E52bd1B255D86251D2b920CE3";
  // const admin = accounts[0]; // "0x77c845E6A61F37cB7B237de90a74fbc3679FcF06"; // on Kovan

  deployer.then(async () => {
    // await deployer.deploy(TToken, "Test Bal", "TBAL", 18);
    // const token = await TToken.deployed();
    // await token.mint(admin, utils.toWei("145000"));

    // await deployer.deploy(Redeem, token.address);
    await deployer.deploy(Redeem, "0xfb5453340c03db5ade474b27e68b6a9c6b2823eb");
    // await Redeem.deployed();
    const redeem = await Redeem.deployed();
    // await token.approve(redeem.address, MAX);
    // await token.transfer(redeem.address, utils.toWei("20000"));
  });
};
