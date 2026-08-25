import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    title: "Puff House | Pods Descartáveis",
    meta: [
      { name: "description", content: "Conheça a Puff House, uma marca urbana com identidade moderna, design e coleções exclusivas." },
      { property: "og:title", content: "Puff House | Pods Descartáveis" },
      { property: "og:description", content: "Coleções exclusivas e design moderno para seu estilo urbano." },
      { property: "og:image", content: "/products/puff-house-logo.png" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/products/puff-house-logo.png" },
    ],
  }),
});

function Index() {
  const [showIntro, setShowIntro] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState<{ name: string; price: number; quantity: number }[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem("hasSeenIntro");
    if (!hasSeenIntro) {
      setShowIntro(true);
    }
    setIsLoading(false);
  }, []);

  const enterSite = () => {
    setIsLeaving(true);
    setTimeout(() => {
      setShowIntro(false);
      sessionStorage.setItem("hasSeenIntro", "true");
    }, 800);
  };

  if (isLoading) {
    return <div className="fixed inset-0 bg-[#050505] z-[200]" />;
  }

  if (showIntro) {
    return (
      <div className={`fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center p-6 overflow-hidden transition-all duration-700 ease-in-out ${isLeaving ? "opacity-0 scale-110 pointer-events-none" : "opacity-100 scale-100"}`}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#7B00FF]/20 rounded-full blur-[120px] animate-pulse" />
        
        <div className={`relative z-10 flex flex-col items-center transition-all duration-500 ${isLeaving ? "translate-y-[-20px] opacity-0" : "translate-y-0 opacity-100"}`}>
          <img 
            src="/products/puff-house-logo.png" 
            alt="Puff House" 
            className="w-64 md:w-[450px] mb-12 animate-in fade-in zoom-in duration-1000 drop-shadow-[0_0_50px_rgba(123,0,255,0.4)] animate-pulse"
          />
          
          <button 
            onClick={enterSite}
            className="group flex flex-col items-center gap-4 transition-all hover:scale-110"
          >
            <span className="text-[#BFC0C5] text-sm font-bold tracking-[0.3em] uppercase opacity-70 group-hover:opacity-100 transition-opacity">
              Entrar na experiência
            </span>
            <div className="w-12 h-12 rounded-full border border-[#7B00FF] flex items-center justify-center group-hover:bg-[#7B00FF] transition-all">
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="text-[#7B00FF] group-hover:text-white"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    );
  }

  const products = [
    { name: "Descartável - Elf Bar - TRIO - 40000 puffs", originalPrice: 144.90, price: 115.92, brand: "ELF BAR", image: "/products/elf-bar-trio.png" },
    { name: "Descartável - Ignite - V Frozen Icy - 20000 puffs", originalPrice: 124.90, price: 99.92, brand: "IGNITE", image: "/products/ignite-v-frozen.png" },
    { name: "Descartável - Ignite - V Nano - 1000 puffs", originalPrice: 44.90, price: 35.92, brand: "IGNITE", image: "/products/ignite-v-nano.png" },
    { name: "Descartável - Ignite - V155 Ultra Slim - 15500 puffs", originalPrice: 119.90, price: 95.92, brand: "IGNITE", image: "/products/ignite-v155.png" },
    { name: "Ignite - V55 Ultra Thin", originalPrice: 94.90, price: 75.92, brand: "IGNITE", image: "/products/ignite-v15.png" },
    { name: "Ignite - V80 NE - New Edition", originalPrice: 109.90, price: 87.92, brand: "IGNITE", image: "/products/ignite-v80.png" },
    { name: "Ignite V400 Mix Dual Tank", originalPrice: 179.90, price: 143.92, brand: "IGNITE", image: "/products/ignite-v-frozen-triple.png" },
    { name: "Life Pod - Base bateria (SOMENTE BASE/Bateria) SEM REFIL", originalPrice: 27.90, price: 22.32, brand: "LIFE POD", image: "/products/life-pod-base.png" },
    { name: "Descartável - Ignite - V300 Ultra Slim - 30000 puffs", originalPrice: 149.90, price: 119.92, brand: "IGNITE", image: "/products/ignite-v30.png" },
    { name: "Descartável - Ignite - V400 ICE - 40000 puffs", originalPrice: 174.90, price: 139.92, brand: "IGNITE", image: "/products/ignite-v40-ice.png" },
    { name: "Descartável - Ignite - V400 Sweet - 40000 puffs", originalPrice: 175.90, price: 140.72, brand: "IGNITE", image: "/products/ignite-v40-sweet.png" },
    { name: "Descartável - Life Pod - Eco 2 - 10k (Refil)", originalPrice: 84.90, price: 67.92, brand: "LIFE POD", image: "/products/life-pod-eco.png" },
    { name: "Descartável - Life Pod - Eco 2 - 10k (Refil)", originalPrice: 84.90, price: 67.92, brand: "LIFE POD", image: "/products/life-pod-eco-2.png" },
    { name: "Descartável - Life Pod - Eco PRO - 8000 puffs (Refil)", originalPrice: 67.90, price: 54.32, brand: "LIFE POD", image: "/products/life-pod-eco-8k.png" },
    { name: "Descartável - Life Pod - Eco Pro - Base bateria", originalPrice: 39.90, price: 31.92, brand: "LIFE POD", image: "/products/life-pod-base.png" },
    { name: "Descartável - Life Pod - Eco Pro Kit - 8k", originalPrice: 105.90, price: 84.72, brand: "LIFE POD", image: "/products/life-pod-kit.png" },
  ];

  const sections = [
    { id: "inicio", label: "Início" },
    { id: "produtos", label: "Produtos" },
    { id: "pagamento", label: "Pagamento" },
    { id: "sobre", label: "Sobre Nós" },
    { id: "contato", label: "Contato" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const addToCart = (product: { name: string; price: number }) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.name === product.name);
      if (existingItem) {
        return prevCart.map((item) =>
          item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (name: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.name !== name));
  };

  const updateQuantity = (name: string, delta: number) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.name === name) {
          const newQuantity = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const checkoutToWhatsapp = () => {
    const phoneNumber = "5511999999999";
    const message = encodeURIComponent(
      `Olá! Gostaria de fazer um pedido:\n\n${cart
        .map((item) => `- ${item.name} (${item.quantity}x) - R$ ${(item.price * item.quantity).toFixed(2).replace(".", ",")}`)
        .join("\n")}\n\n*Total: R$ ${cartTotal.toFixed(2).replace(".", ",")}*`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <header className="fixed top-0 w-full border-b border-[#7B00FF]/20 bg-[#050505]/80 backdrop-blur-md z-50">
        <nav className="container mx-auto flex items-center justify-between py-4 px-6">
          <Link 
            to="/" 
            className="flex items-center gap-2"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <img src="/products/puff-house-logo.png" alt="Puff House Logo" className="h-10 w-auto" />
            <div className="text-2xl font-black italic tracking-tighter hidden sm:block">
              <span className="text-white">PUFF</span>
              <span className="text-[#7B00FF]"> HOUSE</span>
            </div>
          </Link>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            {sections.map((section) => (
              <a 
                key={section.id} 
                href={`#${section.id}`} 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(section.id);
                }}
                className="hover:text-[#D000FF] transition-colors"
              >
                {section.label}
              </a>
            ))}
          </div>
          <div className="flex gap-4 items-center">
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative hover:text-[#7B00FF] transition-colors p-2"
            >
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#D000FF] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-in zoom-in">
                  {cart.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              )}
            </button>
            <a 
              href="https://wa.me/5511999999999" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#7B00FF] transition-colors"
            >
              <MessageCircle size={20} />
            </a>
            <a 
              href="https://www.instagram.com/puffhousepods/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#7B00FF] transition-colors"
            >
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        <section id="inicio" className="relative h-[80vh] flex flex-col items-center justify-center text-center px-6">
          <img src="/products/puff-house-logo.png" alt="Puff House" className="w-64 md:w-96 mb-8 drop-shadow-[0_0_30px_rgba(123,0,255,0.5)]" />
          <h1 className="sr-only">
            PUFF HOUSE
          </h1>
          <p className="text-xl text-[#BFC0C5] max-w-2xl mb-8">
            Conheça a Puff House, uma marca urbana com identidade moderna, design e coleções exclusivas.
          </p>
          <div className="flex gap-4">
            <button 
              onClick={() => scrollToSection("produtos")}
              className="bg-[#7B00FF] hover:bg-[#D000FF] px-8 py-3 rounded-none font-bold transition-all text-white"
            >
              VER COLEÇÃO
            </button>
            <button 
              onClick={() => scrollToSection("sobre")}
              className="border border-white hover:bg-white hover:text-black px-8 py-3 rounded-none font-bold transition-all text-white"
            >
              CONHECER A MARCA
            </button>
          </div>
        </section>

        <section id="produtos" className="py-20 px-6 bg-[#0a0a0a]">
          <div className="container mx-auto">
            <h2 className="text-4xl font-black italic tracking-tighter mb-12 border-l-4 border-[#7B00FF] pl-4">PRODUTOS</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product, i) => (
                <div key={i} className="bg-[#151515] border border-[#7B00FF]/10 p-6 flex flex-col group relative overflow-hidden transition-all hover:border-[#7B00FF]/40">
                  <div className="aspect-square mb-6 flex items-center justify-center relative">
                    <div className="absolute top-0 right-0 bg-[#D000FF] text-white text-[10px] font-bold px-2 py-1 z-20">
                      20% OFF
                    </div>
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 z-10"
                    />
                    <div className="absolute inset-0 bg-[#7B00FF]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="text-sm font-bold text-[#BFC0C5] mb-4 min-h-[40px]">
                    {product.name}
                  </h3>
                  <div className="mt-auto">
                    <div className="text-xs text-[#BFC0C5]/50 line-through mb-1">
                      R$ {product.originalPrice.toFixed(2).replace(".", ",")}
                    </div>
                    <div className="text-xl font-black text-[#D000FF]">
                      R$ {product.price.toFixed(2).replace(".", ",")}
                    </div>
                  </div>
                  <button 
                    onClick={() => addToCart({ name: product.name, price: product.price })}
                    className="mt-6 w-full py-2 bg-transparent border border-[#7B00FF] text-[#7B00FF] font-bold text-xs hover:bg-[#7B00FF] hover:text-white transition-all uppercase tracking-widest"
                  >
                    Adicionar ao Carrinho
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pagamento" className="py-20 px-6">
          <div className="container mx-auto">
            <h2 className="text-4xl font-black italic tracking-tighter mb-12 text-right border-r-4 border-[#D000FF] pr-4 uppercase">Formas de Pagamento</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#151515] border border-[#D000FF]/10 p-12 flex flex-col items-center justify-center hover:border-[#D000FF]/50 transition-colors group">
                <span className="text-[#D000FF] text-5xl mb-6 font-black italic">PIX</span>
                <span className="font-bold tracking-widest text-lg group-hover:text-[#D000FF] transition-colors">PAGAMENTO INSTANTÂNEO</span>
              </div>
              <div className="bg-[#151515] border border-[#D000FF]/10 p-12 flex flex-col items-center justify-center hover:border-[#D000FF]/50 transition-colors group">
                <span className="text-[#D000FF] text-3xl mb-4 font-black italic text-center">CARTÃO DE CRÉDITO</span>
                <span className="font-bold tracking-widest text-lg group-hover:text-[#D000FF] transition-colors text-center">EM ATÉ 12X SEM ACRÉSCIMO</span>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="py-20 px-6 bg-[#0a0a0a]">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-black italic tracking-tighter mb-8 text-center">SOBRE NÓS</h2>
            <p className="text-[#BFC0C5] leading-relaxed text-center text-lg">
              A Puff House nasceu da necessidade de unir o estilo de vida urbano com design sofisticado. 
              Nossas coleções são pensadas para quem não abre mão da exclusividade e da qualidade, 
              mantendo sempre a essência das ruas em cada detalhe.
            </p>
          </div>
        </section>

        <section id="contato" className="py-20 px-6 border-t border-[#7B00FF]/20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-black italic tracking-tighter mb-8">CONTATO</h2>
            <p className="text-[#BFC0C5] mb-8">Entre em contato com nossa equipe exclusiva.</p>
            <div className="flex justify-center gap-8">
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#7B00FF] hover:text-[#D000FF] font-bold flex items-center gap-2 uppercase underline"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
              <a 
                href="mailto:puffhouse91@gmail.com" 
                className="text-[#7B00FF] hover:text-[#D000FF] font-bold underline uppercase"
              >
                E-MAIL
              </a>
              <a 
                href="https://www.instagram.com/puffhousepods/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#7B00FF] hover:text-[#D000FF] font-bold flex items-center gap-2 uppercase underline"
              >
                <svg 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                Instagram
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 bg-[#050505] border-t border-[#7B00FF]/10 px-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-sm text-[#BFC0C5]">
          <div className="font-black italic">
            <span className="text-white">PUFF</span>
            <span className="text-[#7B00FF]"> HOUSE</span>
          </div>
          <p>© 2026 PUFF HOUSE. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <a 
              href="https://wa.me/5511999999999" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#7B00FF] transition-colors"
            >
              <MessageCircle size={18} />
            </a>
            <a 
              href="https://www.instagram.com/puffhousepods/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#7B00FF] transition-colors"
            >
              <svg 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <span>TERMOS</span>
            <span>PRIVACIDADE</span>
          </div>
        </div>
      </footer>

      {/* Cart Drawer */}
      <div className={`fixed inset-0 z-[100] transition-opacity duration-300 ${isCartOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsCartOpen(false)} />
        <div className={`absolute right-0 top-0 h-full w-full max-w-md bg-[#0a0a0a] border-l border-[#7B00FF]/20 p-8 flex flex-col transition-transform duration-500 ease-out ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-2xl font-black italic tracking-tighter">MEU CARRINHO</h2>
            <button onClick={() => setIsCartOpen(false)} className="text-[#BFC0C5] hover:text-white">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-[#BFC0C5]">
                <p className="mb-4">Seu carrinho está vazio</p>
                <button onClick={() => setIsCartOpen(false)} className="text-[#7B00FF] underline font-bold uppercase text-xs">Começar a comprar</button>
              </div>
            ) : (
              <div className="space-y-6">
                {cart.map((item) => (
                  <div key={item.name} className="flex justify-between items-start border-b border-[#7B00FF]/10 pb-6">
                    <div className="flex-1">
                      <h4 className="text-sm font-bold mb-2">{item.name}</h4>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center border border-[#7B00FF]/30">
                          <button onClick={() => updateQuantity(item.name, -1)} className="px-2 py-1 hover:bg-[#7B00FF]/20 transition-colors">-</button>
                          <span className="px-3 text-sm">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.name, 1)} className="px-2 py-1 hover:bg-[#7B00FF]/20 transition-colors">+</button>
                        </div>
                        <button onClick={() => removeFromCart(item.name)} className="text-xs text-red-500/70 hover:text-red-500 uppercase">Remover</button>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-[#D000FF]">R$ {(item.price * item.quantity).toFixed(2).replace(".", ",")}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {cart.length > 0 && (
            <div className="mt-8 pt-8 border-t border-[#7B00FF]/20">
              <div className="flex justify-between items-center mb-6">
                <span className="text-[#BFC0C5] uppercase tracking-widest text-sm">Total</span>
                <span className="text-2xl font-black text-[#D000FF]">R$ {cartTotal.toFixed(2).replace(".", ",")}</span>
              </div>
              <button 
                onClick={checkoutToWhatsapp}
                className="w-full bg-[#7B00FF] hover:bg-[#D000FF] text-white py-4 font-black italic tracking-widest flex items-center justify-center gap-3 transition-all uppercase"
              >
                <MessageCircle size={20} />
                Finalizar no WhatsApp
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
