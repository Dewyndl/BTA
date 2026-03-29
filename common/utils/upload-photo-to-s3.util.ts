export const uploadPhotoToS3 = async (presignedUrl: string, localUri: string): Promise<void> => {
  const fileResponse = await fetch(localUri);
  const blob = await fileResponse.blob();
  const uploadResponse = await fetch(presignedUrl, {
    method: 'PUT',
    headers: { 'Content-Type': 'image/jpeg' },
    body: blob,
  });
  if (!uploadResponse.ok) throw new Error(`S3 upload failed: ${uploadResponse.status}`);
};
