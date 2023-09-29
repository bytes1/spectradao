import { formatDate } from "../util";

export const APP_NAME = "SPECTRA DAO";
export const APP_DESC = "Rural Empowerment Through Diverse Data";

const hostname = window.location.hostname;
export const IS_LOCAL = hostname.indexOf("localhost") !== -1;

export const COVALENT_KEY = "cqt_rQWB8rfCYgwjtQTbpGyChJrfXMcG"; // covalent api key

export const EXAMPLE_FORM = {
  title: "test data",
  description: "Test data",
  dataUrl: "bafybeiaznphofgf43tqmf6lttakxpe65ce3kqq2c6qs73lhjpcjdmpk2uq",
  keywords: "testing",
  createdAt: formatDate(),
  priceEVM: 0.01,
  files: [],
};

export const updateForm = (f) => (EXAMPLE_FORM = { ...EXAMPLE_FORM, ...f });
export const getExampleResponse = () => ({
  ...EXAMPLE_FORM,
  purchases: 0,
});

export const WEB3_PROJECT_ID =
  process.env.REACT_APP_WC_ID || "ec17b7971a950170d6c5710eb878ba9b";

export const CHAIN_OPTIONS = {
  31415: {
    name: "Filecoin Wallaby",
    symbol: "TFIL",
    url: "https://explorer.glif.io/",
    blockExplorers: ["https://explorer.glif.io/"],
    id: 314159,
    rpcUrls: ["https://wallaby.node.glif.io/rpc/v0"],
  },
};

export const ACTIVE_CHAIN =
  CHAIN_OPTIONS[process.env.REACT_APP_ACTIVE_CHAIN_ID || "31415"];

export const IPFS_BASE_URL = "https://ipfs.io/ipfs";
