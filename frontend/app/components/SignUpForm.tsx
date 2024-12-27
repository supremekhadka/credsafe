"use client";
import { Form } from "@nextui-org/form";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useState } from "react";

const LoginForm = () => {
  const [action, setAction] = useState<string>();

  return (
    <Form
      className="w-full max-w-xs flex flex-col gap-4"
      validationBehavior="native"
      onReset={() => setAction("reset")}
      onSubmit={(e) => {
        e.preventDefault();
        let data = Object.fromEntries(new FormData(e.currentTarget));

        setAction(`submit ${JSON.stringify(data)}`);
      }}
    >
      <Input
        isRequired
        errorMessage="Please enter a valid username"
        label="Username/Email"
        labelPlacement="outside"
        name="username"
        placeholder="Enter your username or email"
        type="text"
        validate={(value) => {
          if (value.length < 3) {
            return "Username must be at least 3 characters long";
          }
        }}
      />

      <Input
        isRequired
        errorMessage="Password must be at least 8 characters long"
        label="Password"
        labelPlacement="outside"
        name="email"
        placeholder="Enter your password"
        type="password"
      />
      <div className="flex gap-2">
        <Button variant="flat" color="secondary" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default LoginForm;
