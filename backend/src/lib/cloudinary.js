import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

// Validate and parse the CLOUDINARY_URL
if (!process.env.CLOUDINARY_URL) {
  throw new Error("⚠️ Error: CLOUDINARY_URL environment variable is missing!");
}

try {
  // Parse the URL
  const cloudinaryUrl = new URL(process.env.CLOUDINARY_URL);

  // Extract values from the URL
  const apiKey = cloudinaryUrl.username; // API Key
  const apiSecret = cloudinaryUrl.password; // API Secret
  const cloudName = cloudinaryUrl.hostname; // Cloud Name

  console.log(apiKey, apiSecret, cloudName);

  // Configure Cloudinary
  cloudinary.config({
    cloud_name: cloudName,
    api_key: apiKey,
    api_secret: apiSecret,
  });

  console.log("✅ Cloudinary configured successfully");
} catch (error) {
  console.error("❌ Failed to configure Cloudinary:", error.message);
  process.exit(1);
}

export default cloudinary;
