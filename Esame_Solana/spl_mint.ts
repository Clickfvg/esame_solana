import { Keypair, Connection, PublicKey } from "@solana/web3.js";

import { mintTo, getOrCreateAssociatedTokenAccount } from "@solana/spl-token";

import wallet from "./my-solana-wallet.json";

const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));
const connection = new Connection("https://api.devnet.solana.com", "confirmed");
const mint = new PublicKey("4NxrwKq7yNTpqBEgNKCUVT2JVb5Yf7Z51UHByqMD54bB");

(async () => {
  const tokenAccount = await getOrCreateAssociatedTokenAccount(
    connection,
    keypair,
    mint,
    keypair.publicKey
  );

  const ata = tokenAccount.address;
  console.log("Associated Token Account: ", ata.toBase58());

  const amount = 10e6;

  await mintTo(connection, keypair, mint, ata, keypair.publicKey, amount);

  console.log("Minted", amount, "to", ata.toBase58());
})();
