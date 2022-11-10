import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { Legosol } from "../target/types/legosol";

describe("Legosol", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.Legosol as Program<Legosol>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
