import { Spinner } from "@chakra-ui/react";
import type React from "react";
import { Suspense } from "react";

type SuspenseDFProp = {
  children: React.ReactNode;
};

const SuspenseDF = ({ children }: SuspenseDFProp) => {
  return <Suspense fallback={<Spinner size="md" />}>{children}</Suspense>;
};

export default SuspenseDF;
