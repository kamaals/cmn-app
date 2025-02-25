import { useFormContext } from "react-hook-form";
import React from "react";
import { Input } from "@/components/ui/input";
import {
  FormLabel,
  FormItem,
  FormField,
  FormDescription,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Eye, EyeOff } from "lucide-react";

type Props = {
  name: string;
  label: string;
  description?: string;
  type?: string;
};

function RHFPassword({ name, label, description = "", ...props }: Props) {
  const { control } = useFormContext();

  const [type, toggleType] = React.useState<"password" | "text">("password");

  const handleEyeClick = React.useCallback(() => {
    toggleType((t) => (t === "password" ? "text" : "password"));
  }, [toggleType]);

  return (
    <FormField
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormDescription
            style={{ marginTop: "-.125rem" }}
            className="text-xs"
          >
            {description}
          </FormDescription>
          <FormControl>
            <div className={"relative min-h-9"}>
              <Input
                className={"absolute"}
                {...field}
                value={field.value === undefined ? "" : field.value}
                {...props}
                type={type}
              />
              <span
                onClick={handleEyeClick}
                className={
                  "absolute right-2 top-0 bottom-0 flex-col flex justify-center items-center cursor-pointer"
                }
              >
                {type === "text" ? <Eye /> : <EyeOff />}
              </span>
            </div>
          </FormControl>
          {!!error ? <FormMessage>{error.message}</FormMessage> : null}
        </FormItem>
      )}
    />
  );
}

export default RHFPassword;
