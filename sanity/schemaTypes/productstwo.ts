import { defineType } from "sanity"

export default defineType({
    name: 'productstwo',
    title: 'Productstwo',
    type: 'document',
    fields: [
        {
        name: 'name',
        title: 'Name',
        type: 'string',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
              source: 'name', // Automatically generates slug based on the title
              maxLength: 96,   // Optional: limit the length of the slug
            },
          },
        {
        name: 'price',
        title: 'Price',
        type: 'number',
        },
        {
        name: 'description',
        title: 'Description',
        type: 'text',
        },
        {
        name: 'image',
        title: 'Image',
        type: 'image',
        },
        {
            name:"category",
            title:"Category",
            type: 'string',
            options:{
                list:[
                   {title: 'T-Shirt', value: 'tshirt'},
                   {title: 'Short', value: 'short'}, 
                   {title: 'Jeans', value: 'jeans'} ,
                   {title: 'Hoddie', value: 'hoodie'} ,
                   {title: 'Shirt', value: 'shirt'} ,
                ]
            }
        },
        {
            name:"maincategory",
            title:"MainCategory",
            type: 'string',
            options:{
                list:[
                   {title: 'Men', value: 'men'},
                   {title: 'Women', value: 'women'}, 
                   {title: 'Kids', value: 'kids'} ,
                   {title: 'Accessories', value: 'accessories'} ,
                ]
            }
        },
        {
            name:"discountPercent",
            title:"Discount Percent",
            type: 'number',
        },
        {
            name:"new",
            type: 'boolean',
            title:"New",
        },
        {
            name:"colors",
            title:"Colors",
            type: 'array',
            of:[
                {type: 'string'}
            ]
        },
        {
            name: "productimages",
            title: "productimages",
            type: "array",
            of: [{ type: "image" }],
          },
        {
            name:"sizes",
            title:"Sizes",
            type: 'array',
            of:[
                {type: 'string'}
            ]
        }
    ],
})