'use client'
import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Loader } from "lucide-react";


const page = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

   const getProducts = async () => {
     try {
       const snapshot = await getDocs(collection(db, "artworks"));
       const data = snapshot.docs.map((doc) => ({
         id: doc.id,
         ...doc.data(),
       }));

       setProducts(data);
     } catch (error) {
       console.error("Failed to fetch:", error);
     } finally {
       setLoading(false);
     }
   }
   useEffect(() => {
     getProducts();
   }, []);


   if (loading) return (
     <div className="min-h-dvh flex w-full h-full justify-center items-center">
       <Loader className="animate-spin  size-15" />
     </div>
   );


  return (
    <main className="w-full">
      <div className="justify-center flex flex-col py-4 items-center max-md:text-center">
        <h1 className="text-semibold text-xl">
          also never <span className="text-red-500"> forget </span> that{" "}
        </h1>
        <h1 className="lg:text-2xl text-xl text-semibold">
          Your <span className="text-red-500"> Imagination </span> is Everything
        </h1>
      </div>

      <div className=" lg:columns-4 columns-3 px-1 gap-1 lg:gap-4">
        {products.map((product) => (
          <div key={product.id} className=" lg:mb-4 mb-1 break-inside-avoid ">
            <img src={product.image} alt={product.artTitle} width="800" />
          </div>
        ))}
      </div>
    </main>
  );
}

export default page
