import { OnRpcRequestHandler } from "@metamask/snap-types";
import { getMessage } from "./message";

export const onRpcRequest: OnRpcRequestHandler = ({ origin, request }) => {
  switch (request.method) {
    case "hello":
      return wallet.request({
        method: "snap_confirm",
        params: [
          {
            prompt: getMessage(origin),
            description:
              "This custom confirmation is just for display purposes😀.",
            textAreaContent:
              "Edit the source code to make your snap do what you want.",
          },
        ],
      });
    default:
      throw new Error("Method not found.");
  }
};
