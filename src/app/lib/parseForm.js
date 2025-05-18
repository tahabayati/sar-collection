import formidable from 'formidable'

export function parseMultipart(req) {
  return new Promise((res, rej) => {
    const form = formidable({ multiples: true })
    form.parse(req, (err, fields, files) => {
      if (err) return rej(err)
      res({ fields, files })
    })
  })
}
