# Book Search Engine

## Description

This application, built on the MERN stack (MongoDB, Express.js, React.js, Node.js), allows users to search Google Books by title and view the results. Users can log in and save preferred book titles to their accounts. The internal database operations are facilitated by a GraphQL API powered by Apollo Server. Security measures, including JSON Web Tokens and the jwt-decode module for client-side handling, ensure secure user interactions

## Table of Contents
* [User Story](#user-story)
* [Project Requirements](#project-requirements)
* [Installation](#installation)
* [Usage](#usage)
* [Sources](#sources)
* [Issues](#issues)
* [Links](#links)
* [Collaborators](#collaborators)
* [License](#license)

## User Story
AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase


## Project Requirements
GIVEN a book search engine
WHEN I load the search engine
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
WHEN I click on the Search for Books menu option
THEN I am presented with an input field to search for books and a submit button
WHEN I am not logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
WHEN I click on the Login/Signup menu option
THEN a modal appears on the screen with a toggle between the option to log in or sign up
WHEN the toggle is set to Signup
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
WHEN the toggle is set to Login
THEN I am presented with two inputs for an email address and a password and login button
WHEN I enter a valid email address and create a password and click on the signup button
THEN my user account is created and I am logged in to the site
WHEN I enter my account’s email address and password and click on the login button
THEN I the modal closes and I am logged in to the site
WHEN I am logged in to the site
THEN the menu options change to Search for Books, an option to see my saved books, and Logout
WHEN I am logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
WHEN I click on the Save button on a book
THEN that book’s information is saved to my account
WHEN I click on the option to see my saved books
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
WHEN I click on the Remove button on a book
THEN that book is deleted from my saved books list
WHEN I click on the Logout button
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button  

## Installation

## Usage


## Sources
packages, dependencies, and technologies used in this application:

* [Insomnia](https://docs.insomnia.rest/)
* [express](https://expressjs.com/)


Website sources and research information 
- [Sequelize Data types](https://sequelize.org/docs/v7/models/data-types/)


## Issues

## Links

- [GitHub](https://github.com/erica-210/Mern-Library-Engine)
- [Render]()

## Collaborators

* [Erica San Miguel](https://github.com/erica-210)
* [Xandromus](https://github.com/Xandromus)
* [dependabot](https://docs.github.com/en/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates)
* [Georgeyoo](https://github.com/Georgeyoo)
* [rxATX](https://github.com/rxtATX)

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Copyright (c) [2023] [Team6Go-Fitness-Diary]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.