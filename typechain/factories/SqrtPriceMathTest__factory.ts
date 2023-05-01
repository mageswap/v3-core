/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { SqrtPriceMathTest } from "../SqrtPriceMathTest";

export class SqrtPriceMathTest__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<SqrtPriceMathTest> {
    return super.deploy(overrides || {}) as Promise<SqrtPriceMathTest>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SqrtPriceMathTest {
    return super.attach(address) as SqrtPriceMathTest;
  }
  connect(signer: Signer): SqrtPriceMathTest__factory {
    return super.connect(signer) as SqrtPriceMathTest__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SqrtPriceMathTest {
    return new Contract(address, _abi, signerOrProvider) as SqrtPriceMathTest;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint160",
        name: "sqrtLower",
        type: "uint160",
      },
      {
        internalType: "uint160",
        name: "sqrtUpper",
        type: "uint160",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        internalType: "bool",
        name: "roundUp",
        type: "bool",
      },
    ],
    name: "getAmount0Delta",
    outputs: [
      {
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint160",
        name: "sqrtLower",
        type: "uint160",
      },
      {
        internalType: "uint160",
        name: "sqrtUpper",
        type: "uint160",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        internalType: "bool",
        name: "roundUp",
        type: "bool",
      },
    ],
    name: "getAmount1Delta",
    outputs: [
      {
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint160",
        name: "sqrtLower",
        type: "uint160",
      },
      {
        internalType: "uint160",
        name: "sqrtUpper",
        type: "uint160",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        internalType: "bool",
        name: "roundUp",
        type: "bool",
      },
    ],
    name: "getGasCostOfGetAmount0Delta",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint160",
        name: "sqrtLower",
        type: "uint160",
      },
      {
        internalType: "uint160",
        name: "sqrtUpper",
        type: "uint160",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        internalType: "bool",
        name: "roundUp",
        type: "bool",
      },
    ],
    name: "getGasCostOfGetAmount1Delta",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint160",
        name: "sqrtP",
        type: "uint160",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "zeroForOne",
        type: "bool",
      },
    ],
    name: "getGasCostOfGetNextSqrtPriceFromInput",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint160",
        name: "sqrtP",
        type: "uint160",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "zeroForOne",
        type: "bool",
      },
    ],
    name: "getGasCostOfGetNextSqrtPriceFromOutput",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint160",
        name: "sqrtP",
        type: "uint160",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "zeroForOne",
        type: "bool",
      },
    ],
    name: "getNextSqrtPriceFromInput",
    outputs: [
      {
        internalType: "uint160",
        name: "sqrtQ",
        type: "uint160",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint160",
        name: "sqrtP",
        type: "uint160",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "zeroForOne",
        type: "bool",
      },
    ],
    name: "getNextSqrtPriceFromOutput",
    outputs: [
      {
        internalType: "uint160",
        name: "sqrtQ",
        type: "uint160",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610845806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063af955e3b1161005b578063af955e3b146101cf578063d7cdaf7114610216578063e20f7ac01461025d578063fedf2b5f146102a057610088565b8063034d21e41461008d5780632c32d4b6146100e257806348a0c5bd14610129578063aa58276a14610170575b600080fd5b6100d0600480360360808110156100a357600080fd5b506001600160a01b03813516906001600160801b03602082013516906040810135906060013515156102e3565b60408051918252519081900360200190f35b6100d0600480360360808110156100f857600080fd5b506001600160a01b0381358116916020810135909116906001600160801b0360408201351690606001351515610304565b6100d06004803603608081101561013f57600080fd5b506001600160a01b0381358116916020810135909116906001600160801b036040820135169060600135151561031b565b6101b36004803603608081101561018657600080fd5b506001600160a01b03813516906001600160801b0360208201351690604081013590606001351515610329565b604080516001600160a01b039092168252519081900360200190f35b6100d0600480360360808110156101e557600080fd5b506001600160a01b0381358116916020810135909116906001600160801b0360408201351690606001351515610337565b6100d06004803603608081101561022c57600080fd5b506001600160a01b0381358116916020810135909116906001600160801b0360408201351690606001351515610349565b6100d06004803603608081101561027357600080fd5b506001600160a01b03813516906001600160801b036020820135169060408101359060600135151561035b565b6101b3600480360360808110156102b657600080fd5b506001600160a01b03813516906001600160801b036020820135169060408101359060600135151561036d565b6000805a90506102f58686868661037b565b505a900390505b949350505050565b6000610312858585856103cc565b95945050505050565b600061031285858585610489565b60006103128585858561037b565b6000805a90506102f586868686610489565b6000805a90506102f5868686866103cc565b6000805a90506102f5868686866104f4565b6000610312858585856104f4565b600080856001600160a01b03161161039257600080fd5b6000846001600160801b0316116103a857600080fd5b816103bf576103ba858585600161053c565b610312565b610312858585600161061d565b6000836001600160a01b0316856001600160a01b031611156103ec579293925b7bffffffffffffffffffffffffffffffff000000000000000000000000606084901b166001600160a01b03868603811690871661042857600080fd5b8361045857866001600160a01b031661044b8383896001600160a01b0316610712565b8161045257fe5b0461047e565b61047e61046f8383896001600160a01b03166107c2565b886001600160a01b03166107fc565b979650505050505050565b6000836001600160a01b0316856001600160a01b031611156104a9579293925b816104d1576103ba836001600160801b03168686036001600160a01b0316600160601b610712565b610312836001600160801b03168686036001600160a01b0316600160601b6107c2565b600080856001600160a01b03161161050b57600080fd5b6000846001600160801b03161161052157600080fd5b81610533576103ba858585600061061d565b61031285858560005b600081156105af5760006001600160a01b038411156105725761056d84600160601b876001600160801b0316610712565b61058a565b6001600160801b038516606085901b8161058857fe5b045b90506105a76105a26001600160a01b03881683610807565b61081d565b9150506102fc565b60006001600160a01b038411156105dd576105d884600160601b876001600160801b03166107c2565b6105f4565b6105f4606085901b6001600160801b0387166107fc565b905080866001600160a01b03161161060b57600080fd5b6001600160a01b0386160390506102fc565b60008261062b5750836102fc565b7bffffffffffffffffffffffffffffffff000000000000000000000000606085901b1682156106cb576001600160a01b0386168481029085828161066b57fe5b04141561069c5781810182811061069a5761069083896001600160a01b0316836107c2565b93505050506102fc565b505b6106c2826106bd878a6001600160a01b031686816106b657fe5b0490610807565b6107fc565b925050506102fc565b6001600160a01b038616848102908582816106e257fe5b041480156106ef57508082115b6106f857600080fd5b8082036106906105a2846001600160a01b038b16846107c2565b6000808060001985870986860292508281109083900303905080610748576000841161073d57600080fd5b5082900490506107bb565b80841161075457600080fd5b6000848688096000868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010186841190950394909402919094039290920491909117919091029150505b9392505050565b60006107cf848484610712565b9050600082806107db57fe5b84860911156107bb5760001981106107f257600080fd5b6001019392505050565b808204910615150190565b8082018281101561081757600080fd5b92915050565b806001600160a01b038116811461083357600080fd5b91905056fea164736f6c6343000706000a";
