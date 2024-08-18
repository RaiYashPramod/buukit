'use client'
import Navbar from "@/components/Navbar";
import ProductList from "@/components/ProductList";
import { store } from "@/services/store";
import { Provider } from "react-redux";


export default function Home() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <ProductList />
      </Provider>
    </>
  );
}
