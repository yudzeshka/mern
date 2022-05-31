import React, { useState, useCallback, useContext, useEffect } from "react";
import useHttp from "../hooks/http.hooks";
import { AuthContext } from "../context/AuthContext";
import DataTable from "../components/DataTable";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function DataPage() {
  const [data, setData] = useState(null);
  const { loading, request } = useHttp();
  const { token } = useContext(AuthContext);

  const fetchData = useCallback(async () => {
    try {
      const fetched = await request("api/form", "GET", null, {
        Authorization: `Bearer ${token}`,
      });
      setData(fetched);
    } catch (e) {}
  }, [token, request]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <h1>История платежей</h1>
      {data &&
        data.map((table) => (
          <>
            <DataTable key={table._id} table={table} />
            <br />
          </>
        ))}
      <Link to={"/form"}>
        <Button variant="text">Новый платеж</Button>
      </Link>
    </>
  );
}
