// import { create } from "ipfs-http-client";
// import Web3 from "web3";

// const projectId = getEnv("REACT_APP_IPFS_ID");
// const projectSecret = getEnv("REACT_APP_IPFS_SECRET");

// const auth = "Basic " + Buffer.from(projectId + ":" + projectSecret).toString("base64");

// const client = create({
//   host: "ipfs.infura.io",
//   port: 5001,
//   protocol: "https",
//   headers: {
//     authorization: auth,
//   },
// });
// // const web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/f9cb229a18104764a359db6ac3e7b4c2'));
// const Factory = require("../datas/evmos_contracts_dev/BWLBadgeFactory.json");

// export const WEB3_ERRORS = {
//   SUCCESS: "SUCCESS",
//   NO_DATA: "NO_DATA",
//   NO_WALLET: "NO_WALLET",
//   NET_ERROR: "NET_ERROR",
//   REJECTED: "REJECTED",
//   IPFS_ERROR: "IPFS_ERROR",
//   META_ERROR: "META_ERROR",
//   MINT_ERROR: "MINT_ERROR",
//   NO_FILE: "NO_FILE",
// };

// class ActionAPI {
//   constructor() {
//     this.web3 = null;
//     this.account = null;
//     this.contract = null;
//   }

//   getContract = () => {
//     const contract = new this.web3.eth.Contract(Factory.abi, Factory.networks["9000"].address);

//     return contract;
//   };

//   connect = async () => {
//     if (window.ethereum) {
//       const web3 = new Web3(window.ethereum);
//       try {
//         const netId = await window.ethereum.request({
//           method: "net_version",
//         });

//         if (netId === "9000") {
//           const accounts = await window.ethereum.request({
//             method: "eth_requestAccounts",
//           });

//           this.web3 = web3;

//           const contract = this.getContract();
//           this.account = accounts[0];
//           this.contract = contract;

//           return WEB3_ERRORS.SUCCESS;
//         } else {
//           return WEB3_ERRORS.NET_ERROR;
//         }
//       } catch (e) {
//         return WEB3_ERRORS.REJECTED;
//       }
//     } else {
//       return WEB3_ERRORS.NO_WALLET;
//     }
//   };

//   uploadImgIpfs = async (file) => {
//     let resultPath = "";
//     if (typeof file !== "undefined") {
//       try {
//         const result = await client.add(file);
//         resultPath = `https://ipfs.infura.io/ipfs/${result.path}`;
//       } catch (e) {
//         console.log("ipfs image upload error: ", e);
//         return WEB3_ERRORS.IPFS_ERROR;
//       }
//     } else {
//       return WEB3_ERRORS.NO_FILE;
//     }

//     return resultPath;
//   };

//   uploadMetaIpfs = async (name, description, externalLink, image, category) => {
//     let resultPath = "";
//     try {
//       const result = await client.add(
//         JSON.stringify({
//           name,
//           description,
//           external_url: externalLink,
//           image,
//           attributes: category,
//         }),
//       );

//       resultPath = `https://ipfs.infura.io/ipfs/${result.path}`;
//     } catch (e) {
//       console.log("ipfs metadata upload error: ", e);
//       return WEB3_ERRORS.META_ERROR;
//     }

//     return resultPath;
//   };

//   mintBadge = async (id, amount, uri) => {
//     let result = true;
//     try {
//       const tx = await this.contract.methods
//         .mintWithUri(this.account, id, amount, uri)
//         .send({ from: this.account }, function (err, tx) {
//           if (err) result = false;
//         });
//       console.log("TX :", tx);
//     } catch (e) {
//       result = false;
//     }

//     return result;
//   };

//   createBadge = async (amount, name, description, externalLink, file, category) => {
//     try {
//       const image = await this.uploadImgIpfs(file);
//       console.log("IMG :", image);
//       const metadataURI = await this.uploadMetaIpfs(
//         name,
//         description,
//         externalLink,
//         image,
//         category,
//       );
//       console.log("META :", metadataURI);

//       const id = parseInt(await this.contract.methods.totalSupply().call());
//       console.log("ID :", id);
//       const mintResult = await this.mintBadge(id + 1, amount, metadataURI);
//       console.log("RESULT :", mintResult);

//       return mintResult ? WEB3_ERRORS.SUCCESS : WEB3_ERRORS.MINT_ERROR;
//     } catch (e) {
//       console.log("ipfs metadata upload error: ", e);
//       return WEB3_ERRORS.MINT_ERROR;
//     }

//     return WEB3_ERRORS.SUCCESS;
//   };
// }

// export default ActionAPI;
