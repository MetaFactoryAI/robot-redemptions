// Usage example:
// npm run disburse -- /home/greg/erc20-redeemable/merkle/test/10_totals.json 12055310

const Redeem = artifacts.require("./MerkleRedeem.sol");
const TToken = artifacts.require("./TToken.sol");
const { MerkleTree } = require("../lib/merkleTree");
const { utils } = web3;
const { loadTree } = require("./loadTree");
const fs = require("fs");

module.exports = async function(callback) {
  const admin = "0x53161705022Ec05E52bd1B255D86251D2b920CE3";
  console.log("DOne 01");

  const token = await TToken.deployed();
  console.log("DOne 0");

  try {
    await token.mint(admin, utils.toWei("15000"));

    const redeem = await Redeem.deployed();
    console.log("DOne 1");

    let weekNum = 1; // adjust accordingly

    await redeem.seedAllocations(
      weekNum,
      "0x4c4df77a6b4b32f9d64494916f726d7fad8feb3e2f68bf6478c1b02cd2a95f8a",
      utils.toWei("12976.960790000014")
    );
    console.log("DOne 2");
  } catch (e) {
    console.log(e);
  }
};
