const TToken = artifacts.require("./TToken.sol");
const Redeem = artifacts.require("./MerkleRedeem.sol");
const { utils } = web3;

module.exports = (deployer, network, accounts) => {
  // const admin = accounts[0]; // "0x77c845E6A61F37cB7B237de90a74fbc3679FcF06"; // on Kovan
  const admin = "0x53161705022Ec05E52bd1B255D86251D2b920CE3";
  deployer.then(async () => {
    console.log("Finish Disburse");

    // const token = await TToken.deployed();
    // await token.mint(admin, utils.toWei("15000"));
    //
    // const redeem = await Redeem.deployed();
    //
    // let weekNum = 1; // adjust accordingly
    // await redeem.seedAllocations(
    //   weekNum,
    //   "0x4922680e0446afb9d185a6a8121280a5ac86d41acc9d1c57860efe5eff8ff01e",
    //   utils.toWei("12976.960790000014")
    // );
  });
};
