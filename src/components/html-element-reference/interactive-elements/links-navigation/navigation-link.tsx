import React from "react"

export type LinkNavProps = {
  link: string,
  text: string,
  className?: string,
  newTab?: boolean
}

export const CustomNavLink: React.FC<LinkNavProps> = ({ link, text, className = "", newTab = false }) => {
  return (
    <>
      <a
        href={link}
        className={className}
        target={newTab ? "_blank" : "_self"}
        rel={newTab ? "noopener noreferrer" : undefined}
      >
        {text}
      </a>
    </>
  )
}