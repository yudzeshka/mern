import React, { useState, useCallback, useContext, useEffect } from "react";
import useHttp from "../hooks/http.hooks";
import DataTable from "../components/DataTable";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { storageName } from "../constants";
import { formDataType, formList, userDataType } from "../types/dataTypes";

export default function DataPage() {
  const [data, setData] = React.useState<formList | null>(null);
  const { request } = useHttp();

  const userData: userDataType = JSON.parse(
    localStorage.getItem(storageName) || ""
  );
  const fetchData = useCallback(async (): Promise<void> => {
    try {
      const fetched: formList = await request("api/form", "GET", null, {
        Authorization: `Bearer ${userData.token}`,
      });
      setData(fetched);
    } catch (e) {}
  }, [userData.token, request]);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>История платежей</h1>
      {data &&
        data.map((table: formDataType) => (
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
