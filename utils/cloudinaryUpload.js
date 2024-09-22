const uploadToCloudinary = async (fileBuffer, folder = "crisis_images") => {
  try {
    const result = await cloudinary.v2.uploader.upload_stream(
      {
        folder,
        resource_type: "image",
      },
      (error, result) => {
        if (error) {
          throw error;
        }
        return result;
      }
    );

    return result;
  } catch (error) {
    throw error;
  }
};

export default uploadToCloudinary;
