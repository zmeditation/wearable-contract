import { BigNumberish, ethers, BigNumber } from "ethers";
import { ether } from "./Utils";

interface RARITY {
  name: string;
  maxSupply: BigNumberish;
  price: BigNumberish;
}
export const DEFAULT_RARITY_PRICE = BigNumber.from("100000000000000000000"); // 100 UCC

const RARITIES: RARITY[] = [
  { name: "common", maxSupply: 100000, price: DEFAULT_RARITY_PRICE },
  { name: "uncommon", maxSupply: 10000, price: DEFAULT_RARITY_PRICE },
  { name: "rare", maxSupply: 5000, price: DEFAULT_RARITY_PRICE },
  { name: "epic", maxSupply: 1000, price: DEFAULT_RARITY_PRICE },
  { name: "legendary", maxSupply: 100, price: DEFAULT_RARITY_PRICE },
  { name: "mythic", maxSupply: 10, price: DEFAULT_RARITY_PRICE },
  { name: "unique", maxSupply: 1, price: DEFAULT_RARITY_PRICE },
];

export const RARITIES_OBJECT = {
  common: { name: "common", index: 0, value: 100000 },
  uncommon: { name: "uncommon", index: 1, value: 10000 },
  rare: { name: "rare", index: 2, value: 5000 },
  epic: { name: "epic", index: 3, value: 1000 },
  legendary: { name: "legendary", index: 4, value: 100 },
  mythic: { name: "mythic", index: 5, value: 10 },
  unique: { name: "unique", index: 6, value: 1 },
};

export const getInitialRarities = () => {
  return RARITIES;
};

export const getRarityNames = () => {
  return Object.keys(RARITIES_OBJECT);
};

export const getRarityDefaulPrices = () => {
  return Object.keys(RARITIES).map((_) => DEFAULT_RARITY_PRICE);
};

export const EMPTY_HASH =
  "0x0000000000000000000000000000000000000000000000000000000000000000";
export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
export const BASE_URI =
  "https://api-wearables.unicial.org/v1/standards/erc721-metadata/collections/";
export const RESCUE_ITEMS_SELECTOR = "0x3c963655";
export const SET_APPROVE_COLLECTION_SELECTOR = "0x46d5a568";
export const SET_EDITABLE_SELECTOR = "0x2cb0d48a";
export const genRanHex = (size: number) =>
  [...Array(size)]
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join("");
export const getRandomAddress = () => {
  const wallet = ethers.Wallet.createRandom();
  return wallet.address;
};

const BENEFICIARY_ADDRESS = getRandomAddress();
export const ITEMS = [
  [
    RARITIES_OBJECT.common.name,
    ether("10"),
    BENEFICIARY_ADDRESS,
    "1:bird_mask:hat:female,male",
  ],
  [
    RARITIES_OBJECT.common.name,
    ether("10"),
    BENEFICIARY_ADDRESS,
    "1:classic_mask:hat:female,male",
  ],
  [
    RARITIES_OBJECT.common.name,
    ether("10"),
    BENEFICIARY_ADDRESS,
    "1:clown_nose:hat:female,male",
  ],
  [
    RARITIES_OBJECT.common.name,
    ether("10"),
    BENEFICIARY_ADDRESS,
    "1:asian_fox:hat:female,male",
  ],
  [
    RARITIES_OBJECT.common.name,
    ether("10"),
    BENEFICIARY_ADDRESS,
    "1:killer_mask:hat:female,male",
  ],
  [
    RARITIES_OBJECT.common.name,
    ether("10"),
    BENEFICIARY_ADDRESS,
    "1:serial_killer_mask:hat:female,male",
  ],
  [
    RARITIES_OBJECT.legendary.name,
    ether("10"),
    BENEFICIARY_ADDRESS,
    "1:theater_mask:hat:female,male",
  ],
  [
    RARITIES_OBJECT.legendary.name,
    ether("10"),
    BENEFICIARY_ADDRESS,
    "1:tropical_mask:hat:female,male",
  ],
];
export const MAX_UINT256 = BigNumber.from(
  "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
);
export const CONTRACT_NAME = "DummyCollection";
export const CONTRACT_SYMBOL = "SymbolCollection";
export const getInitData = (options: any) => {
  const initializeABI = [
    {
      inputs: [
        {
          internalType: "string",
          name: "_name",
          type: "string",
        },
        {
          internalType: "string",
          name: "_symbol",
          type: "string",
        },
        {
          internalType: "string",
          name: "baseURI_",
          type: "string",
        },
        {
          internalType: "address",
          name: "_creator",
          type: "address",
        },
        {
          internalType: "bool",
          name: "_shouldComplete",
          type: "bool",
        },
        {
          internalType: "bool",
          name: "_isApproved",
          type: "bool",
        },
        {
          internalType: "contract IRarities",
          name: "_rarities",
          type: "address",
        },
        {
          components: [
            {
              internalType: "string",
              name: "rarity",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "price",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "beneficiary",
              type: "address",
            },
            {
              internalType: "string",
              name: "metadata",
              type: "string",
            },
          ],
          internalType: "struct ERC721BaseCollection.ItemParam[]",
          name: "_items",
          type: "tuple[]",
        },
      ],
      name: "initialize",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ];
  let iface = new ethers.utils.Interface(initializeABI);
  const functionSignature = iface.encodeFunctionData("initialize", [
    options.name || CONTRACT_NAME,
    options.symbol || CONTRACT_SYMBOL,
    options.baseURI || BASE_URI,
    options.creator,
    options.shouldComplete,
    options.shouldApprove,
    options.rarities,
    options.items || ITEMS,
  ]);
  return functionSignature;
};
