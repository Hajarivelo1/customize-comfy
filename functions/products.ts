const dotenv = require("dotenv");
dotenv.config();
const Airtable = require("airtable-node");
const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.AIRTABLE_BASE)
  .table(process.env.AIRTABLE_TABLE);

export async function handler(event, context, cb) {
  try {
    const response = await airtable.list({ maxRecords: 200 });
    const products = response.records.map((product) => {
      const { id, fields } = product;
    //   console.log(fields);
    const {
        name,
        featured,
        price,
        colors,
        company,
        description,
        category,
        shipping,
        images,
      } = fields;
    //   console.log(fields);
    // const { url } = Array.isArray(images) && images.length > 0 ? images[0] : {};
// console.log(url);

       const { url } = images[0];
      return {
        id,
        featured,
        name,
        price,
        colors,
        company,
        description,
        category,
        shipping,
        image: url,
      };
      
    });

    

    return {
      statusCode: 200,
      body: JSON.stringify(products),
    };
  } catch (error) {
    console.log(error);

    return {
      statusCode: 500,
      body: "There was an error",
    };
  }
}
