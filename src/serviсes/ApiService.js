  const BASE_URL = "https://pixabay.com/api/"
  const APIKEY = "23839618-ad76d37922a5e5280d987750e";

export function FetchPhoto(searchQuery) {
    return fetch(`${BASE_URL}?q=${searchQuery}&page=1&key=${APIKEY}&image_type=photo&orientation=horizontal&per_page=12`)
        .then(response => {
          if (response.ok) {
            return response.json()
          }

          Promise.reject(new Error(`Фото ${searchQuery} не знайдено`))
        })
}