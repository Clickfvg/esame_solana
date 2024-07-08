import { Keypair, Connection, LAMPORTS_PER_SOL } from "@solana/web3.js";
import wallet from "./my-solana-wallet.json";

// QUI CREO UNA KEYPAIR DALLA CHIAVE SEGRETA IMPORTATA
const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

//  QUI MI CONNETTO ALLA DEVNET DI SOLANA
const connection = new Connection("https://api.devnet.solana.com", "finalized");

(async () => {
  try {
    // QUI RICHIEDO IN AIRDROP UN SOL
    const airdropSignature = await connection.requestAirdrop(
      keypair.publicKey,
      1 * LAMPORTS_PER_SOL
    );

    // QUI ATTENDO LA CONFERMA DELLA TRANSIZIONE IN AIRDROP
    await connection.confirmTransaction(airdropSignature);

    console.log(
      `COMPLIMENTI! Check out your TX here: https://explorer.solana.com/tx/${"3CdAeFSuScfuyyiLa91Cnb2E21JryEHhBZGGwX5TW2X6H1C9M15FDAaJMPcHZbDwNnpbSbvxNfUcZVp1jEy1eZRQ"}?cluster=devnet`
    );
  } catch (error) {
    console.error(error);
  }
})();
