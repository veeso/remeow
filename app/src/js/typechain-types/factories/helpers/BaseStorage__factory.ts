/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  BaseStorage,
  BaseStorageInterface,
} from "../../helpers/BaseStorage";

const _abi = [
  {
    inputs: [],
    name: "ownerAddr",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_managerAddr",
        type: "address",
      },
    ],
    name: "setManagerAddr",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610320806100606000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80637978b231146100465780639c675eaa14610062578063f2fde38b14610080575b600080fd5b610060600480360381019061005b9190610293565b61009c565b005b61006a610138565b60405161007791906102cf565b60405180910390f35b61009a60048036038101906100959190610293565b61015c565b005b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146100f457600080fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146101b457600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036101ed57600080fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061026082610235565b9050919050565b61027081610255565b811461027b57600080fd5b50565b60008135905061028d81610267565b92915050565b6000602082840312156102a9576102a8610230565b5b60006102b78482850161027e565b91505092915050565b6102c981610255565b82525050565b60006020820190506102e460008301846102c0565b9291505056fea2646970667358221220925d812cb8a2b2c41f2661b742257fd043b9240fcf5219fee7e4a0b524e5155564736f6c63430008110033";

type BaseStorageConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BaseStorageConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BaseStorage__factory extends ContractFactory {
  constructor(...args: BaseStorageConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BaseStorage> {
    return super.deploy(overrides || {}) as Promise<BaseStorage>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): BaseStorage {
    return super.attach(address) as BaseStorage;
  }
  override connect(signer: Signer): BaseStorage__factory {
    return super.connect(signer) as BaseStorage__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BaseStorageInterface {
    return new utils.Interface(_abi) as BaseStorageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BaseStorage {
    return new Contract(address, _abi, signerOrProvider) as BaseStorage;
  }
}