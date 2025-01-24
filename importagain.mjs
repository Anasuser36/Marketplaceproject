import { createClient } from '@sanity/client';

const client = createClient({
    projectId: 'unh46yca',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2024-12-18',
    token: 'sk3JXOMwFZMUQwI6svLhX5Y2Zr89jPkhprmdpv7f33epABqQSgpJL3a7jHlDTHqrOanBtzJb3EJkV7h769nu6cw4g88n0Fy06WfHPCP5x0wPZRnsXIeuoUpwhgieD1isgX218BZLur7ln0fXfkZldKU4wk7VcPyxgaxO9zYwSGSKrGUTcd4B',
  });

async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);

    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${imageUrl}`);
    }

    const buffer = await response.arrayBuffer();
    const bufferImage = Buffer.from(buffer);

    const asset = await client.assets.upload('image', bufferImage, {
      filename: imageUrl.split('/').pop(),
    });

    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error('Failed to upload image:', imageUrl, error);
    return null;
  }
}

async function uploadProduct(Productstwo) {
  try {
    const imageId = await uploadImageToSanity(Productstwo.imageUrl);

    if (imageId) {
      const document = {
        _type: 'productstwo',
        name: Productstwo.name,
        description: Productstwo.description,
        price: Productstwo.price,
        image: {
          _type: 'image',
          asset: {
            _ref: imageId,
          },
        },
        category: Productstwo.category,
        discountPercent: Productstwo.discountPercent,
        isNew: Productstwo.isNew,
        colors: Productstwo.colors,
        sizes: Productstwo.sizes
      };

      const createdProduct = await client.create(document);
      console.log(`Product ${Productstwo.name} uploaded successfully:`, createdProduct);
    } else {
      console.log(`Product ${Productstwo.name} skipped due to image upload failure.`);
    }
  } catch (error) {
    console.error('Error uploading product:', error);
  }
}

async function importProducts() {
  try {
    const response = await fetch('https://template1-neon-nu.vercel.app/api/products');

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const products = await response.json();

    console.log(products)

    for (const product of products) {
      await uploadProduct(product);
    }
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

importProducts();