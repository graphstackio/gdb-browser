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
const title = 'GraphStack.io GDB'
const subtitle = ''
const content = (
  <>
    <div className="teasers">
      <div className="teaser teaser-3">
        <h3>Getting started with the GraphStack.io GDB Browser</h3>
        <p className="lead">GraphStack.io GDB Browser user interface guide</p>
        <div className="icon-holder">
          <div className="clearfix" />
        </div>
        <button play-topic="intro" className="btn btn-cta">
          Get started
        </button>
      </div>

      <div className="teaser teaser-3">
        <h3>Try GraphStack.io GDB with live data</h3>
        <p className="lead">
          A complete example graph that demonstrates common query patterns.
        </p>
        <div className="icon-holder">
          <p>Actors & movies in cross-referenced pop culture.</p>
          <div className="clearfix" />
        </div>
        <button play-topic="movie-graph" className="btn btn-cta">
          Play guide
        </button>
      </div>
      <div className="teaser teaser-3">
        <h3>Cypher basics</h3>
        <p className="lead">Intro to Graphs with Cypher </p>

        <ul className="topic-bullets">
          <li>What is a graph database?</li>
          <li>How can I query a graph?</li>
        </ul>
        <div className="clearfix" />
        <button play-topic="cypher" className="btn btn-cta">
          Start querying
        </button>
      </div>
    </div>
    <footer className="tight">
      <p className="text-muted">
        Copyright &copy;
        <a
          target="_blank"
          rel="noreferrer"
          href="http://neo4j.com/"
          className="no-icon"
        >
          {' '}
          Neo4j, Inc
        </a>
        &nbsp;<span>2002???2020</span>
        &nbsp;| Modifications Copyright &copy;
        <a
          target="_blank"
          href="http://graphfoundation.org/"
          className="no-icon"
        >
          {' '}
          Graph Foundation, Inc
        </a>
        &nbsp;<span>2018-2020</span>
        &nbsp; &amp; &copy;
        <a target="_blank" href="https://graphstack.io/" className="no-icon">
          {' '}
          GraphStack.io
        </a>
        &nbsp;<span>2021</span>
      </p>
    </footer>
  </>
)

export default { title, subtitle, content }
