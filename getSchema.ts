import { AppSync } from "aws-sdk";
import { Request, Response } from "express";

const client = new AppSync();

const apiId = process.env.AWS_APP_SYNC_API_ID as string;
const apiKey = process.env.AWS_APP_SYNC_API_KEY as string;

export async function schemaHandler(req: Request, res: Response) {
  try {
    const req = client.getIntrospectionSchema({
      apiId,
      format: "JSON",
      includeDirectives: true,
    });

    req.on("build", () => {
      req.httpRequest.headers["x-api-key"] = apiKey;
    });

    const result = await req.promise();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return res.type("application/json").send((result.schema as any).toString());
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, errors: ["Failed to get schema"] });
  }
}
