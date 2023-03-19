import { resolver } from "@blitzjs/rpc";
import db from "db";
import { z } from "zod";

const CreateWallet = z.object({
  address: z.string(),
});

export default resolver.pipe(
  resolver.zod(CreateWallet),
  resolver.authorize(),
  async (input) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const wallet = await db.wallet.create({ data: input });

    return wallet;
  }
);
