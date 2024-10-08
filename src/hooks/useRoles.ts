import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "@/utils/constants";

export const useRoles = () => {
  const [roles, setRoles] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await axios.get(BASE_URL + "/roles");

        console.log(response.data.data, "fixing the issues 🚀🚀");

        setRoles(response.data.data);
      } catch (err: unknown) {
        setError(err.message || "Failed to fetch roles");
      } finally {
        setLoading(false);
      }
    };

    fetchRoles();
  }, []);

  return { roles, loading, error };
};
