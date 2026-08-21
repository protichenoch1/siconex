"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Product } from "@/lib/products";
type CartLine={product:Product; quantity:number};
type CartContextValue={items:CartLine[]; count:number; total:number; add:(product:Product, quantity?:number)=>void; remove:(id:string)=>void; update:(id:string, quantity:number)=>void};
const CartContext=createContext<CartContextValue | null>(null);
export function CartProvider({children}:{children:React.ReactNode}){const [items,setItems]=useState<CartLine[]>([]);useEffect(()=>{const saved=localStorage.getItem('zando-cart');if(saved) setItems(JSON.parse(saved));},[]);useEffect(()=>localStorage.setItem('zando-cart',JSON.stringify(items)),[items]);const value=useMemo(()=>({items,count:items.reduce((n,i)=>n+i.quantity,0),total:items.reduce((n,i)=>n+i.product.price*i.quantity,0),add:(product:Product,quantity=1)=>setItems(prev=>{const found=prev.find(i=>i.product.id===product.id);return found?prev.map(i=>i.product.id===product.id?{...i,quantity:i.quantity+quantity}:i):[...prev,{product,quantity}]}),remove:(id:string)=>setItems(prev=>prev.filter(i=>i.product.id!==id)),update:(id:string,quantity:number)=>setItems(prev=>quantity<1?prev.filter(i=>i.product.id!==id):prev.map(i=>i.product.id===id?{...i,quantity}:i))}),[items]);return <CartContext.Provider value={value}>{children}</CartContext.Provider>}
export function useCart(){const context=useContext(CartContext);if(!context)throw new Error('useCart must be used inside CartProvider');return context}
