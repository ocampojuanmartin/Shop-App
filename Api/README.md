ROUTES

    - AUTHENTICATION

POST || http://localhost:5000/api/auth/register
- creates a new user, body should consist of {username, email, password}

POST || http://localhost:5000/api/auth/login
- log in, body should consist of {username, password}


    - USER

PUT || http://localhost:5000/api/users/:id
- update user properties (should go in body), to use this you need to put the token given when logged in (should go in header (bearer))

GET || http://localhost:5000/api/users/find/:id
- returns the user. token should be given in header. Only admins can use this route

GET || http://localhost:5000/api/users
- returns all users, only admins can use this route. You must add the token in the header for it to work. If you add ?new=true (query), it will return only the last 5 users created.

GET || http://localhost:5000/api/users/stats
- returns user stats, number of the month in which the user was created and total number of users created in that month. Only admins can use this route. (add token).

DELETE || http://localhost:5000/api/users/:id
- deletes user, this route also needs token.


    - PRODUCT

POST || http://localhost:5000/api/products
- creates new product, body should consist of the model Product properties (title:"", description:"", img:"", categories: [],
    size:[], color: [], price: 30). Token needed.

PUT || http://localhost:5000/api/products/62a1f62738516cbf16988e04
- updates any property of the Product model given in body, only admins can use this route and you need token.

GET || http://localhost:5000/api/products//find/62a1f62738516cbf16988e04
- returns one product, you need to specify its id for it to match. no need for token or admin.

GET || http://localhost:5000/api/products
- returns all products, no need for token or admin. If you add ?new=true (query), it will return only the last 5 products created. You can also request per category in query.

DELETE || http://localhost:5000/api/products/62a1f62738516cbf16988e04
- deletes the product given by id. Only admins can use this route. Token needed


    - ORDER

POST || http://localhost:5000/api/orders
- creates new order, body should consist of the model Order properties (userId:"", products:[{productId:"", quantity:5},{...}], amount:5, address:"") 
Token needed.

PUT || http://localhost:5000/api/orders/:id
- updates any property of the Order model given in body, only admins can use this route and you need token.

DELETE || http://localhost:5000/api/orders/:id
- deletes order given by id. Only admins can use this route. Token needed.

GET || http://localhost:5000/api/orders
- get all orders. Only admins can use this route, with token.

GET || http://localhost:5000/api/orders/find/userId
- get orders of specific users given by userId. Token needed.

GET || http://localhost:5000/api/orders/income
- returns sales of the last two months. Id shows the number of the month. You need to be admin to use this route. Token needed.


    CART

POST || http://localhost:5000/api/carts
- creates new cart. Body should consist of the model Cart properties (userId:"", products:[{productId:"", quantity:5},{...}]) 
Token needed.

PUT || http://localhost:5000/api/carts/:id
- updates any property of the Cart model requested in body. Token needed.

GET || http://localhost:5000/api/carts
- return all carts. You need to be admin and to provide token.

GET || http://localhost:5000/api/carts/find/userId
- returns cart of a single user. You need to provide the userId and token.

DELETE || http://localhost:5000/api/carts/id
- deletes the cart given by id. Need token.
