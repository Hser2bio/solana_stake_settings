import * as anchor from "@coral-xyz/anchor";
import {
  PublicKey,
  SystemProgram,
  Transaction,
  Connection,
  Commitment,
} from "@solana/web3.js";

export const constants = {
  rpcEndpoint: "https://api.devnet.solana.com", 
  SCALE_FACTOR_BASE: 1000000000, 
  maxWeightScale: 1, 
  SPL_TOKEN_PROGRAM_ID: new anchor.web3.PublicKey(
    "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
  ), 
  METADATA_PROGRAM_KEY: new anchor.web3.PublicKey(
    "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
  ), 
  mintToBeStaked: new PublicKey("ErNQeVLdwxNrPXNT1FChKHfebMebSDYmNqw2yTfP35En"), 
  nonce: 121, // unique number for each stake pool
  minDuration: new anchor.BN(180*3600* 24), 
  maxDuration: new anchor.BN(180*3600* 24), 
  signerKeypair: anchor.web3.Keypair.fromSecretKey(
    new Uint8Array([])
  ), 
  programId: new PublicKey("BigQUDUHPPTtNmDmC2qsvDuQosYG7Bhcf2crbE9k1XxV"), 
  tokenLockProgramId: new PublicKey(
    "DHUMrt3LNCLnczhVdzp8siqF96RdiVQKEpJUXuscLBhs"
  ), 
  stakeTokenName: "Staking Test DACAPEL Token", 
  stakeTokenSymbol: "DACAPEL", /
  tokenRecipient: new PublicKey("74EDC2ZXB1XAXEn1oQNmnLLz9kzXLKfZnrCFceyE7Gb1"), 
  startTime: new anchor.BN(1727178984), 
  totalPeriod: new anchor.BN(3600 * 24 * 365), 
  totalAmount: new anchor.BN(10000000000000), 
};
