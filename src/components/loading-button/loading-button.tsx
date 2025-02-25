import React from "react";
import { ButtonProps, Button } from "@/components/ui/button";
import SVGCircle from "@/components/loading-button/svg-circle";

function LoadingButton({
  loading,
  children,
  ...props
}: ButtonProps & { loading: boolean; children: React.ReactNode }) {
  return (
    <Button {...props} disabled={loading}>
      <span className={"font-bold"}>{children}</span>
      {loading ? (
        <span className="ml-4">
          <SVGCircle />
        </span>
      ) : null}
    </Button>
  );
}

export default LoadingButton;
