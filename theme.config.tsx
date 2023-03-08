import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import {Logo} from "./components/logo";
import Headers from "./components/header";
import {competition} from "./data/competition";



const config: DocsThemeConfig = {
  logo: <Logo/>,
  project: {
    link: 'https://github.com/supercomputer-klubben-aau/sbcc-site',
  },
  chat: {
    link: competition.discordServerInvitationLink,
  },
  head: <Headers/>,
  footer: {
    text: '© ' + new Date().getFullYear() +' Super Compute Squad',
  },
  primaryHue: 266,
  useNextSeoProps() {
    return {
        titleTemplate: '%s - SBCC',
    }
  }
}

export default config
