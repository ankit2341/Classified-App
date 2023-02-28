# Classified-App

# POST (to add product)
Route - /classifieds/add 

# GET 
Route- /classifieds/paginate

sample response 
```
[{
    "_id": "id",
    "name": "Nike footwear",
    "description": "bestest",
    "category": "Other",
    "image": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7fbc5e94-8d49-4730-a280-f19d3cfad0b0/custom-nike-air-max-90-by-you.png",
    "location": "india",
    "postedAt": "2023-02-04",
    "price": "4353",
}]
```
Query- ex- url/classifieds/paginate?page=1&limit=4

Route- /classifieds (to get all products)

sample response 
```
[{
    "_id": "id",
    "name": "Nike footwear",
    "description": "bestest",
    "category": "Other",
    "image": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7fbc5e94-8d49-4730-a280-f19d3cfad0b0/custom-nike-air-max-90-by-you.png",
    "location": "india",
    "postedAt": "2023-02-04",
    "price": "4353",
}]
```

Route- /classifieds (to sort data by posted date)
ex- url/classifieds?sort=postedAt&order=asc  (order can only be asc or desc)
Route - /classifieds/:category (filter by category)

sample response 
```
[{
    "_id": "id",
    "name": "Nike footwear",
    "description": "bestest",
    "category": "Other",
    "image": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7fbc5e94-8d49-4730-a280-f19d3cfad0b0/custom-nike-air-max-90-by-you.png",
    "location": "india",
    "postedAt": "2023-02-04",
    "price": "4353",
}]
```
