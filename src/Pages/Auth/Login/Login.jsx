import React, { useState } from "react";
import Input from "@/Pages/Auth/Components/Input";
import Label from "@/Pages/Auth/Components/Label";
import Button from "@/Pages/Auth/Components/Button";
import Link from "@/Pages/Auth/Components/Link";
import Card from "@/Pages/Auth/Components/Card";
import Heading from "@/Pages/Auth/Components/Heading";
import Form from "@/Pages/Auth/Components/Form";
import AuthLayout from "@/Pages/Auth/AuthLayout";

// Akun dummy untuk latihan (belum ada backend)
const DUMMY_EMAIL = "admin@mail.com";
const DUMMY_PASSWORD = "admin123";

const Login = ({ onLogin }) => {
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    if (data.get("email") === DUMMY_EMAIL && data.get("password") === DUMMY_PASSWORD) {
      setError("");
      onLogin();
    } else {
      setError("Email atau password salah!");
    }
  };

  return (
    <AuthLayout>
      <Card>
        <Heading as="h2">Login</Heading>
        {error && (
          <p className="mb-4 px-4 py-2 text-sm text-red-700 bg-red-100 rounded-lg">{error}</p>
        )}
        <Form onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input type="email" name="email" placeholder="Masukkan email" required />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input type="password" name="password" placeholder="Masukkan password" required />
          </div>
          <div className="flex justify-between items-center">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm text-gray-600">Ingat saya</span>
            </label>
            <Link href="#" className="text-sm">Lupa password?</Link>
          </div>
          <Button type="submit" className="w-full">Login</Button>
        </Form>
        <p className="text-sm text-center text-gray-600 mt-4">
          Belum punya akun? <Link href="#">Daftar</Link>
        </p>
      </Card>
    </AuthLayout>
  );
};

export default Login;