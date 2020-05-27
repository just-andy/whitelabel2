import React from "react"

import socialIcons from "../../data/socialicons"

const SocialIconList = () => {
  return (
    <ul className="my-2 text-3xl flex justify-center text-center mx-auto lg:text-right lg:mx-0">
      {socialIcons.map((item, index) => {
        return (
          <li key={index} className="pr-3">
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default SocialIconList
