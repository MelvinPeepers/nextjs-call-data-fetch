import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import type { Config } from "@netlify/functions";

export const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  const currentTime = new Date().toISOString();
  console.log(`Function invoked at ${currentTime}`);

  if (event.body) {
    const body = JSON.parse(event.body);
    if (body.schedule) {
      console.log("This was a scheduled invocation");
      console.log("Schedule details:", body.schedule);
    }
  }

  // Your scheduled task logic here

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Function executed successfully at ${currentTime}`,
    }),
  };
};

export const config: Config = {
  schedule: "@hourly",
};
