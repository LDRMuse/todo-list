import React from "react"

import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { fab } from "@fortawesome/free-brands-svg-icons"
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"

import { faCommentDots } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faGithub, faLinkedin, faTwitter, faCommentDots)


export const Footer = () => {

return (<footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>Todo List by&nbsp;</strong>
          <a href="#" target="_blank" rel="noopener noreferrer">
            LDRMuse
          </a>
        </p>
        <div className="level">
          <a
            href="https://github.com/LDRMuse"
            target="_blank"
            rel="noopener noreferrer"
            className="level-item mx-2"
          >
            <FontAwesomeIcon icon={["fab", "github"]} />
          </a>
          <a
            href="https://dev.to/ldrmuse"
            target="_blank"
            rel="noopener noreferrer"
            className="level-item mx-2"
          >
            <FontAwesomeIcon icon="comment-dots" />
          </a>
          <a
            className="level-item mx-2"
            href="https://twitter.com/MelissaHeying"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "twitter"]} />
          </a>
        </div>
      </div>
    </footer>
)
}
