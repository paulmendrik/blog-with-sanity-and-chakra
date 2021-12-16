import sanityClient from '@sanity/client'

const client = sanityClient({
  projectId: "7psq0579",
  dataset: "production",
  apiVersion: '2021-08-31', 
  token: "skHezQXwRpEWBQ0nq3zdTxVGpJKIvYvdPywpBO9YXAXDA0YDb44Heb1pkPcXRyofwoQJIlaBFW3BBQgRp8TkoBRRziD3QZaWVdsOwgqBRZqCy7yjLGGDCzRs7GvPRd44whNv408FdmTnYiuy7IFo1jljzXHNIgvJbW1sv5MuOeoxptoBpXoG",
  useCdn: false,
})

export default client;