# Ex-Pat Journal: Back End (WIP)

The Ex-Pat Journal is a place where people from all walks of life can come together to share and experience the stories of their travels.

  - View the stories and photos taken by other travelers!
  - Upload stories from your own journies!
  - Sign up here to join our community: [Deployed Link Goes Here](link)
  - NOTE: Once registered, your token expires after 24 hours and you will need to login again.

## Dependencies

Our back end uses a number of dependencies to work properly:

* node.js 
* Express
* knex
* SQLite3
* .. and more!

To ensure that it runs properly after forking, please run the following command to install the dependencies and devDependencies and start the server.

```sh
$ npm install
$ npm install -d
```

or

```sh
$ yarn install 
$ yarn install --dev
```
## Data Types (needs updating)

### Users
| Data | Type | Required? |
| ------ | ------ | ------ | 
| id | integer | yes |
| username | string | yes |
| password | string | yes |

### Posts
| Data | Type | Required? |
| ------ | ------ | ------ | 
| id | integer | yes |
| title | string | yes |
| description | string | yes |
| user_id | integer | yes |


## Endpoints (needs updating)

The following endpoints are available through our back end:

#### Authentication Routes

| Method | Endpoint | Token Required? | Description |
| ------ | ------ | ------ | ------ |
| POST | `/auth/register` | no | Registers a new user. <br> Required Credentials: Username, password <br> Returns:  id, username, password. 
| POST | `/auth/login` | no | Existing user sign in, generates a token. <br> Required Credentials: Username, password. <br> Returns: A newly generated token.

#### User Routes

| Method | Endpoint | Token Required? | Description |
| ------ | ------ | ------ | ------ |
| GET | `/users` | yes | Returns a list of users.  
| GET | `/users/:id` | yes | Returns a single user's "profile".  
| GET | `/users/:id/posts` | yes | Returns all posts from a single user.
| DELETE | `/users/:id` | yes | Deletes a single existing user.

#### Post Routes

| Method | Endpoint | Token Required? | Description |
| ------ | ------ | ------ | ------ |
| GET | `/posts` | yes | Returns all posts.  
| GET | `/posts/:id` | yes | Returns a single post from a given ID.  
| POST | `/posts/create` | yes | Creates a new post and adds it to the database.
| PUT | `/posts/:id` | yes | Edits an existing post.
| DELETE | `/posts/:id` | yes | Deletes an existing post.
