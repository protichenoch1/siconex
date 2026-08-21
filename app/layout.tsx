import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { CartProvider } from "@/components/CartProvider";

export const metadata: Metadata = { title: "Zando | Shop everything", description: "A modern online marketplace" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body><CartProvider><div className="announcement">Free delivery on orders over $50 · Shop safely, shop happily</div><Header />{children}<Footer /></CartProvider></body></html>; }
function Footer(){return <><section className="newsletter"><div className="container newsletter-inner"><div><h2>Get the good stuff first</h2><p>New deals, fresh finds, and useful updates—straight to your inbox.</p></div><form className="subscribe"><input aria-label="Email address" placeholder="Your email address" /><button>Subscribe</button></form></div></section><footer className="footer"><div className="container footer-top"><div><div className="brand">zan<span>do</span></div><small>Your everyday marketplace.</small></div><div>Help Center<br/>Returns & Refunds<br/>Shipping information</div><div>About Zando<br/>Sell on Zando<br/>Terms & Privacy</div></div></footer></>}
