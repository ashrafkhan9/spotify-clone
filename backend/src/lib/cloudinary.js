import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

// Ensure CLOUDINARY_CONFIG is defined
if (!process.env.CLOUDINARY_CONFIG) {
  console.error("⚠️ Error: CLOUDINARY_CONFIG environment variable is missing!");
} else {
  // Split CLOUDINARY_CONFIG into individual values
  const [cloud_name, api_key, api_secret] =
    process.env.CLOUDINARY_CONFIG.split(",");

  // Configure Cloudinary
  cloudinary.config({
    cloud_name,
    api_key,
    api_secret,
  });
}

export default cloudinary;
