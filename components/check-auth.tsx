"use client";

import { useEffect } from "react";
import { redirect } from "next/navigation";
import { AxiosError } from "axios";
import { me } from "@/services";
import { useStore } from "@/store";

export const CheckAuth = () => {
  const setEmail = useStore((state) => state.setEmail);

  useEffect(() => {
    (async () => {
      try {
        const res = await me();
        setEmail(res.data.user.email);
      } catch (err) {
        if (err instanceof AxiosError) {
          if (err.response?.status === 401) {
            redirect("/login");
          } else {
          }
        }
      }
    })();
  }, []);

  return null;
};
