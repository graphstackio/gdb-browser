/*
 * Copyright (c) 2002-2020 "Neo4j,"
 * Neo4j Sweden AB [http://neo4j.com]
 *
 * This file is part of Neo4j.
 *
 * Neo4j is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
import React from 'react'
import { connect } from 'react-redux'
import { version } from 'project-root/package.json'
import Render from 'browser-components/Render'
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerSubHeader,
  DrawerSection,
  DrawerSectionBody,
  DrawerFooter
} from 'browser-components/drawer'
import { getVersion, getEdition } from 'shared/modules/dbMeta/dbMetaDuck'

function asChangeLogUrl(serverVersion: string): string | undefined {
  if (!serverVersion) {
    return undefined
  }
  const tokenisedServerVersion = serverVersion.split('.')
  const releaseTag = tokenisedServerVersion.join('')
  const urlServerVersion =
    serverVersion && tokenisedServerVersion.splice(0, 2).join('.')
  return `https://github.com/neo4j/neo4j/wiki/Neo4j-${urlServerVersion}-changelog#${releaseTag}`
}

interface AboutProps {
  serverVersion: string
  serverEdition: string
}

const About = ({ serverVersion, serverEdition }: AboutProps) => (
  <Drawer id="db-about">
    <DrawerHeader>About GraphStack.io GDB</DrawerHeader>
    <DrawerBody>
      <DrawerSection>
        <DrawerSubHeader>
          Originally created by{' '}
          <a target="_blank" rel="noreferrer" href="http://neo4j.com/">
            Neo4j, Inc
          </a>
          <br />
          ensured to stay free and open source by the{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="http://graphfoundation.org/"
          >
            Graph Foundation
          </a>{' '}
          and{' '}
          <a target="_blank" rel="noreferrer" href="http://graphstack.io/">
            GraphStack.io
          </a>
        </DrawerSubHeader>
      </DrawerSection>
      <DrawerSection>
        <DrawerSectionBody>Copyright &#169; 2002-2021</DrawerSectionBody>
      </DrawerSection>
      <DrawerSection>
        <DrawerSubHeader>You are running</DrawerSubHeader>
        <DrawerSectionBody>
          <p>
            GraphStack.io GDB <br />
            <br />
            Browser version:{' '}
            <a
              href={`https://github.com/graphstackio/gdb-browser/releases/tag/${version}`}
              target="_blank"
              rel="noreferrer"
            >
              {version}
            </a>
          </p>
          <Render if={serverVersion && serverEdition}>
            <p>
              Server version:{' '}
              <a
                target="_blank"
                rel="noreferrer"
                href={asChangeLogUrl(serverVersion)}
              >
                {serverVersion}
              </a>{' '}
              ({serverEdition})
            </p>
          </Render>
          <p>
            <a
              href="https://github.com/graphstackio/gdb-browser/wiki/changelog"
              target="_blank"
              rel="noreferrer"
            >
              GraphStack.io GDB Browser Changelog
            </a>
          </p>
        </DrawerSectionBody>
      </DrawerSection>
      <DrawerSection>
        <DrawerSubHeader>License</DrawerSubHeader>
        <DrawerSectionBody>
          <a
            target="_blank"
            rel="noreferrer"
            href="http://www.gnu.org/licenses/gpl.html"
          >
            GPLv3
          </a>{' '}
          or{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="http://www.gnu.org/licenses/agpl-3.0.html"
          >
            AGPL
          </a>{' '}
          for Open Source
        </DrawerSectionBody>
      </DrawerSection>
      <DrawerSection>
        <DrawerSubHeader>Participate</DrawerSubHeader>
        <DrawerSectionBody>
          <br />
          Ask questions at{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="http://stackoverflow.com/questions/tagged/graphstack"
          >
            Stack Overflow
          </a>
          <br />
          Contribute code to{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="http://github.com/graphstackio"
          >
            GraphStack.io GDB
          </a>{' '}
          or{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="http://github.com/graphstackio/gdb-browser"
          >
            GraphStack.io GDB Browser
          </a>
          <br />
          Send us your Browser feedback via{' '}
          <a href="mailto:gdb-browser@graphstack.io?subject=GDB+Browser+feedback">
            email
          </a>
        </DrawerSectionBody>
      </DrawerSection>
      <DrawerSection>
        <DrawerSubHeader>Notice</DrawerSubHeader>
        <DrawerSectionBody>
          GraphStack.io is not affiliated, sponsored, or endorsed by Neo4j Inc,
          Neo4j Sweden AB, or the Graph Foundation, Inc.
        </DrawerSectionBody>
      </DrawerSection>
      <DrawerSection>
        <DrawerSubHeader>Thanks</DrawerSubHeader>
        <DrawerSectionBody>
          Neo4j, ONgDB, and GraphStack.io GDB wouldn&apos;t be possible without
          a fantastic community. Thanks for all the feedback, discussions and
          contributions.
        </DrawerSectionBody>
        <DrawerFooter>
          <DrawerSectionBody>
            With &#9829; from the community.
          </DrawerSectionBody>
        </DrawerFooter>
      </DrawerSection>
    </DrawerBody>
    <DrawerFooter>With &#9829; from Sweden and the USA.</DrawerFooter>
  </Drawer>
)
const mapStateToProps = (state: any) => {
  return {
    serverVersion: getVersion(state),
    serverEdition: getEdition(state)
  }
}

export default connect(mapStateToProps)(About)
