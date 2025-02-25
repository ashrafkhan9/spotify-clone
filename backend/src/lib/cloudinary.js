// import { v2 as cloudinary } from "cloudinary";

// import dotenv from "dotenv";
// dotenv.config();

// cloudinary.config({
// 	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
// 	api_key: process.env.CLOUDINARY_API_KEY,
// 	api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// export default cloudinary;

import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

// Split CLOUDINARY_CONFIG into individual values
const [CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET] =
  process.env.CLOUDINARY_CONFIG.split(",");

// Configure Cloudinary
cloudinary.config({
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
});

export default cloudinary;
