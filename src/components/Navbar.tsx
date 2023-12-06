'use client'

import React from "react";
import {Navbar as NextUiNavbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenu, NavbarMenuItem, NavbarMenuToggle} from "@nextui-org/react";
import { ShoppingBag } from "lucide-react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "Produtos", url: "/produtos"},
    { name: "Produtos em Promocao", url: "/produtos/promocoes"},
    { name: "Produtos por Categoria", url: "/produtos/categorias"},
    { name: "Vendas", url: "/vendas"},
    { name: "Sair", url: "/auth"},
  ];

  return (<NextUiNavbar onMenuOpenChange={setIsMenuOpen} className="bg-primary opacity-80 mb-10">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      <NavbarBrand>
        <Link href="/">
            <p className="font-bold text-inherit text-white">єcσмм cαƒє</p>
        </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link className="text-white" href="/produtos/promocoes" aria-current="page">
            Produtos em Promoção
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" href="/produtos/categorias">
            Produtos por Categoria
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" href="/vendas">
            Vendas
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
      <NavbarItem>
          <Link className="text-white" href="/cart">
            <ShoppingBag size={35} className="rounded-lg p-1 hover:bg-zinc-500"/>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} className="text-white" href="/auth" variant="flat">
            Login
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-primary opacity-80">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className={`w-full ${item.name === 'Sair' ? 'text-danger': 'text-white'}`}
              href={item.url}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextUiNavbar>
  );
}
