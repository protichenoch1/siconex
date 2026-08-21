"use client";
import Link from "next/link";
import type { Product } from "@/lib/products";
import { useCart } from "./CartProvider";
export function ProductGrid({products}:{products:Product[]}){const {add}=useCart();return <div className="product-grid">{products.map(p=><article className="product-card" key={p.id}><Link href={`/products/${p.id}`}><img className="product-image" src={p.image} alt={p.name}/>{p.badge&&<span className="discount">{p.badge}</span>}<div className="product-info"><div className="product-name">{p.name}</div><div><span className="price">${p.price.toFixed(2)}</span>{p.oldPrice&&<span className="old-price">${p.oldPrice.toFixed(2)}</span>}</div><div className="rating">★ {p.rating} <span>({p.reviews})</span></div></div></Link><div className="product-info" style={{paddingTop:0}}><button className="add-button" onClick={()=>add(p)}>Add to cart</button></div></article>)}</div>}
