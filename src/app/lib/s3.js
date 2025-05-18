import {
  S3Client,
  PutObjectCommand
} from '@aws-sdk/client-s3'

const ENDPOINT = 'https://storage.c2.liara.space'
const BUCKET   = 'test-ecommerce' 
const ACCESS_KEY = '0cv5kiukh52e21k4'
const SECRET_KEY = '0ef39ed5-0fd1-47b8-9240-65e7cf0d0c72'

export const s3 = new S3Client({
  endpoint: ENDPOINT,
  region:   'auto',
  credentials: { accessKeyId: ACCESS_KEY, secretAccessKey: SECRET_KEY }
})

export function publicUrl(key) {
  return `${ENDPOINT}/${BUCKET}/${key}`
}

export async function uploadBuffer(key, buffer, contentType) {
  await s3.send(new PutObjectCommand({
    Bucket: BUCKET,
    Key: key,
    ACL: 'public-read',                // <-- forever public
    Body: buffer,
    ContentType: contentType
  }))
  return publicUrl(key)
}
