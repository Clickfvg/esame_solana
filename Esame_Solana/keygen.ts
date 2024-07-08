import { Keypair } from "@solana/web3.js";

/* 

    La Keypair viene interpretata come un'interfaccia con le seguenti proprietà:

    interface Signer {
        publicKey: 4NxrwKq7yNTpqBEgNKCUVT2JVb5Yf7Z51UHByqMD54bB;
        secretKey: Uint8Array;
    }

    PublicKey è l'indirizzo del wallet, mentre SecretKey è la chiave privata che ci permette di firmare le transazioni.

*/

const keypair = Keypair.generate();

// Convertiamo la secretKey in un formato più leggibile (Base64)
const secretKeyBase64 = Buffer.from(keypair.secretKey).toString('base64');

// Ora console.logghiamo l'indirizzo del wallet e la chiave privata in modo da poterli salvare in un file
console.log(
  `Hai generato il tuo nuovo wallet: ${keypair.publicKey.toBase58()}\n\nPer salvare il tuo wallet, copia e incolla il seguente JSON in un file: {"publicKey":"${keypair.publicKey.toBase58()}","secretKey":"${secretKeyBase64}"}`
);
