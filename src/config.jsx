// Conectar la aplicación de React con la base de datos de Supabase
import { createClient } from "@supabase/supabase-js";
import { Shirt, Sparkles, Snowflake, Scissors, Watch, Gem } from "lucide-react";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Lista centralizada única de categorías
export const CATEGORIAS = [
  {
    slug: "remeras",
    nombre: "Remeras",
    img: "https://images.unsplash.com/photo-1772549145407-dd62ea2ba581?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    icon: <Shirt className="w-5 h-5" />,
  },

  {
    slug: "camisas",
    nombre: "Camisas",
    img: "https://images.unsplash.com/photo-1740711152088-88a009e877bb?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    icon: <Sparkles className="w-5 h-5" />,
  },

  {
    slug: "abrigos",
    nombre: "Abrigos",
    img: "https://images.unsplash.com/photo-1782227286076-4f5153a8cdac?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    icon: <Snowflake className="w-5 h-5" />,
  },

  {
    slug: "pantalones",
    nombre: "Pantalones",
    img: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=697&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    icon: <Scissors className="w-5 h-5" />,
  },

  {
    slug: "sastreria",
    nombre: "Sastrería",
    img: "https://images.unsplash.com/photo-1536867520774-5b4f2628a69b?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    icon: <Shirt className="w-5 h-5" />,
  },

  {
    slug: "accesorios",
    nombre: "Accesorios",
    img: "https://images.unsplash.com/3/www.madebyvadim.com.jpg?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    icon: <Watch className="w-5 h-5" />,
  },

  {
    slug: "piezas_plata",
    nombre: "Piezas de Plata",
    img: "https://images.unsplash.com/photo-1721206624412-cfa399668d46?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    icon: <Gem className="w-5 h-5" />,
  },
];
