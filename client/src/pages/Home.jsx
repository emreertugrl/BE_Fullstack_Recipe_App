import React, { useState } from "react";
import api from "../api";
import { useQuery } from "@tanstack/react-query";
import Card from "../components/Card";
import Search from "../components/Search";
import Sort from "../components/Sort";

const Home = () => {
  const [order, setOrder] = useState(null);

  // api'ye gönderilecek parametre
  const params = {
    order,
  };
  //apiden tarif verilerini al
  const { isLoading, error, data } = useQuery({
    queryKey: ["recipes", order],
    queryFn: () =>
      api.get("/api/v1/recipes", { params }).then((res) => res.data.recipes),
  });

  return (
    <main className="overflow-y-auto">
      <Search />
      <section className="">
        {isLoading ? (
          "Loading"
        ) : error ? (
          "Error"
        ) : (
          <>
            <div className="flex justify-between items-center">
              <h1 className="text-3xl my-5">{data.length} tarif bulundu</h1>
              <Sort setOrder={setOrder} />
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {data.map((i) => (
                <Card key={i.id} recipe={i} />
              ))}
            </div>
          </>
        )}
      </section>
    </main>
  );
};

export default Home;
