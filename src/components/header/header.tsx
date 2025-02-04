"use client";

import Image from "next/image";
import * as Icons from "phosphor-react";
// import * as IconsCore from "@coreui/icons";
// import * as Iconsfw from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Para usar com o FontAwesome
import styles from "./Header.module.css";
import { useState } from "react";
import { links } from "../ui/lib/definitions";
import { poppins } from "../ui/fontes";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para renderizar o ícone SVG da pasta public
  const renderIcon = (imagePath?: string) => {
    if (imagePath) {
      return <Image src={imagePath} alt="Ícone" width={20} height={20} />;
    }
    return null;
  };

  // // Função para renderizar o ícone adequado
  // const renderIcon = (iconName: string) => {
  //   // Verifica se o ícone é do Phosphor
  //   if (iconName in Icons) {
  //     const Icon = Icons[iconName as keyof typeof Icons];
  //     return <Icon size={20} weight="bold" />;
  //   }
  //   // Verifica se o ícone é do CoreUI
  //   if (iconName in IconsCore) {
  //     const IconCore = IconsCore[iconName as keyof typeof IconsCore];
  //     return <IconCore size={20} />;
  //   }
  //   // Verifica se o ícone é do FontAwesome
  //   if (iconName in Iconsfw) {
  //     return (
  //       <FontAwesomeIcon
  //         icon={Iconsfw[iconName as keyof typeof Iconsfw]}
  //         size="lg"
  //       />
  //     );
  //   }
  //   return null;
  // };

  return (
    <header className={styles.headerContainer}>
      <div className={styles.logo}>
        <a href="">
          <Image
            src="/logo-neomeca-white.svg"
            alt="Logo Neomeca"
            width={150}
            height={40}
            priority
          />
        </a>
      </div>

      <div
        className={styles.hamburgerMenu}
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`${styles.nav} ${poppins.className}`}>
        <ul className={styles.navList}>
          {links.map((link) => {
            return (
              <li key={link.id}>
                {link.children ? (
                  <div className={styles.dropdown}>
                    <a href={link.url} className={styles.navLink}>
                      {renderIcon(link.image)} {/* Renderiza o ícone */}
                      {link.name}
                    </a>
                    <ul className={styles.dropdownContent}>
                      {link.children.map((child) => (
                        <li key={child.id}>
                          <a href={child.url} className={styles.navLink}>
                            {renderIcon(child.image)} {/* Renderiza o ícone */}
                            {child.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <a href={link.url} className={styles.navLink}>
                    {renderIcon(link.image)} {/* Renderiza o ícone */}
                    {link.name}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      <div className={`${styles.mobileNav} ${isMenuOpen ? styles.open : ""}`}>
        <ul className={styles.navList}>
          {links.map((link) => (
            <li key={link.id}>
              <a href={link.url} className={styles.navLink}>
                {renderIcon(link.image)}
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.userArea}>
        <Icons.UserCircle size={24} weight="duotone" />
        <a href="">
          <span>Entrar</span>
        </a>
      </div>
    </header>
  );
}
