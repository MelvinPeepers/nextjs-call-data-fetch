import type { HandlerEvent, HandlerContext } from "@netlify/functions";
import type { Config } from "@netlify/functions";

export const handler = async (event: HandlerEvent, context: HandlerContext) => {
  const currentTime = new Date().toISOString();
  console.log(`Scheduled function ran at ${currentTime}`);

  // You can perform any scheduled task here
  // For this example, we'll just return a success message

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Scheduled function executed successfully at ${currentTime}`,
    }),
  };
};

export const config: Config = {
  schedule: "@hourly",
};
