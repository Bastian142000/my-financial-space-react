import { RouterProvider } from "react-router/dom";
import { router } from "./router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";
import { CircularProgress } from "@mui/material";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster
        position="top-center"
        gutter={12}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            boxSizing: "border-box",
            width: "100%",
            fontSize: "16px",
            padding: "16px 24px",
            maxWidth: "540px",
            textAlign: "center",
            overflowWrap: "break-word",
            wordBreak: "break-word",
            whiteSpace: "normal",
            boxShadow: "8px 8px 20px 2px",
            border: "1px solid gray",
          },
        }}
      />
      <Suspense fallback={<CircularProgress color="primary" size={"42"} />}>
        <RouterProvider router={router} />
      </Suspense>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
