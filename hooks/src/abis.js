import PassThroughWallet from '../build/contracts/PassThroughWallet.json';
import TicketFactory from '../build/contracts/TicketFactory.json';

// type abisType = {
//   passThroughWallet: AbiItem,
//   ticketFactory: AbiItem
// };

// TODO: hacking with ignore. this is a common problem with string
// how to solve it?
export const abis = {
  // @ts-ignore
  passThroughWallet: PassThroughWallet.abi,
  // @ts-ignore
  ticketFactory: TicketFactory.abi,
};
